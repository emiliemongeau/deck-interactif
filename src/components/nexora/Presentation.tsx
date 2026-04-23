import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Slide0Vision } from "./slides/Slide0Vision";
import { Slide0Infra } from "./slides/Slide0Infra";
import { Slide0Entree } from "./slides/Slide0Entree";
import { Slide1Recap } from "./slides/Slide1Recap";
import { Slide2Chiffre } from "./slides/Slide2Chiffre";
import { Slide3Cout } from "./slides/Slide3Cout";
import { Slide4Cause } from "./slides/Slide4Cause";
import { Slide5Solution } from "./slides/Slide5Solution";
import { Slide6Demo } from "./slides/Slide6Demo";
import { Slide6bOrchestration } from "./slides/Slide6bOrchestration";
import { Slide7Resultats } from "./slides/Slide7Resultats";
import { Slide8Roi } from "./slides/Slide8Roi";
import { Slide9Process } from "./slides/Slide9Process";
import { Slide10Pricing } from "./slides/Slide10Pricing";
import { Slide11Closing } from "./slides/Slide11Closing";

const TOTAL = 15;

const slides = [
  () => <Slide0Vision />,
  () => <Slide0Infra />,
  () => <Slide0Entree />,
  () => <Slide1Recap />,
  () => <Slide2Chiffre />,
  () => <Slide3Cout />,
  () => <Slide4Cause />,
  () => <Slide5Solution />,
  () => <Slide6Demo />,
  () => <Slide6bOrchestration />,
  () => <Slide7Resultats />,
  () => <Slide8Roi />,
  () => <Slide9Process />,
  () => <Slide10Pricing />,
  () => <Slide11Closing />,
];

export function Presentation() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => Math.min(TOTAL - 1, i + 1)), []);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const Current = slides[index];

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ backgroundColor: "var(--nexora-bg)" }}
    >
      {/* Ambient gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
      />

      {/* Brand */}
      <div className="absolute left-10 top-8 z-10 flex items-center gap-2">
        <div
          className="h-2 w-2 rounded-full"
          style={{ background: "var(--gradient-accent)" }}
        />
        <span className="text-sm font-semibold tracking-[0.3em] text-white/80">
          NEXORA<span className="text-[var(--nexora-cyan)]"> IA</span>
        </span>
      </div>

      {/* Slide */}
      <div key={index} className="absolute inset-0">
        <Current />
      </div>

      {/* Bottom controls */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-8">
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Précédent"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur transition hover:border-[var(--nexora-cyan)]/60 hover:text-[var(--nexora-cyan)] disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 text-sm font-medium tabular-nums text-white/70">
          <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-white/30">/</span>
          <span>{String(TOTAL).padStart(2, "0")}</span>
        </div>

        <button
          onClick={next}
          disabled={index === TOTAL - 1}
          aria-label="Suivant"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur transition hover:border-[var(--nexora-cyan)]/60 hover:text-[var(--nexora-cyan)] disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/5">
        <div
          className="h-full transition-all duration-500"
          style={{
            width: `${((index + 1) / TOTAL) * 100}%`,
            background: "var(--gradient-accent)",
          }}
        />
      </div>
    </div>
  );
}
