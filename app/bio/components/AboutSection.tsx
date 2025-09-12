"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section
      id="sobre"
      className="relative py-16 md:py-24 px-6 md:px-8 bg-black text-white overflow-hidden"
    >
      {/* Minimal Background Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div className="inline-flex text-center" {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Quem sou eu?
            </h2>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-center mb-12 md:mb-20">
          {/* Mobile: Photo First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 md:px-16">
              <Image
                src="/images/profile.jpeg"
                alt="Guilherme Boia"
                fill
                className="rounded-2xl object-cover"
                priority
                sizes="(max-width: 768px) 320px, 384px"
              />
              {/* Darker overlay instead of gradient */}
              <div className="absolute inset-0 rounded-2xl bg-black/20" />

              {/* Mobile: Name and title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl lg:hidden">
                <h3 className="text-2xl font-normal mb-1 text-white">
                  Guilherme Boia
                </h3>
                <p className="text-lg text-gray-300">Engenheiro de Software</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1 px-8 md:pl-16"
          >
            {/* Desktop: Name and title */}
            <div className="hidden lg:block">
              <h3 className="text-3xl font-normal mb-2 text-white">
                Guilherme Boia
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Engenheiro de Software
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
              <p className="text-gray-400">
                Sou programador, mas sempre tive interesse pela área de negócios
                — pensar em produtos e criar soluções é algo que sempre gostei
                de fazer. Desde o início do curso de Computação venho buscando
                experiências e aprendizados pra{" "}
                <span className="font-medium text-white">
                  conseguir unir a parte técnica com a visão de produto e
                  negócios.
                </span>
              </p>

              <p className="text-gray-400">
                Já participei de vários projetos que, sem perder a essência do
                seu negócio,{" "}
                <span className="font-medium text-white">
                  usaram a tecnologia para crescer, se organizar e se
                  diferenciar no mercado.
                </span>{" "}
                Com a IA, o horizonte de possibilidades para criar soluções que
                realmente transformem a forma como as pessoas trabalham é
                enorme.{" "}
                <span className="font-medium text-white">
                  E esse é o meu objetivo: ajudar empresas e profissionais a
                  usarem tecnologia para resolverem problemas reais, serem mais
                  eficientes e produtivos.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
