import {
  LayoutDashboard,
  Users,
  Target,
  Calendar,
  Megaphone,
  Zap,
  Search,
  Bell,
  Settings,
} from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide6Demo() {
  return (
    <SlideShell>
      <div className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Démo en direct
      </div>

      <h2 className="mb-1 text-center text-3xl font-semibold text-white md:text-4xl">
        Votre suivi commercial centralisé — en temps réel
      </h2>
      <p className="mb-6 text-center text-sm font-light text-white/50">
        Piloté par NEXORA IA via GoHighLevel
      </p>

      {/* GHL App mockup */}
      <div className="w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f1e] shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#15152a] px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--nexora-cyan)] to-[var(--nexora-purple)] text-xs font-black text-white">
                G
              </div>
              <span className="text-sm font-semibold text-white">HighLevel</span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center px-10">
            <div className="flex w-full max-w-md items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <Search className="h-3.5 w-3.5 text-white/40" />
              <span className="text-xs text-white/40">Rechercher contacts, opportunités…</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="h-4 w-4 text-white/60" />
            <Settings className="h-4 w-4 text-white/60" />
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nexora-purple)] to-[var(--nexora-cyan)] text-[10px] font-bold text-white">
              EM
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="w-44 shrink-0 border-r border-white/10 bg-[#0b0b18] py-4">
            {[
              { icon: LayoutDashboard, label: "Dashboard" },
              { icon: Users, label: "Contacts" },
              { icon: Target, label: "Opportunities", active: true },
              { icon: Calendar, label: "Calendars" },
              { icon: Megaphone, label: "Marketing" },
              { icon: Zap, label: "Automation" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium transition ${
                  item.active
                    ? "border-l-2 border-[var(--nexora-cyan)] bg-[var(--nexora-cyan)]/10 text-[var(--nexora-cyan)]"
                    : "border-l-2 border-transparent text-white/55"
                }`}
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </div>
            ))}
          </aside>

          {/* Main pipeline */}
          <main className="flex-1 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">Pipeline — Devis chantier</h3>
                <p className="text-[11px] text-white/40">Mis à jour il y a 2 minutes</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                NEXORA IA actif
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {pipeline.map((col, i) => (
                <div key={col.title} className="rounded-lg bg-white/[0.02] p-2.5">
                  <div className="mb-2.5 flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: COLORS[i] }}
                      />
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                        {col.title}
                      </h4>
                    </div>
                    <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-white/50">
                      {col.deals.length}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {col.deals.map((d, j) => (
                      <div
                        key={j}
                        className="rounded-md border border-white/5 bg-[#15152a] p-2.5 hover:border-white/15"
                        style={
                          i === 3
                            ? {
                                borderColor: "rgba(0,212,255,0.35)",
                                boxShadow: "0 0 12px -2px rgba(0,212,255,0.25)",
                              }
                            : undefined
                        }
                      >
                        <p className="mb-1 text-[11px] font-semibold text-white">{d.name}</p>
                        <p
                          className="mb-1.5 text-[12px] font-bold"
                          style={{ color: i === 3 ? "var(--nexora-cyan)" : "#fff" }}
                        >
                          {d.amount}
                        </p>
                        <div className="flex items-center justify-between text-[9px] text-white/40">
                          <span>{d.date}</span>
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nexora-purple)]/60 to-[var(--nexora-cyan)]/60 text-[8px] font-bold text-white">
                            {d.name.charAt(0)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SlideShell>
  );
}

const COLORS = ["#8b5cf6", "#00d4ff", "#f59e0b", "#10b981"];

const pipeline = [
  {
    title: "Nouveau devis",
    deals: [
      { name: "Menuiserie Martin", amount: "12 400 €", date: "12 avr." },
      { name: "Atelier Rivière", amount: "5 800 €", date: "14 avr." },
    ],
  },
  {
    title: "Devis envoyé",
    deals: [
      { name: "Métallerie Dupont", amount: "8 900 €", date: "08 avr." },
      { name: "Miroiterie Bernard", amount: "6 200 €", date: "09 avr." },
      { name: "Ets Fontaine", amount: "14 300 €", date: "10 avr." },
    ],
  },
  {
    title: "Relancé",
    deals: [
      { name: "Menuiserie Leblanc", amount: "15 800 €", date: "02 avr." },
      { name: "SARL Vidal", amount: "9 450 €", date: "05 avr." },
    ],
  },
  {
    title: "Signé",
    deals: [
      { name: "Menuiserie Martin", amount: "12 400 €", date: "15 avr." },
      { name: "Atelier Caron", amount: "21 700 €", date: "16 avr." },
    ],
  },
];
