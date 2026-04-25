import { Smartphone, BrainCircuit, Rocket } from "lucide-react";
import { SlideShell } from "../SlideShell";

const cards = [
  {
    icon: Smartphone,
    title: "Une entreprise pilotée depuis votre téléphone",
    text: "Commercial, production, pose, compta, appro, RH — tout connecté à un seul cerveau. Via Telegram, en une phrase, vous déclenchez des actions sur toute l'entreprise. L'agent comprend, exécute, rend compte.",
  },
  {
    icon: BrainCircuit,
    title: "Une infrastructure qui s'améliore avec vous",
    text: "Ce n'est pas un logiciel figé. L'agent apprend les process de l'entreprise, s'adapte aux priorités du dirigeant, gagne en autonomie. Plus vous l'utilisez, plus il est efficace.",
  },
  {
    icon: Rocket,
    title: "Vous scalez, sans embaucher",
    text: "Chaque nouveau chantier génère de la complexité — relances, planning, compta, suivi. Normalement, ça veut dire recruter. Avec NEXORA IA, l'agent absorbe cette complexité. Vous prenez plus d'affaires sans prendre plus de risques.",
  },
];

export function Slide2bAncrage() {
  return (
    <SlideShell>
      <div className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Notre offre d'ancrage
      </div>

      <h2 className="mb-5 max-w-5xl text-center text-3xl font-semibold leading-tight text-white md:text-5xl">
        Notre mission — être votre{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg, #7B61FF, #3A86FF)" }}
        >
          département IA externalisé
        </span>
      </h2>

      <p className="mb-12 max-w-4xl text-center text-base italic text-white/60 md:text-lg">
        Une infra IA qui démultiplie votre force de frappe — 5 agents connectés, 5
        départements couverts, 0 charge supplémentaire.
      </p>

      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F1629]/80 p-6 backdrop-blur-sm transition hover:border-white/20"
          >
            {/* Top gradient border */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, #7B61FF, #3A86FF)" }}
            />
            {/* Subtle glow on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition group-hover:opacity-30"
              style={{ background: "linear-gradient(90deg, #7B61FF, #3A86FF)" }}
            />

            <div
              className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(123,97,255,0.18), rgba(58,134,255,0.18))",
                border: "1px solid rgba(123,97,255,0.35)",
              }}
            >
              <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
            </div>

            <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-white/60">{text}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
