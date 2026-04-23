import { Database, RefreshCw, BarChart3 } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide5Solution() {
  const cards = [
    {
      n: "01",
      icon: <Database className="h-7 w-7" />,
      title: "Réactivation BDD",
      sub: "Vos contacts dormants reçoivent un WhatsApp ou email automatique",
    },
    {
      n: "02",
      icon: <RefreshCw className="h-7 w-7" />,
      title: "Relance devis",
      sub: "Vos devis ProDevis sans réponse sont relancés automatiquement",
    },
    {
      n: "03",
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Suivi des opportunités",
      sub: "Tout remonte dans un tableau de bord clair",
    },
  ];

  return (
    <SlideShell>
      <div className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        La solution
      </div>

      <h2 className="mb-16 max-w-5xl text-center text-5xl font-semibold leading-tight text-white md:text-6xl">
        On installe le système à votre place.
      </h2>

      <div className="grid w-full max-w-6xl grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.n}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition hover:border-[var(--nexora-cyan)]/40"
          >
            <div className="mb-6 flex items-center justify-between">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl text-[var(--nexora-cyan)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.15))",
                }}
              >
                {c.icon}
              </span>
              <span className="text-3xl font-black text-white/15">{c.n}</span>
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">{c.title}</h3>
            <p className="text-base font-light leading-relaxed text-white/65">{c.sub}</p>
          </div>
        ))}
      </div>

      <p className="mt-14 text-center text-xl italic text-[var(--nexora-cyan)] md:text-2xl">
        “On ne crée pas de demande — on récupère celle que vous avez déjà.”
      </p>
    </SlideShell>
  );
}
