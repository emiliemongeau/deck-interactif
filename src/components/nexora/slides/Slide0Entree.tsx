import { SlideShell } from "../SlideShell";

export function Slide0Entree() {
  return (
    <SlideShell>
      <div className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Point d'entrée
      </div>

      <h2 className="mb-10 max-w-5xl text-center text-5xl font-semibold leading-tight text-white md:text-6xl">
        On commence par la porte la plus rentable.
      </h2>

      <p className="max-w-3xl text-center text-xl font-light leading-relaxed text-white/75 md:text-2xl">
        Avant de déployer l'infrastructure complète, on installe d'abord le bloc qui génère du ROI
        le plus rapidement : la récupération de votre{" "}
        <span className="font-semibold text-white">CA dormant</span>.
      </p>

      <p className="mt-16 text-2xl font-medium text-[var(--nexora-cyan)] md:text-3xl">
        → Votre CA dormant vous attend.
      </p>
    </SlideShell>
  );
}
