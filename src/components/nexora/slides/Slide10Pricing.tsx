import { Check, ArrowRight } from "lucide-react";
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
    step: "01",
    stepLabel: "Démarrer",
    title: "Booster",
    priceMain: "2 000 €",
    priceStrike: "3 000 €",
    priceSub: "setup + 250 € / mois",
    priceExtra: "Commission NEXORA 5% du CA généré",
    features: [
      "Module CA dormant",
      "Relances devis automatisées",
      "Réactivation clients dormants",
      "Tableau de bord commercial",
      "Formation & onboarding",
    ],
    cta: "Démarrer",
    note: "Prix préférentiel sous conditions : confirmation sous 7 jours · 1 témoignage vidéo · 2 recommandations qualifiées",
    size: "sm",
  },
  {
    step: "02",
    stepLabel: "Monter en puissance",
    title: "L'agentique",
    badge: "Le plus populaire",
    badgeTint: "cyan",
    priceMain: "4 000 €",
    priceSub: "setup + 300 € / mois",
    priceExtra: "Commission NEXORA 5% du CA généré",
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
    size: "md",
  },
  {
    step: "03",
    stepLabel: "Passer à l'échelle",
    title: "Premium",
    badge: "Sur mesure",
    badgeTint: "purple",
    priceMain: "À partir de 10 000 €",
    features: [
      "Infrastructure IA multi-départements",
      "Commerciale, production, SAV",
      "RH, finances, approvisionnement",
      "Déploiement sur mesure",
      "Accompagnement long terme",
    ],
    cta: "Nous contacter",
    size: "lg",
  },
];

export function Slide10Pricing() {
  return (
    <SlideShell>
      <div className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Investissement
      </div>

      <h2 className="mb-10 max-w-4xl text-center text-3xl font-semibold text-white md:text-4xl">
        Choisissez votre niveau d'infrastructure
      </h2>

      <div className="grid w-full max-w-6xl grid-cols-3 items-end gap-5">
        {plans.map((p) => {
          const sizeClasses =
            p.size === "sm"
              ? "scale-[0.9] p-5"
              : p.size === "md"
                ? "scale-100 p-6"
                : "scale-[1.05] p-7";
          const titleSize =
            p.size === "sm" ? "text-lg" : p.size === "md" ? "text-xl" : "text-2xl";
          const priceSize =
            p.size === "sm" ? "text-2xl" : p.size === "md" ? "text-3xl" : "text-4xl";

          return (
            <div key={p.title} className="flex flex-col gap-3">
              <div
                className={`relative flex flex-col rounded-2xl border backdrop-blur-sm origin-bottom ${sizeClasses} ${
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

                <button
                  className={`mt-auto rounded-lg py-2.5 text-sm font-semibold transition ${
                    p.highlighted
                      ? "bg-gradient-to-r from-[var(--nexora-cyan)] to-[var(--nexora-purple)] text-white shadow-[var(--glow-cyan)] hover:opacity-90"
                      : "border border-white/15 bg-white/5 text-white hover:border-[var(--nexora-cyan)]/50 hover:text-[var(--nexora-cyan)]"
                  }`}
                >
                  {p.cta}
                </button>
              </div>

              {p.note && (
                <div className="rounded-xl border border-[var(--nexora-cyan)]/30 bg-[var(--nexora-cyan)]/[0.06] p-3">
                  <p className="text-xs leading-relaxed text-white/80">
                    <span className="font-semibold text-[var(--nexora-cyan)]">Conditions :</span>{" "}
                    {p.note.replace("Prix préférentiel sous conditions : ", "")}
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
