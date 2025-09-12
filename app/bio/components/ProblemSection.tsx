"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  FolderTree, X
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export function ProblemSection() {
  const problems = [
    {
      icon: <FolderTree className="w-5 h-5" />,
      title: "Diversas planilhas, uma para cada coisa",
      impact: "Falta de organização",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Processos repetitivos que tomam horas do time",
      impact: "Perda de tempo",
    },
    {
      icon: <X className="w-5 h-5" />,
      title: "Entregas úteis, mas que não encantam",
      impact: "Zero encantamento",
    },
  ];

  return (
    <section
      id="cenario"
      className="relative py-16 md:py-24 px-6 md:px-8 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-white">
            <div className="mb-1">Está preso em um labirinto de</div>
            <div className="min-h-[1.2em]">
              <TypeAnimation
                sequence={[
                  "planilhas?",
                  2000, // Pausa de 2 segundos
                  "processos manuais?",
                  2000,
                  "ferramentas?",
                  2000,
                  "dados?",
                  2000,
                  "anotações?",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 react-type-animation-cursor"
                repeat={Infinity}
                cursor={true}
                deletionSpeed={65}
                style={{
                  fontSize: "inherit",
                  fontWeight: "inherit",
                }}
              />
            </div>
          </h2>

          <p className="text-md md:text-xl text-gray-400 max-w-xl mx-auto">
            Muitas empresas vivem assim e isso gera{" "}
            <span className="text-red-400 font-medium">
              bagunça, perda de tempo e zero encantamento
            </span>
            .
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300">
                {/* Icon and Impact */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                    {problem.icon}
                  </div>
                  <h1 className="text-xl font-bold text-white">
                    {problem.impact}
                  </h1>
                </div>

                {/* Title as subtitle */}
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {problem.title}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-gray-300 font-medium">
              Eu e você condordamos que só vamos deixando essas coisas pra
              depois, né?
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
