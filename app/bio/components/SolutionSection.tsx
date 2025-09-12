import { Cpu, Zap } from "lucide-react";
import BrowserAnimation from "@/components/BrowserAnimation";

export default function SolutionSection() {
  return (
    <section
      id="metodologia"
      className="relative py-16 md:py-24 px-6 md:px-8 bg-black text-white overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-full px-4 md:px-8 xl:px-20 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 md:mb-16 text-white max-w-4xl">
          Essa é a minha proposta:
        </h2>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Junto com você,{" "}
              <span className="font-medium text-white">
                vamos enxergar o seu negócio de forma completa{" "}
              </span>
              — unindo a visão de negócios com conhecimento técnico em
              tecnologia.{" "}
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Entender como sua rotina ou empresa funciona e, a partir disso,
              pensar em soluções que realmente façam sentido. Pode ser{" "}
              <span className="font-medium text-white">
                automatizar tarefas e processos, construir uma plataforma, usar
                IA para elevar o nível do que você entrega
              </span>
              , etc. O resultado é um negócio mais eficiente, profissional e
              preparado para crescer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-white" />
                  <h3 className="text-sm font-medium text-white">
                    Diferenciação
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Profissionais e empresas que fazem isso hoje em dia se
                  diferenciam totalmente do mercado.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4 text-white" />
                  <h3 className="text-sm font-medium text-white">
                    Organização
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Deixe as ferramentas fazerem o trabalho e tenha mais tempo
                  para ser estratégico.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div
              className=" hidden lg:block bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700"
              style={{ backgroundColor: "#0D0D0D" }}
            >
              <BrowserAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
