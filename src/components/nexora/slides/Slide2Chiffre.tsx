import { SlideShell } from "../SlideShell";

export function Slide2Chiffre() {
  return (
    <SlideShell>
      <div className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Le chiffre
      </div>

      <h1
        className="bg-clip-text text-center text-[10rem] font-black leading-none tracking-tight text-transparent md:text-[14rem]"
        style={{ backgroundImage: "var(--gradient-accent)" }}
      >
        50 à 80%
      </h1>

      <p className="mt-8 max-w-3xl text-center text-2xl font-light text-white/85 md:text-3xl">
        des devis ne sont jamais relancés dans votre secteur
      </p>

      <div className="mt-20 text-center">
        <p className="text-lg font-medium text-white/70 md:text-xl">
          Une perte directe.{" "}
          <span className="text-[var(--nexora-purple)]">Invisible.</span>{" "}
          <span className="text-[var(--nexora-cyan)]">Chaque semaine.</span>
        </p>
      </div>
    </SlideShell>
  );
}
