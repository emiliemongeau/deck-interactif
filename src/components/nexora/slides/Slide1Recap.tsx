import { FileText, VolumeX, TrendingDown, ArrowRight } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide1Recap() {
  return (
    <SlideShell>
      <div className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Récap
      </div>

      <p className="max-w-5xl text-center text-3xl font-light leading-snug text-white md:text-4xl lg:text-5xl">
        “Vous envoyez environ{" "}
        <span className="font-semibold text-[var(--nexora-cyan)]">[X] devis</span> par mois. Une
        partie reste sans réponse. Les relances ne sont pas systématiques. Et ça vous coûte du{" "}
        <span className="font-semibold text-[var(--nexora-purple)]">
          chiffre d’affaires déjà engagé
        </span>
        .”
      </p>

      <div className="mt-16 flex items-center gap-8 md:gap-14">
        <IconStep icon={<FileText className="h-10 w-10" />} label="Devis envoyé" tint="cyan" />
        <ArrowRight className="h-8 w-8 text-white/30" />
        <IconStep icon={<VolumeX className="h-10 w-10" />} label="Silence" tint="muted" />
        <ArrowRight className="h-8 w-8 text-white/30" />
        <IconStep
          icon={<TrendingDown className="h-10 w-10" />}
          label="CA perdu"
          tint="purple"
        />
      </div>

      <p className="absolute bottom-24 text-xs italic text-white/40">
        À personnaliser avant chaque appel
      </p>
    </SlideShell>
  );
}

function IconStep({
  icon,
  label,
  tint,
}: {
  icon: React.ReactNode;
  label: string;
  tint: "cyan" | "purple" | "muted";
}) {
  const ring =
    tint === "cyan"
      ? "border-[var(--nexora-cyan)]/40 text-[var(--nexora-cyan)] shadow-[var(--glow-cyan)]"
      : tint === "purple"
        ? "border-[var(--nexora-purple)]/40 text-[var(--nexora-purple)] shadow-[var(--glow-purple)]"
        : "border-white/20 text-white/60";
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`flex h-24 w-24 items-center justify-center rounded-2xl border bg-white/5 backdrop-blur-sm ${ring}`}
      >
        {icon}
      </div>
      <span className="text-base font-medium text-white/85">{label}</span>
    </div>
  );
}
