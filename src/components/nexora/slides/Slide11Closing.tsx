import { SlideShell } from "../SlideShell";

export function Slide11Closing() {
  return (
    <SlideShell>
      <h1
        className="bg-clip-text text-center text-7xl font-black leading-tight text-transparent md:text-8xl"
        style={{ backgroundImage: "var(--gradient-accent)" }}
      >
        On démarre quand ?
      </h1>

      <div className="mt-16 flex flex-col items-center gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2">
          <button
            className="rounded-full px-10 py-5 text-lg font-semibold text-[var(--nexora-bg)] shadow-[var(--glow-cyan)] transition hover:scale-105"
            style={{ background: "var(--gradient-accent)" }}
          >
            Cette semaine
          </button>
          <span className="text-sm font-medium text-[var(--nexora-cyan)]">Offre Booster — 2 500€</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button className="rounded-full border border-white/30 px-10 py-5 text-lg font-semibold text-white transition hover:border-white/60 hover:bg-white/5">
            Dans les prochains jours
          </button>
          <span className="text-sm text-white/55">Offre Agentique — 4 000€</span>
        </div>
      </div>

      <div className="absolute bottom-24 flex flex-col items-center gap-2">
        <p className="text-base font-medium text-white/85">
          emilie@nexora-ia.fr{" "}
          <span className="mx-2 text-white/30">•</span>{" "}
          www.nexora-ia.fr
        </p>
        <p className="text-xs italic text-white/40">Je vous envoie le contrat aujourd'hui.</p>
      </div>
    </SlideShell>
  );
}
