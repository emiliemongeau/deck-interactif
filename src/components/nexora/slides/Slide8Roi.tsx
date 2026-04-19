import { ArrowRight } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide8Roi() {
  return (
    <SlideShell>
      <div className="mb-10 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Votre ROI
      </div>

      <p className="max-w-5xl text-center text-3xl font-light leading-snug text-white md:text-4xl">
        Sur votre base : <Bracket>X</Bracket> devis/mois × panier moyen{" "}
        <Bracket>X</Bracket>€
      </p>

      <div className="mt-14 flex w-full max-w-5xl flex-col items-stretch gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:gap-6 md:p-8">
        <RoiStep label="Investissement" value="3 000€" />
        <ArrowRight className="hidden h-6 w-6 text-white/30 md:block" />
        <RoiStep label="Retour estimé" value={<Bracket>X</Bracket>} suffix="€" />
        <ArrowRight className="hidden h-6 w-6 text-white/30 md:block" />
        <RoiStep label="ROI en" value={<Bracket>X</Bracket>} suffix=" semaines" highlight />
      </div>

      <a
        href="https://chantier-roi.lovable.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-12 inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-[var(--nexora-bg)] shadow-[var(--glow-cyan)] transition hover:scale-105"
        style={{ background: "var(--gradient-accent)" }}
      >
        Calculer mon ROI
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
      </a>

      <p className="absolute bottom-24 text-xs italic text-white/40">
        Estimation basée sur vos chiffres réels
      </p>
    </SlideShell>
  );
}

function Bracket({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-1 inline-flex items-center rounded-md border border-[var(--nexora-cyan)]/40 bg-[var(--nexora-cyan)]/10 px-2.5 py-0.5 font-semibold text-[var(--nexora-cyan)]">
      [{children}]
    </span>
  );
}

function RoiStep({
  label,
  value,
  suffix,
  highlight,
}: {
  label: string;
  value: React.ReactNode;
  suffix?: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 text-center">
      <span className="text-xs uppercase tracking-wider text-white/50">{label}</span>
      <span
        className={`text-2xl font-bold md:text-3xl ${
          highlight ? "text-[var(--nexora-cyan)]" : "text-white"
        }`}
      >
        {value}
        {suffix}
      </span>
    </div>
  );
}
