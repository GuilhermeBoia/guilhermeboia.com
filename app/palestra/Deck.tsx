"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "./slides";

const readHash = (max: number) => {
  if (typeof window === "undefined") return 0;
  const n = parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isNaN(n)) return 0;
  return Math.min(Math.max(n - 1, 0), max - 1);
};

export default function Deck() {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [mounted, setMounted] = useState(false);
  const touchStart = useRef<number | null>(null);

  const stepsOf = (i: number) => slides[i]?.steps ?? 1;

  const go = useCallback(
    (target: number, atStep = 0) => {
      setIndex(Math.min(Math.max(target, 0), total - 1));
      setStep(atStep);
    },
    [total]
  );
  const next = useCallback(() => {
    if (step < stepsOf(index) - 1) setStep(step + 1);
    else if (index < total - 1) go(index + 1);
  }, [go, index, step, total]);
  const prev = useCallback(() => {
    if (step > 0) setStep(step - 1);
    else if (index > 0) go(index - 1, stepsOf(index - 1) - 1);
  }, [go, index, step]);

  useEffect(() => {
    setMounted(true);
    setIndex(readHash(total));
    document.documentElement.style.setProperty("--selection-color", "#FF6A13");
    const onHash = () => {
      setIndex(readHash(total));
      setStep(0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [total]);

  useEffect(() => {
    if (!mounted) return;
    window.history.replaceState(null, "", `#${index + 1}`);
  }, [index, mounted]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else document.documentElement.requestFullscreen().catch(() => {});
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
        case "Enter":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
        case "Backspace":
          e.preventDefault();
          prev();
          break;
        case "Home":
          go(0);
          break;
        case "End":
          go(total - 1);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "n":
        case "N":
          setShowNotes((v) => !v);
          break;
        case "Escape":
          setShowNotes(false);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta < 0) next();
    else prev();
  };

  if (!mounted) return null;

  const slide = slides[index];

  return (
    <div
      className="deck fixed inset-0 overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Progresso: uma linha fina, sem gradiente */}
      <div className="absolute top-0 left-0 right-0 h-px z-30" style={{ background: "var(--line)" }}>
        <div
          className="h-full transition-[width] duration-300"
          style={{ width: `${((index + 1) / total) * 100}%`, background: "var(--paper)" }}
        />
      </div>

      <div
        className="relative z-10 h-full w-full flex items-center"
        style={{ padding: "clamp(2rem, 6vh, 5rem) clamp(1.5rem, 7vw, 7rem)" }}
      >
        <AnimatePresence mode="wait">
          <motion.section
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full flex flex-col justify-center"
          >
            {typeof slide.content === "function" ? slide.content(step) : slide.content}
          </motion.section>
        </AnimatePresence>
      </div>

      {showNotes && slide.notes && (
        <aside
          className="absolute bottom-14 left-0 right-0 z-30 mx-auto w-[min(90vw,54rem)] px-6 py-5 text-base leading-relaxed"
          style={{ background: "#141311", color: "var(--paper)", borderLeft: "3px solid var(--accent)" }}
        >
          {slide.notes}
        </aside>
      )}

      {/* Rodapé: só o contador. Teclas: ← → · F tela cheia · N notas */}
      <div
        className="absolute bottom-0 right-0 z-20 px-6 py-4 text-sm tabular-nums"
        style={{ color: "var(--muted)" }}
      >
        <button onClick={prev} aria-label="Anterior" className="px-2 hover:text-[var(--paper)]">←</button>
        <span className="px-1">{index + 1} / {total}</span>
        <button onClick={next} aria-label="Próximo" className="px-2 hover:text-[var(--paper)]">→</button>
      </div>
    </div>
  );
}
