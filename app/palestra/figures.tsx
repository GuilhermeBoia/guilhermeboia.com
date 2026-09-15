"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ---------- Colagem: só fotos, grade 12x6 ---------- */
type Tile = { src: string; area: string; pos?: string; alt: string };
const tiles: Tile[] = [
  { src: "/slides/web/06.jpg", area: "1 / 1 / 4 / 5", alt: "Time de basquete nos Jogos Escolares da Juventude" },
  { src: "/slides/web/03.jpg", area: "1 / 5 / 4 / 8", pos: "50% 72%", alt: "Noivado na igreja" },
  { src: "/slides/web/01.jpg", area: "1 / 8 / 4 / 13", pos: "50% 60%", alt: "Natal em família" },
  { src: "/slides/web/04.jpg", area: "4 / 1 / 7 / 6", pos: "50% 45%", alt: "Família reunida" },
  { src: "/slides/web/02.jpg", area: "4 / 6 / 7 / 8", pos: "30% 60%", alt: "Trabalhando no notebook" },
  { src: "/slides/web/07.jpg", area: "4 / 8 / 7 / 11", pos: "50% 28%", alt: "Aprovação na UFCG" },
  { src: "/slides/web/05.jpg", area: "4 / 11 / 7 / 13", pos: "50% 40%", alt: "Selfie" },
];

function CollageBackdrop({
  tiles: list,
  opacity = 0.6,
  overlay,
}: {
  tiles: Tile[];
  opacity?: number;
  overlay: string;
}) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <div
        className="absolute inset-0 grid"
        style={{ gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "repeat(6, 1fr)", gap: "4px" }}
      >
        {list.map((t) => (
          <div key={t.src} className="relative overflow-hidden" style={{ gridArea: t.area }}>
            <Image
              src={t.src}
              alt=""
              fill
              sizes="40vw"
              className="object-cover"
              style={{ objectPosition: t.pos ?? "50% 50%", filter: "saturate(1.15)", opacity }}
              priority
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0" style={{ background: overlay }} />
    </div>
  );
}

/* ---------- Capa: nome à esquerda, foto à direita, colagem ao fundo ---------- */
export function Cover() {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
      <CollageBackdrop
        tiles={tiles}
        overlay="linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.45) 100%)"
      />
      <div className="relative z-10">
        <h1 className="display display-lg">Guilherme Boia</h1>
        <p className="mt-6 ml-2 display display-sm">Programador</p>
        <p className="mt-2 ml-2 muted" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.4rem)" }}>
          e quase cientista da computação
        </p>
      </div>
      <div className="relative z-10 hidden lg:flex justify-end">
        <div className="relative" style={{ width: "min(42vh, 26rem)", aspectRatio: "1 / 1" }}>
          <Image
            src="/images/profile.jpeg"
            alt="Guilherme Bóia"
            fill
            className="rounded-2xl object-cover"
            priority
            sizes="26rem"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Como eu decidi: pergunta + colagem da faculdade ---------- */
// Grade 8x6 à direita da pergunta. area = "linha-início / col-início / linha-fim / col-fim".
const collegeTiles: Tile[] = [
  { src: "/slides/web/ufcg-07.jpg", area: "1 / 1 / 4 / 5", pos: "50% 55%", alt: "Sala de aula na UFCG" },
  { src: "/slides/web/ufcg-06.jpg", area: "1 / 5 / 4 / 7", pos: "50% 55%", alt: "Saída da aula no fim de tarde" },
  { src: "/slides/web/ufcg-02.jpg", area: "1 / 7 / 4 / 9", pos: "55% 55%", alt: "Laboratório de computação" },
  { src: "/slides/web/ufcg-03.jpg", area: "4 / 1 / 7 / 3", pos: "45% 55%", alt: "Aula com projetor" },
  { src: "/slides/web/ufcg-05.jpg", area: "4 / 3 / 7 / 5", pos: "50% 60%", alt: "Página da disciplina no monitor" },
  { src: "/slides/web/ufcg-04.jpg", area: "4 / 5 / 7 / 7", pos: "50% 55%", alt: "Setup de estudo" },
  { src: "/slides/web/ufcg-01.jpg", area: "4 / 7 / 7 / 9", pos: "50% 50%", alt: "Espaço de estudo" },
];

export function HowIDecided() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10 items-center h-full">
      <h2 className="display display-md">
        Por que eu decidi
        <br />
        fazer <span className="accent">isso</span>?
      </h2>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(6, 1fr)",
          gap: "5px",
          height: "min(76vh, 40vw)",
        }}
      >
        {collegeTiles.map((t) => (
          <div key={t.src} className="relative overflow-hidden" style={{ gridArea: t.area }}>
            <Image src={t.src} alt={t.alt} fill sizes="20vw" className="object-cover" style={{ objectPosition: t.pos }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Exame: palavras riscadas uma a uma, depois Matemática ---------- */
const rejected = [
  "Humanas", "Biológicas", "Direito", "Medicina", "Artes", "Cinema",
  "Criatividade", "Línguas", "História", "Escrita", "Música", "Teatro",
];
const STEP = 0.11;

export function Exam() {
  const strikeStart = 0.4 + rejected.length * STEP;
  const mathAt = strikeStart + rejected.length * 0.07 + 0.3;
  return (
    <div>
      <h2 className="display display-md">Eu sabia onde eu era bom.</h2>
      <div
        className="flex flex-wrap mt-8 display display-sm"
        style={{ columnGap: "0.6em", rowGap: "0.15em", maxWidth: "24ch" }}
      >
        {rejected.map((w, i) => (
          <motion.span
            key={w}
            className="relative inline-block muted"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * STEP, duration: 0.25 }}
          >
            {w}
            <motion.span
              aria-hidden
              className="absolute left-0 right-0"
              style={{ top: "52%", height: "0.08em", background: "var(--accent)", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: strikeStart + i * 0.07, duration: 0.18, ease: "easeOut" }}
            />
          </motion.span>
        ))}
      </div>
      <motion.div
        className="display display-lg accent mt-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: mathAt, duration: 0.5, ease: "easeOut" }}
      >
        Matemática.
      </motion.div>
    </div>
  );
}

/* ---------- Depois que entrei: gráfico sobre colagem da faculdade e trabalho ---------- */
const journeyTiles: Tile[] = [
  { src: "/slides/web/ufcg-07.jpg", area: "1 / 1 / 4 / 5", pos: "50% 55%", alt: "" },
  { src: "/slides/web/phoebus.jpg", area: "1 / 5 / 4 / 7", pos: "50% 40%", alt: "" },
  { src: "/slides/web/ufcg-02.jpg", area: "1 / 7 / 4 / 9", pos: "55% 55%", alt: "" },
  { src: "/slides/web/ufcg-06.jpg", area: "1 / 9 / 4 / 11", pos: "50% 55%", alt: "" },
  { src: "/slides/web/office-02.jpg", area: "1 / 11 / 4 / 13", pos: "50% 55%", alt: "" },
  { src: "/slides/web/ufcg-03.jpg", area: "4 / 1 / 7 / 3", pos: "45% 55%", alt: "" },
  { src: "/slides/web/ufcg-05.jpg", area: "4 / 3 / 7 / 5", pos: "50% 60%", alt: "" },
  { src: "/slides/web/02.jpg", area: "4 / 5 / 7 / 7", pos: "30% 60%", alt: "" },
  { src: "/slides/web/ufcg-01.jpg", area: "4 / 7 / 7 / 9", pos: "50% 50%", alt: "" },
  { src: "/slides/web/ufcg-04.jpg", area: "4 / 9 / 7 / 11", pos: "50% 55%", alt: "" },
  { src: "/slides/web/office-01.jpg", area: "4 / 11 / 7 / 13", pos: "50% 55%", alt: "" },
];

export function Timeline() {
  return (
    <div className="relative z-10 h-full flex flex-col justify-center" style={{ gap: "clamp(1rem, 4vh, 3rem)" }}>
      <CollageBackdrop tiles={journeyTiles} opacity={0.55} overlay="rgba(0,0,0,0.72)" />
      <h2 className="relative z-10 display display-md">Minha jornada.</h2>
      <div className="relative z-10">
        <Trajectory />
      </div>
    </div>
  );
}

/* ---------- O que eu construí: telas da plataforma ---------- */
export function Built() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-center h-full">
      <div>
        <h2 className="display display-md">O que eu construí.</h2>
        <p className="lede mt-6">
          Uma plataforma de estudos usada todo dia por <strong>mais de 3.000 alunos</strong>.
        </p>
      </div>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1.1fr", height: "min(72vh, 40vw)" }}
      >
        <figure className="relative overflow-hidden" style={{ border: "1px solid var(--line)" }}>
          <Image src="/slides/web/medway-v1.jpg" alt="Primeira versão da tela de login" fill sizes="33vw" className="object-cover object-top" />
          <figcaption className="absolute left-3 bottom-2 muted" style={{ fontSize: "0.9rem" }}>v1</figcaption>
        </figure>
        <figure className="relative overflow-hidden" style={{ border: "1px solid var(--line)" }}>
          <Image src="/slides/web/medway-v2.jpg" alt="Segunda versão da tela de login" fill sizes="33vw" className="object-cover object-top" />
          <figcaption className="absolute left-3 bottom-2 muted" style={{ fontSize: "0.9rem" }}>v2</figcaption>
        </figure>
        <figure className="relative overflow-hidden col-span-2" style={{ border: "1px solid var(--line)" }}>
          <Image src="/slides/web/medway-cronograma.jpg" alt="Tela de cronogramas" fill sizes="66vw" className="object-cover object-top" />
        </figure>
      </div>
    </div>
  );
}

/* ---------- E a IA?: logos ao fundo ---------- */
const aiLogos = [
  "openai", "claude", "googlegemini", "anthropic", "githubcopilot", "perplexity",
  "mistralai", "deepseek", "meta", "huggingface", "x", "ollama",
  "claude", "openai", "googlegemini", "githubcopilot", "deepseek", "perplexity",
];

export function AiBackdrop() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none grid place-items-center"
      style={{ gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(3, 1fr)", padding: "6vh 4vw" }}
      aria-hidden
    >
      {aiLogos.map((name, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${name}-${i}`}
          src={`/logos/ai/${name}.svg`}
          alt=""
          style={{
            width: "clamp(3rem, 7vw, 7rem)",
            height: "clamp(3rem, 7vw, 7rem)",
            opacity: 0.14,
            transform: `rotate(${((i * 37) % 21) - 10}deg) translate(${((i * 53) % 30) - 15}px, ${((i * 29) % 30) - 15}px)`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Ciclo: cinco etapas em anel ---------- */
const steps = ["Sou bom", "Me dedico", "Resultado", "Reconhecimento", "Gosto mais"];

export function Cycle() {
  const size = 100;
  const r = 34;
  const rLabel = 44;
  const cx = 50;
  const cy = 50;
  return (
    <div className="relative mx-auto" style={{ width: "min(58vh, 40rem)", aspectRatio: "1 / 1" }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--accent)" />
          </marker>
        </defs>
        {steps.map((_, i) => {
          const a0 = (i / steps.length) * Math.PI * 2 - Math.PI / 2 + 0.28;
          const a1 = ((i + 1) / steps.length) * Math.PI * 2 - Math.PI / 2 - 0.28;
          const x0 = cx + r * Math.cos(a0);
          const y0 = cy + r * Math.sin(a0);
          const x1 = cx + r * Math.cos(a1);
          const y1 = cy + r * Math.sin(a1);
          return (
            <path
              key={i}
              d={`M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.6"
              markerEnd="url(#arrow)"
            />
          );
        })}
      </svg>
      {steps.map((label, i) => {
        const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + rLabel * Math.cos(a);
        const y = cy + rLabel * Math.sin(a);
        const side = Math.abs(Math.cos(a)) < 0.2 ? "center" : Math.cos(a) > 0 ? "left" : "right";
        const tx = side === "center" ? "-50%" : side === "left" ? "0%" : "-100%";
        return (
          <div
            key={label}
            className="absolute display"
            style={{
              left: `${(x / size) * 100}%`,
              top: `${(y / size) * 100}%`,
              transform: `translate(${tx}, -50%)`,
              fontSize: "clamp(1rem, 2.1vw, 2rem)",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Correnteza: linhas que correm ---------- */
export function Current() {
  const lines = Array.from({ length: 9 });
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-[40vh] overflow-hidden pointer-events-none"
      style={{ maskImage: "linear-gradient(to bottom, transparent, black 30%)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%)" }}
      aria-hidden
    >
      <svg viewBox="0 0 2000 400" preserveAspectRatio="none" className="absolute inset-0 w-[200%] h-full current-lines">
        {lines.map((_, i) => {
          const y = 30 + i * 42;
          const amp = 10 + (i % 3) * 6;
          let d = `M 0 ${y}`;
          for (let x = 0; x <= 2000; x += 100) {
            const c1 = x + 25;
            const c2 = x + 75;
            const dir = (x / 100) % 2 === 0 ? 1 : -1;
            d += ` C ${c1} ${y + amp * dir}, ${c2} ${y + amp * dir}, ${x + 100} ${y}`;
          }
          return (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={i % 4 === 1 ? "var(--accent)" : "var(--paper)"}
              strokeOpacity={i % 4 === 1 ? 0.9 : 0.18 + (i % 3) * 0.08}
              strokeWidth={i % 4 === 1 ? 2.5 : 1.5}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
    </div>
  );
}

/* ---------- Trajetória: renda em degraus, sem números ---------- */
type Point = { m: number; v: number; label?: string };
// m = meses desde jan/2023. Valores só definem a proporção.
const points: Point[] = [
  { m: -4, v: 0, label: "UFCG" },
  { m: 1, v: 800, label: "Phoebus" },
  { m: 15, v: 1500 },
  { m: 22, v: 2300, label: "Medway" },
  { m: 24, v: 4000 },
  { m: 33, v: 7000, label: "Liderança" },
  { m: 36, v: 15500, label: "Novos projetos" },
  { m: 39, v: 19500 },
  { m: 44, v: 22000 },
];
const START = -4; // set/2022: entrada
const END = 47; // dez/2026: formatura

export function Trajectory() {
  const W = 1000;
  const H = 300;
  const padL = 10;
  const padR = 10;
  const padT = 64;
  const padB = 40;
  const maxV = 22000;
  const x = (m: number) => padL + ((m - START) / (END - START)) * (W - padL - padR);
  const y = (v: number) => H - padB - (v / maxV) * (H - padT - padB);

  let d = `M ${x(points[0].m)} ${y(points[0].v)}`;
  for (let i = 1; i < points.length; i++) {
    d += ` H ${x(points[i].m)} V ${y(points[i].v)}`;
  }
  d += ` H ${x(END)}`;
  const area = `${d} V ${H - padB} H ${x(points[0].m)} Z`;

  const years = [
    { m: -4, t: "2022" },
    { m: 0, t: "2023" },
    { m: 12, t: "2024" },
    { m: 24, t: "2025" },
    { m: 36, t: "2026" },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Renda crescendo em degraus ao longo da faculdade">
      <path d={area} fill="var(--accent)" fillOpacity="0.12" className="rise" style={{ animationDelay: "1.4s" }} />
      <path d={d} fill="none" stroke="var(--accent)" strokeWidth="4" pathLength={1} className="draw" strokeLinejoin="miter" />

      {/* eixo do tempo */}
      <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} stroke="var(--line)" />
      {years.map((yr) => (
        <g key={yr.t}>
          <line x1={x(yr.m)} x2={x(yr.m)} y1={H - padB} y2={H - padB + 8} stroke="var(--muted)" />
          <text x={x(yr.m) + 6} y={H - padB + 26} fill="var(--muted)" fontSize="18" fontFamily="inherit">
            {yr.t}
          </text>
        </g>
      ))}

      {/* formatura */}
      <line x1={x(END)} x2={x(END)} y1={padT - 30} y2={H - padB} stroke="var(--paper)" strokeDasharray="4 6" strokeOpacity="0.6" />
      <text x={x(END) - 8} y={padT - 40} fill="var(--paper)" fontSize="18" textAnchor="end" fontFamily="inherit">
        Formatura
      </text>
      <line x1={x(END)} x2={x(END)} y1={H - padB} y2={H - padB + 8} stroke="var(--muted)" />
      <text x={x(END) - 6} y={H - padB + 26} fill="var(--muted)" fontSize="18" textAnchor="end" fontFamily="inherit">
        2027
      </text>

      {/* marcos */}
      {points.filter((p) => p.label).map((p, i) => {
        const px = x(p.m);
        const py = y(p.v);
        const flip = p.m > 30;
        return (
          <g key={p.label} className="rise" style={{ animationDelay: `${1.5 + i * 0.12}s` }}>
            <circle cx={px} cy={py} r="7" fill="var(--ink)" stroke="var(--accent)" strokeWidth="3" />
            <line x1={px} x2={px} y1={py - 10} y2={py - 34} stroke="var(--muted)" />
            <text
              x={flip ? px - 8 : px + 8}
              y={py - 40}
              fill="var(--paper)"
              fontSize="19"
              fontWeight="500"
              textAnchor={flip ? "end" : "start"}
              fontFamily="inherit"
            >
              {p.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
