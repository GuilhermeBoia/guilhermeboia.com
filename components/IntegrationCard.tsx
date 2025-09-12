import {
  Gemini,
  MagicUI,
  Notion,
  ChatGPT,
  GoogleSheets,
  WhatsApp,
} from "@/components/logos";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/logo";

export default function IntegrationsCard() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative flex max-w-[280px] items-center justify-between">
        <div className="space-y-3">
          <IntegrationCard position="left-top">
            <Gemini />
          </IntegrationCard>
          <IntegrationCard position="left-middle">
            <GoogleSheets />
          </IntegrationCard>
          <IntegrationCard position="left-bottom">
            <MagicUI />
          </IntegrationCard>
        </div>
          <div className="mx-auto my-1 flex w-fit justify-center">
            <div className="relative z-20 rounded-full border border-white/30 p-1 shadow-lg shadow-white/20 bg-gradient-to-br from-white/10 to-transparent" style={{ backgroundColor: '#1A1A1A' }}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
              <IntegrationCard
                className="size-8 border-white/40 shadow-inner shadow-white/10 bg-gradient-to-br from-white/5 to-transparent"
                isCenter={true}
              >
                <LogoIcon />
              </IntegrationCard>
            </div>
          </div>
        <div
          role="presentation"
          className="absolute inset-1/4 bg-[radial-gradient(white/10_1px,transparent_1px)] opacity-20 [background-size:8px_8px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        ></div>

        <div className="space-y-3">
          <IntegrationCard position="right-top">
            <Notion />
          </IntegrationCard>
          <IntegrationCard position="right-middle">
            <WhatsApp />
          </IntegrationCard>
          <IntegrationCard position="right-bottom">
            <ChatGPT />
          </IntegrationCard>
        </div>
      </div>
    </div>
  );
}

const IntegrationCard = ({
  children,
  className,
  position,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative flex size-8 border border-white/10",
        isCenter ? "rounded-full" : "rounded-lg",
        className
      )}
      style={{ backgroundColor: '#0D0D0D' }}
    >
      <div
        className={cn(
          "relative z-20 m-auto size-fit *:size-4",
          isCenter && "*:size-5"
        )}
      >
        {children}
      </div>
      {position && !isCenter && (
        <div
          className={cn(
            "absolute z-10 h-px bg-gradient-to-r from-white/20 to-transparent",
            position === "left-top" &&
              "left-full top-1/2 w-[80px] origin-left rotate-[25deg]",
            position === "left-middle" &&
              "left-full top-1/2 w-[75px] origin-left",
            position === "left-bottom" &&
              "left-full top-1/2 w-[80px] origin-left rotate-[-25deg]",
            position === "right-top" &&
              "right-full top-1/2 w-[80px] origin-right rotate-[-25deg] bg-gradient-to-l from-white/20 to-transparent",
            position === "right-middle" &&
              "right-full top-1/2 w-[75px] origin-right bg-gradient-to-l from-white/20 to-transparent",
            position === "right-bottom" &&
              "right-full top-1/2 w-[80px] origin-right rotate-[25deg] bg-gradient-to-l from-white/20 to-transparent"
          )}
        />
      )}
    </div>
  );
};
