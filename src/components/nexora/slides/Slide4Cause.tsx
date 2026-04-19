import { Clock, Workflow, User } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide4Cause() {
  const bullets = [
    { icon: <Clock className="h-6 w-6" />, text: "Pas le temps de relancer entre les chantiers" },
    { icon: <Workflow className="h-6 w-6" />, text: "Pas de process structuré" },
    { icon: <User className="h-6 w-6" />, text: "Tout repose sur une seule personne" },
  ];

  return (
    <SlideShell>
      <div className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        La cause
      </div>

      <h2 className="max-w-5xl text-center text-5xl font-semibold leading-tight text-white md:text-6xl">
        Ce n’est pas un problème de motivation.
      </h2>

      <p className="mt-6 text-center text-3xl font-light text-[var(--nexora-purple)] md:text-4xl">
        C’est un problème de système.
      </p>

      <div className="mt-16 flex w-full max-w-3xl flex-col gap-4">
        {bullets.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-5 backdrop-blur-sm"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--nexora-purple)]/15 text-[var(--nexora-purple)]">
              {b.icon}
            </span>
            <span className="text-xl font-light text-white/85 md:text-2xl">{b.text}</span>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
