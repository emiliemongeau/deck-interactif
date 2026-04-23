import { SlideShell } from "../SlideShell";

export function Slide3Cout() {
  const lines = [
    { text: "15 devis/semaine × 42 semaines", result: "630 devis/an" },
    { text: "50% non relancés", result: "315 devis dormants" },
    { text: "Panier moyen 8 000€", result: "~75 000€ de CA récupérable/an" },
  ];

  return (
    <SlideShell>
      <div className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Ce que ça coûte
      </div>

      <h2 className="mb-16 text-center text-4xl font-semibold text-white md:text-5xl">
        Ce que ça représente concrètement
      </h2>

      <div className="flex w-full max-w-4xl flex-col gap-5">
        {lines.map((line, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl text-[var(--nexora-cyan)]">•</span>
              <span className="text-xl font-light text-white/85 md:text-2xl">{line.text}</span>
            </div>
            <span
              className={`text-xl font-semibold md:text-2xl ${
                i === 2 ? "text-[var(--nexora-cyan)]" : "text-white"
              }`}
            >
              = {line.result}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-16 text-center text-2xl font-medium text-[var(--nexora-cyan)] md:text-3xl">
        L’argent est déjà là. Il attend d’être activé.
      </p>
    </SlideShell>
  );
}
