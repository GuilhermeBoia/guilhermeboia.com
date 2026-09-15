"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { AiBackdrop, Cover, Current, Exam, HowIDecided, Timeline } from "./figures";

export interface Slide {
  id: string;
  content: ReactNode | ((step: number) => ReactNode);
  /** Passos internos: a seta avança o passo antes de trocar de slide. */
  steps?: number;
  notes?: ReactNode;
}

const Lede = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`lede ${className}`}>{children}</p>
);

export const slides: Slide[] = [
  {
    id: "capa",
    content: <Cover />,
    notes: (
      <>
        Guilherme Boia, 22 anos, último período de CC na UFCG, filho de Kamila e Gustavo, 5 irmãos, caso daqui
        a 5 meses. Só fala.
      </>
    ),
  },

  {
    id: "como-decidi",
    content: <HowIDecided />,
    notes: <>Pergunta pra turma. Deixar no ar um segundo antes de avançar.</>,
  },

  {
    id: "exame",
    content: <Exam />,
    notes: (
      <>
        Não tinha vontade nem era bom em humanas ou biológicas. Matemática e física sempre foram as
        minhas melhores matérias, e eu gostava do resultado. É muito difícil querer o que você não
        tem vontade e não é bom. Se eu fizesse Medicina ou Direito, poderia dar certo. Mas seria
        muito mais dolorido.
      </>
    ),
  },

  {
    id: "correnteza",
    content: (
      <>
        <div className="relative z-10 mb-auto" style={{ marginTop: "clamp(0rem, 6vh, 4rem)" }}>
          <h2 className="display display-lg">
            Nade a favor
            <br />
            da correnteza.
          </h2>
          <Lede className="mt-6">
            Nadar contra é possível. <strong>Mas custa muito mais.</strong>
          </Lede>
        </div>
        <Current />
      </>
    ),
    notes: (
      <>
        Nadar contra impede de chegar aonde você quer? Não. Mas é bem mais difícil. Tudo fica mais
        fácil quando você constrói a vida na direção da sua inclinação natural.
      </>
    ),
  },

  {
    id: "crianca",
    content: (
      <div>
        <h2 className="display display-lg">
          O que chamava sua atenção quando <span className="accent">criança</span>?
        </h2>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 lede" style={{ maxWidth: "none" }}>
          <li className="rule pt-4">A matéria que parecia fácil.</li>
          <li className="rule pt-4">O que você fazia sem ninguém mandar.</li>
          <li className="rule pt-4">O que diziam de você.</li>
        </ul>
      </div>
    ),
    notes: <>Contar a história da professora de matemática. Puxar memórias da turma.</>,
  },

  {
    id: "caminhos",
    steps: 2,
    content: (step) => (
      <div>
        <h2 className="display display-md">
          O que um <span className="accent">programador</span> faz?
        </h2>
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="caminhos"
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {[
                  ["Pesquisa", "Mestrado, doutorado, laboratório."],
                  ["Big techs", "Google, Meta, Amazon, multinacionais."],
                  ["Empresa", "Emprego CLT, time fixo, carreira."],
                  ["Empreender", "Startup, produto próprio, mais responsabilidade."],
                ].map(([t, d]) => (
                  <div key={t} className="rule pt-4">
                    <div className="display display-sm">{t}</div>
                    <div className="lede mt-1" style={{ fontSize: "clamp(1rem, 1.7vw, 1.6rem)" }}>{d}</div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.p
                key="resposta"
                className="display display-lg accent"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                Resolve problemas.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    ),
    notes: (
      <>
        Quatro caminhos principais: pesquisa e vida acadêmica; big techs e multinacionais; trabalho
        comum CLT; empreender, startup, mais responsabilidade. Próximo passo: em qualquer um deles o
        trabalho é o mesmo. Escutar como as pessoas trabalham, mapear o gargalo e o trabalho manual,
        e pôr a energia delas no lugar certo.
      </>
    ),
  },

  {
    id: "faculdade",
    content: (
      <div>
        <h2 className="display display-md">O que se vê na faculdade.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mt-10">
          {[
            ["Fundamentos de Matemática", "Cálculo", "Introdução à Programação", "Lógica"],
            ["Estruturas de Dados", "Probabilidade e Estatística", "Banco de Dados", "Arquitetura de Computadores"],
            ["Sistemas Operacionais", "Redes", "Engenharia de Software", "Inteligência Artificial"],
            ["Análise de Algoritmos", "Compiladores", "Projeto em Computação", "TCC"],
          ].map((block, i) => (
            <ul key={i} className="rule pt-4 stack" style={{ "--gap": "0.4em" } as React.CSSProperties}>
              {block.map((sub) => (
                <li key={sub} className="display" style={{ fontSize: "clamp(0.95rem, 1.7vw, 1.7rem)", lineHeight: 1.1 }}>
                  {sub}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="muted mt-10" style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.3rem)" }}>
          Na UFCG, quase um terço da grade é optativa. Você monta o seu próprio curso.
        </p>
      </div>
    ),
    notes: (
      <>
        Só as obrigatórias da grade nova da UFCG, em ordem aproximada. Muita matemática no começo,
        depois software de verdade. Dos 5º ao 9º período, boa parte é optativa: dá pra puxar pra IA,
        pra dados, pra jogos, pro que você quiser.
      </>
    ),
  },

  {
    id: "vizinhos",
    content: (
      <div>
        <h2 className="display display-md">Computação e seus vizinhos</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
          {[
            ["Sistemas de Informação", ""],
            ["Ciência da Computação", "Software, algoritmos e teoria."],
            ["Engenharia da Computação", "Software e hardware juntos."],
            ["Engenharia Elétrica", "Pouca programação."],
          ].map(([t, d], i) => (
            <div key={t} className="rule pt-4" style={i === 1 ? { borderTopColor: "var(--accent)" } : undefined}>
              <div className={`display display-sm ${i === 1 ? "accent" : ""}`} style={{ fontSize: "clamp(1.1rem, 2vw, 2rem)" }}>
                {t}
              </div>
              {d && <div className="lede mt-2" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.5rem)" }}>{d}</div>}
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 muted" style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.3rem)" }}>
          <span>Software</span>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, var(--paper), var(--muted))" }} />
          <span>Hardware</span>
        </div>
      </div>
    ),
    notes: (
      <>
        Os quatro se confundem na hora do SISU. Quanto mais pra direita, mais hardware e física.
        Quanto mais pra esquerda, mais software e negócio. Computação fica no meio, olhando pro
        software.
      </>
    ),
  },

  {
    id: "cs50",
    content: (
      <div className="relative z-10">
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
          <Image
            src="/slides/web/cs50.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 60%", transform: "scale(1.35)", transformOrigin: "0% 55%" }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.25) 100%)" }}
          />
        </div>
        <h2 className="relative z-10 display display-md">Quer ver um pouco como é?</h2>
        <p className="relative z-10 display display-xl accent mt-6">CS50x</p>
        <p className="relative z-10 lede mt-6">
          O curso de introdução à computação de <strong>Harvard.</strong> Totalmente de graça.
        </p>
        <p className="relative z-10 mt-6" style={{ fontSize: "clamp(1rem, 1.6vw, 1.6rem)" }}>
          youtube.com/cs50
        </p>
      </div>
    ),
    notes: (
      <>
        Se sobrar tempo livre e der curiosidade, esse é o melhor começo. Em inglês, com legenda. Não
        precisa saber nada antes.
      </>
    ),
  },

  {
    id: "depois-que-entrei",
    content: <Timeline />,
    notes: (
      <>
        2022: entrei na UFCG, 1º lugar do SISU. 2023: primeiro estágio na Phoebus, ainda no 2º
        período, sabendo quase nada e já remunerado. 2024: monitor de LEDA e estágio no LSI. Nov
        2024: Medway. 2025: fiz a plataforma inteira e passei a liderar o time. 2026: tech lead,
        deixo de ser exclusivo, novos projetos. A linha é a renda em proporção, sem números. Antes
        de me formar, já ganhava o que alguns médicos formados ganham de plantão. Sem final, sem
        nota baixa.
      </>
    ),
  },

  {
    id: "ia",
    content: (
      <>
        <AiBackdrop />
        <h2 className="relative z-10 display display-xl">
          E a <span className="accent">IA</span>?
        </h2>
      </>
    ),
    notes: (
      <>
        A IA baixou o custo de escrever código, não o de saber qual problema resolver. Não substitui
        quem resolve problema: multiplica.
      </>
    ),
  },

  {
    id: "perguntas",
    content: (
      <div>
        <div className="display accent" style={{ fontSize: "clamp(8rem, 30vh, 20rem)", lineHeight: 0.9 }}>
          ?
        </div>
        <h2 className="display display-md mt-4">Perguntas.</h2>
      </div>
    ),
    notes: <>Abrir para questionamentos.</>,
  },
];
