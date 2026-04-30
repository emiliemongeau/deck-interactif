import { Check, ChevronsRight } from "lucide-react";
import { SlideShell } from "../SlideShell";

type Plan = {
  step: string;
  stepLabel: string;
  title: string;
  badge?: string;
  badgeTint?: "cyan" | "purple";
  priceMain: string;
  priceSub?: string;
  priceExtra?: string;
  priceStrike?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  note?: string;
  size: "sm" | "md" | "lg";
};

const plans: Plan[] = [
  {
    step: "JE DÉMARRE",
    stepLabel: "",
    title: "Booster",
    priceMain: "2 000 € setup",
    priceSub: "+ Abonnement 290 € / mois",
    features: [
      "Module CA dormant",
      "Relances devis automatisées",
      "Réactivation clients dormants",
      "Tableau de bord commercial",
      "Formation & onboarding",
    ],
    cta: "Démarrer",
    note: "1 mois d'abonnement offert en échange d'une recommandation qualifiée",
    size: "md",
  },
  {
    step: "JE PILOTE",
    stepLabel: "",
    title: "L'agentique",
    priceMain: "4 500 € setup",
    priceSub: "+ Abonnement 390 € / mois",
    features: [
      "Tout le Booster",
      "Pilotage par message Telegram : envoyez une instruction, le système l'exécute",
      "Optimisation autonome : l'IA ajuste vos séquences selon les résultats",
      "Alertes proactives intelligentes : analyse + recommandation en temps réel",
      "Reporting instantané par message, sans ouvrir de dashboard",
      "Accompagnement 6 mois inclus",
    ],
    cta: "Démarrer",
    highlighted: true,
    note: "1 mois d'abonnement offert en échange d'une recommandation qualifiée",
    size: "md",
  },
];

export function Slide10Pricing() {
  return (
    <SlideShell>
      <div className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Investissement
      </div>

      <h2 className="mb-8 max-w-4xl text-center text-3xl font-semibold text-white md:text-4xl">
        Choisissez votre niveau d'infrastructure
      </h2>

      <div className="relative flex w-full max-w-7xl items-end justify-center gap-10">
        {plans.map((p, idx) => {
          const sizeClasses =
            p.size === "sm"
              ? "w-[270px] min-h-[440px] p-5"
              : p.size === "md"
                ? "w-[340px] min-h-[560px] p-6"
                : "w-[420px] min-h-[680px] p-7";
          const titleSize =
            p.size === "sm" ? "text-lg" : p.size === "md" ? "text-xl" : "text-2xl";
          const priceSize =
            p.size === "sm" ? "text-2xl" : p.size === "md" ? "text-3xl" : "text-4xl";

          return (
            <div key={p.title} className="relative flex flex-col items-center gap-3">
              {idx > 0 && (
                <div className="pointer-events-none absolute -left-3 top-[44%] z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-0.5 animate-pulse">
                  <ChevronsRight className="h-9 w-9 text-[var(--nexora-cyan)] drop-shadow-[0_0_8px_var(--nexora-cyan)]" strokeWidth={2.5} />
                </div>
              )}
              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full border border-[var(--nexora-cyan)]/40 bg-[var(--nexora-cyan)]/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[var(--nexora-cyan)]">
                  {p.step}
                </span>
                {p.stepLabel && (
                  <span className="text-[11px] uppercase tracking-wider text-white/50">
                    {p.stepLabel}
                  </span>
                )}
              </div>
              <div
                className={`relative flex flex-col rounded-2xl border backdrop-blur-sm ${sizeClasses} ${
                  p.highlighted
                    ? "border-[var(--nexora-cyan)]/50 bg-gradient-to-b from-[var(--nexora-cyan)]/[0.08] to-white/[0.02] shadow-[var(--glow-cyan)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {p.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      p.badgeTint === "purple"
                        ? "border border-[var(--nexora-purple)]/50 bg-[var(--nexora-purple)]/20 text-[var(--nexora-purple)]"
                        : "border border-[var(--nexora-cyan)]/50 bg-[var(--nexora-cyan)]/20 text-[var(--nexora-cyan)]"
                    }`}
                  >
                    {p.badge}
                  </div>
                )}

                <h3 className={`mb-5 font-semibold text-white ${titleSize}`}>{p.title}</h3>

                <div className="mb-1 flex items-baseline gap-2">
                  <span className={`font-black text-white ${priceSize}`}>{p.priceMain}</span>
                  {p.priceStrike && (
                    <span className="text-sm text-white/40 line-through">{p.priceStrike}</span>
                  )}
                </div>
                {p.priceSub && (
                  <p className="mb-1 text-sm font-light text-white/60">{p.priceSub}</p>
                )}
                {p.priceExtra && (
                  <p className="mb-5 text-sm font-medium text-[var(--nexora-cyan)]">
                    {p.priceExtra}
                  </p>
                )}
                {!p.priceSub && <div className="mb-5 h-5" />}
                {p.priceSub && !p.priceExtra && <div className="mb-4" />}

                <ul className="mb-6 flex flex-1 flex-col gap-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          p.highlighted ? "text-[var(--nexora-cyan)]" : "text-white/50"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {p.note && (
                <div className="w-[340px] rounded-xl border border-[var(--nexora-cyan)]/30 bg-[var(--nexora-cyan)]/[0.06] p-3">
                  <p className="text-sm leading-relaxed text-white/80">
                    <span className="font-semibold text-[var(--nexora-cyan)]">Conditions :</span>{" "}
                    {p.note}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs italic text-white/40">
        Offre lancement — places limitées
      </p>
    </SlideShell>
  );
}
