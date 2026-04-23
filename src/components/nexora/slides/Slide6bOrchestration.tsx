import { Send, Brain, Code2, Mail, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide6bOrchestration() {
  return (
    <SlideShell>
      <div className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Orchestration en direct
      </div>

      <h2 className="mb-2 text-center text-3xl font-semibold text-white md:text-4xl">
        Une seule instruction. Toute l'infrastructure s'exécute.
      </h2>
      <p className="mb-8 text-center text-sm font-light text-white/55">
        Exemple : vous écrivez à votre IA depuis Telegram → elle pilote vos outils → le client reçoit la confirmation.
      </p>

      <div className="grid w-full max-w-7xl grid-cols-12 items-stretch gap-4">
        {/* 1. Telegram input */}
        <Step
          index={1}
          icon={Send}
          tint="cyan"
          title="Vous · Telegram"
          className="col-span-3"
        >
          <div className="rounded-lg bg-[#0f0f1e] p-2.5 text-[11px] leading-relaxed text-white/85">
            "Peux-tu me résumer la journée d'hier et me donner la priorité pour demain ?"
          </div>
          <p className="mt-2 text-[10px] text-white/40">il y a 4 secondes</p>
        </Step>

        <Arrow />

        {/* 2. Hermès reasoning */}
        <Step
          index={2}
          icon={Brain}
          tint="purple"
          title="Le Chauffeur · réfléchit"
          className="col-span-3"
        >
          <ul className="space-y-1 text-[10.5px] text-white/70">
            <li>• Lit les données de la journée (Data OS)</li>
            <li>• Identifie 1 RDV en conflit demain matin</li>
            <li>• Décide : libérer un créneau pour M. Martin</li>
          </ul>
          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[var(--nexora-purple)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--nexora-purple)]" />
            Raisonnement en cours
          </div>
        </Step>

        <Arrow />

        {/* 3. Claude Code action */}
        <Step
          index={3}
          icon={Code2}
          tint="cyan"
          title="Le Moteur · exécute"
          className="col-span-3"
        >
          <div className="space-y-1.5 text-[10.5px]">
            <Line
              icon={Calendar}
              text="Décale réunion interne 9h → 14h"
              ok
            />
            <Line
              icon={Calendar}
              text="Crée RDV M. Martin · jeudi 10h"
              ok
            />
          </div>
        </Step>
      </div>

      {/* Vertical connector down */}
      <div className="my-3 flex flex-col items-center">
        <div className="h-6 w-[2px] bg-gradient-to-b from-[var(--nexora-cyan)]/60 to-[var(--nexora-purple)]/60" />
        <ArrowRight className="h-4 w-4 rotate-90 text-[var(--nexora-purple)]" />
      </div>

      {/* 4. GHL email + 5. Réponse Telegram */}
      <div className="grid w-full max-w-7xl grid-cols-12 items-stretch gap-4">
        <div className="col-span-1" />

        <Step
          index={4}
          icon={Mail}
          tint="cyan"
          title="GoHighLevel · envoie"
          className="col-span-5"
        >
          <div className="rounded-lg border border-white/10 bg-[#0f0f1e] p-2.5">
            <div className="mb-1.5 flex items-center justify-between text-[9px] text-white/40">
              <span>À : contact@martin-menuiserie.fr</span>
              <span>maintenant</span>
            </div>
            <p className="mb-1 text-[11px] font-semibold text-white">
              Votre rendez-vous est confirmé ✓
            </p>
            <p className="text-[10px] leading-relaxed text-white/65">
              Bonjour M. Martin, nous confirmons votre RDV jeudi 17 avril à 10h. À très vite !
            </p>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-400">
            <CheckCircle2 className="h-3 w-3" />
            Email délivré · ajouté au calendrier
          </div>
        </Step>

        <Arrow />

        <Step
          index={5}
          icon={Send}
          tint="purple"
          title="Telegram · réponse"
          className="col-span-2"
        >
          <p className="text-[10.5px] leading-relaxed text-white/80">
            "Hier : 8 devis envoyés, 2 signés (24 800 €). Demain : prioriser M. Martin (10h, RDV confirmé)."
          </p>
        </Step>
      </div>

      <p className="mt-6 text-center text-xs italic text-white/45">
        Temps total : ~6 secondes · 0 clic · 0 dashboard ouvert.
      </p>
    </SlideShell>
  );
}

function Step({
  index,
  icon: Icon,
  tint,
  title,
  className = "",
  children,
}: {
  index: number;
  icon: typeof Send;
  tint: "cyan" | "purple";
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ring =
    tint === "cyan"
      ? "border-[var(--nexora-cyan)]/40 shadow-[var(--glow-cyan)]"
      : "border-[var(--nexora-purple)]/40 shadow-[var(--glow-purple)]";
  const accent = tint === "cyan" ? "var(--nexora-cyan)" : "var(--nexora-purple)";
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white/[0.03] p-3.5 backdrop-blur-sm ${ring} ${className}`}
    >
      <div
        className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
        style={{ background: accent }}
      >
        {index}
      </div>
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-3.5 w-3.5" style={{ color: accent }} />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/85">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <div className="col-span-1 flex items-center justify-center">
      <ArrowRight className="h-5 w-5 text-white/40" />
    </div>
  );
}

function Line({
  icon: Icon,
  text,
  ok,
}: {
  icon: typeof Calendar;
  text: string;
  ok?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-[#15152a] px-2 py-1.5">
      <Icon className="h-3 w-3 text-white/55" />
      <span className="flex-1 text-white/85">{text}</span>
      {ok && <CheckCircle2 className="h-3 w-3 text-emerald-400" />}
    </div>
  );
}
