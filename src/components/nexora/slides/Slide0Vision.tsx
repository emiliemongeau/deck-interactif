import { SlideShell } from "../SlideShell";

export function Slide0Vision() {
  return (
    <SlideShell>
      <div className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Vision
      </div>

      <h2 className="mb-8 max-w-5xl text-center text-5xl font-semibold leading-tight text-white md:text-6xl">
        NEXORA IA — votre partenaire de croissance
      </h2>

      <p className="max-w-4xl text-center text-2xl font-light leading-snug md:text-3xl">
        <span className="bg-gradient-to-r from-[var(--nexora-cyan)] to-[var(--nexora-purple)] bg-clip-text text-transparent">
          On ne vous vend pas un outil. On construit avec vous une infrastructure IA globale qui
          orchestre votre entreprise.
        </span>
      </p>

      <p className="mt-12 max-w-3xl text-center text-base font-light text-white/60 md:text-lg">
        Connectée à tous vos départements. Pilotée par l'intelligence artificielle. Conçue pour
        durer.
      </p>
    </SlideShell>
  );
}
