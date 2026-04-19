import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SlideShell } from "../SlideShell";

type Tab = "auto" | "pipeline" | "results";

export function Slide6Demo() {
  const [tab, setTab] = useState<Tab>("auto");

  const tabs: { id: Tab; label: string }[] = [
    { id: "auto", label: "Automatisations" },
    { id: "pipeline", label: "Pipeline" },
    { id: "results", label: "Résultats" },
  ];

  return (
    <SlideShell>
      <div className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Démo en direct
      </div>

      <div className="mb-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-sm">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${
              tab === t.id
                ? "bg-white text-[var(--nexora-bg)] shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex min-h-[420px] w-full max-w-5xl items-center justify-center">
        {tab === "auto" && <AutoTab />}
        {tab === "pipeline" && <PipelineTab />}
        {tab === "results" && <ResultsTab />}
      </div>
    </SlideShell>
  );
}

function AutoTab() {
  const cards = [
    { title: "Relance Devis", stat: "47 messages envoyés ce mois" },
    { title: "Réactivation Base", stat: "112 contacts touchés" },
  ];
  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-full grid-cols-2 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">{c.title}</h3>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Actif
              </span>
            </div>
            <p className="text-lg font-light text-white/70">{c.stat}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-lg font-medium text-white/60">
        Tourne 24h/24, sans intervention.
      </p>
    </div>
  );
}

function PipelineTab() {
  const columns = [
    { title: "Devis envoyé", deals: [{ name: "Menuiserie Martin", amount: "12 400€" }, { name: "Métallerie Dupont", amount: "8 900€" }] },
    { title: "Relancé", deals: [{ name: "Miroiterie Bernard", amount: "6 200€" }, { name: "Menuiserie Leblanc", amount: "15 800€" }] },
    { title: "Réponse reçue", deals: [{ name: "Métallerie Dupont", amount: "8 900€" }] },
    { title: "Signé", deals: [{ name: "Menuiserie Martin", amount: "12 400€" }] },
  ];
  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-full grid-cols-4 gap-3">
        {columns.map((col, i) => (
          <div key={col.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="mb-3 flex items-center justify-between px-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                {col.title}
              </h4>
              <span className="text-xs text-white/40">{col.deals.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              {col.deals.map((d, j) => (
                <div
                  key={j}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm"
                  style={
                    i === 3
                      ? { borderColor: "rgba(0,212,255,0.4)", boxShadow: "var(--glow-cyan)" }
                      : undefined
                  }
                >
                  <p className="mb-1.5 text-sm font-medium text-white">{d.name}</p>
                  <p
                    className={`text-sm font-semibold ${
                      i === 3 ? "text-[var(--nexora-cyan)]" : "text-white/70"
                    }`}
                  >
                    {d.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-lg font-medium text-white/60">
        Vous savez exactement où en est chaque dossier.
      </p>
    </div>
  );
}

function ResultsTab() {
  const stats = [
    { n: "23", label: "devis relancés ce mois" },
    { n: "8", label: "réponses obtenues" },
    { n: "3", label: "chantiers signés" },
  ];

  // sparkline points (upward trend)
  const points = [10, 18, 14, 28, 24, 40, 36, 52, 60, 72];
  const w = 600;
  const h = 100;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * (h - 10) - 5;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-full grid-cols-3 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm"
          >
            <div
              className="mb-3 bg-clip-text text-7xl font-black text-transparent"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              {s.n}
            </div>
            <p className="text-sm font-light text-white/65">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-white/50">Tendance 30 jours</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" /> +47%
          </span>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full">
          <defs>
            <linearGradient id="spark-line" x1="0" x2="1">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L${w},${h} L0,${h} Z`} fill="url(#spark-fill)" />
          <path d={path} fill="none" stroke="url(#spark-line)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <p className="mt-8 text-center text-lg font-medium text-white/60">
        Le ROI est visible dès J+30.
      </p>
    </div>
  );
}
