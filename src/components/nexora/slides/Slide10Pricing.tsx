import { Check } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide10Pricing() {
  return (
    <SlideShell>
      <div className="mb-12 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Investissement
      </div>

      <div className="flex w-full max-w-5xl items-stretch justify-center gap-6">
        {/* Standard */}
        <div className="flex w-[42%] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
          <h3 className="mb-8 text-xl font-semibold text-white/85">Offre standard</h3>
          <div className="mb-2 flex items-baseline gap-2">
            <span className="text-5xl font-black text-white">3 000€</span>
            <span className="text-sm text-white/50">setup</span>
          </div>
          <div className="mb-6 text-2xl font-light text-white/80">400€ / mois</div>
          <p className="mt-auto text-sm text-white/55">Démarrage quand vous voulez</p>
        </div>

        {/* Lancement */}
        <div
          className="relative flex w-[52%] flex-col rounded-2xl border-2 bg-white/[0.04] p-10 backdrop-blur-sm"
          style={{
            borderColor: "var(--nexora-cyan)",
            boxShadow: "var(--glow-cyan)",
          }}
        >
          <span
            className="absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-bold text-[var(--nexora-bg)]"
            style={{ background: "var(--gradient-accent)" }}
          >
            Offre lancement
          </span>

          <h3 className="mb-8 text-xl font-semibold text-[var(--nexora-cyan)]">
            Conditions exclusives
          </h3>

          <div className="mb-2 flex items-baseline gap-2">
            <span
              className="bg-clip-text text-6xl font-black text-transparent"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              2 500€
            </span>
            <span className="text-sm text-white/60">setup</span>
          </div>
          <div className="mb-8 text-2xl font-light text-white">400€ / mois</div>

          <ul className="flex flex-col gap-3">
            {[
              "Démarrage sous 7 jours",
              "1 témoignage vidéo",
              "2 recommandations à des confrères",
            ].map((c) => (
              <li key={c} className="flex items-center gap-3 text-base text-white/85">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--nexora-cyan)]/15 text-[var(--nexora-cyan)]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-12 text-center text-xl font-medium text-white/80 md:text-2xl">
        Ce module s’autofinance en quelques semaines.
      </p>
      <p className="mt-2 text-xs italic text-[var(--nexora-cyan)]/80">
        Offre lancement — places limitées
      </p>
    </SlideShell>
  );
}
