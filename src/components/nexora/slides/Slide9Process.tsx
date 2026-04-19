import { SlideShell } from "../SlideShell";

export function Slide9Process() {
  const steps = [
    { n: "1", title: "Cadrage", desc: "Analyse de votre pipeline et de votre base de contacts" },
    { n: "2", title: "Configuration", desc: "Connexion des outils et paramétrage des automatisations" },
    { n: "3", title: "Production", desc: "Lancement, tests, premiers messages envoyés", badge: "J+5" },
    { n: "4", title: "Suivi", desc: "Support continu, ajustements, résultats mesurés à J+30", badge: "J+7" },
  ];

  return (
    <SlideShell>
      <div className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Notre process
      </div>

      <h2 className="mb-20 max-w-5xl text-center text-4xl font-semibold leading-tight text-white md:text-5xl">
        Opérationnel en 7 jours. Sans friction.
      </h2>

      <div className="relative w-full max-w-6xl">
        {/* Connecting line */}
        <div
          className="absolute left-[6%] right-[6%] top-7 h-px"
          style={{ background: "var(--gradient-accent)", opacity: 0.4 }}
        />

        <div className="relative grid grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[var(--nexora-bg)] text-xl font-bold text-white"
                  style={{ boxShadow: "0 0 0 4px rgba(15,15,26,1)" }}
                >
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-accent)" }}
                  >
                    {s.n}
                  </span>
                </div>
                {s.badge && (
                  <span
                    className="absolute -right-2 -top-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-[var(--nexora-bg)]"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    {s.badge}
                  </span>
                )}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-20 text-center text-xl font-light text-white/70 md:text-2xl">
        Vous n’avez rien à faire.{" "}
        <span className="text-[var(--nexora-cyan)]">On installe, on teste, on lance.</span>
      </p>
    </SlideShell>
  );
}
