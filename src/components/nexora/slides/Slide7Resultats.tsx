import { ArrowRight } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide7Resultats() {
  const stats = [
    { n: "J+7", sub: "Système opérationnel" },
    { n: "+10 à 25%", sub: "de devis transformés en chantiers" },
    { n: "+2 à 3%", sub: "de réactivation sur base dormante" },
    { n: "J+30-90", sub: "Premiers résultats visibles selon votre cycle commercial" },
  ];

  return (
    <SlideShell>
      <div className="mb-16 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Résultats attendus
      </div>

      <div className="grid w-full max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm"
          >
            <div
              aria-hidden
              className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  i % 2 === 0
                    ? "radial-gradient(circle, #00d4ff 0%, transparent 70%)"
                    : "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
              }}
            />
            <div
              className="relative mb-4 bg-clip-text text-6xl font-black leading-tight text-transparent md:text-7xl"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              {s.n}
            </div>
            <p className="relative text-base font-light leading-relaxed text-white/70">
              {s.sub}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-16 max-w-4xl text-center text-xl font-light text-white/65 md:text-2xl">
        Sans nouveau commercial.{" "}
        <span className="text-white">Sans budget pub.</span>{" "}
        Sans changer votre façon de travailler.
      </p>
    </SlideShell>
  );
}
