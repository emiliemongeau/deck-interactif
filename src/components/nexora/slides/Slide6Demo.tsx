import { useState } from "react";
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

type TabId = "dashboard" | "contacts" | "opportunities" | "calendar" | "automations";

const TABS: { id: TabId; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "contacts", label: "Contacts" },
  { id: "opportunities", label: "Opportunités" },
  { id: "calendar", label: "Calendrier" },
  { id: "automations", label: "Automations" },
];

const SIDEBAR_BY_TAB: Record<TabId, string> = {
  dashboard: "Dashboard",
  contacts: "Contacts",
  opportunities: "Opportunities",
  calendar: "Calendars",
  automations: "Automation",
};

export function Slide6Demo() {
  const [tab, setTab] = useState<TabId>("opportunities");
  const activeSidebar = SIDEBAR_BY_TAB[tab];

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
              { icon: Target, label: "Opportunities" },
              { icon: Calendar, label: "Calendars" },
              { icon: Megaphone, label: "Marketing" },
              { icon: Zap, label: "Automation" },
            ].map((item) => {
              const active = item.label === activeSidebar;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium transition ${
                    active
                      ? "border-l-2 border-[var(--nexora-cyan)] bg-[var(--nexora-cyan)]/10 text-[var(--nexora-cyan)]"
                      : "border-l-2 border-transparent text-white/55"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </div>
              );
            })}
          </aside>

          {/* Main area */}
          <main className="flex flex-1 flex-col">
            {/* Tabs bar */}
            <div className="flex items-center gap-1 border-b border-white/10 bg-[#10101f] px-4">
              {TABS.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`relative px-3 py-2.5 text-[11px] font-semibold transition ${
                      active
                        ? "text-[var(--nexora-cyan)]"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {t.label}
                    {active && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-[var(--nexora-cyan)]" />
                    )}
                  </button>
                );
              })}
              <div className="ml-auto flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                NEXORA IA actif
              </div>
            </div>

            <div className="min-h-[420px] p-5">
              {tab === "dashboard" && <DashboardView />}
              {tab === "contacts" && <ContactsView />}
              {tab === "opportunities" && <OpportunitiesView />}
              {tab === "calendar" && <CalendarView />}
              {tab === "automations" && <AutomationsView />}
            </div>
          </main>
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------------- DASHBOARD ---------------- */

function DashboardView() {
  const kpis = [
    { label: "Devis en cours", value: "12", tint: "cyan" },
    { label: "Taux de signature", value: "34%", tint: "purple" },
    { label: "CA pipe", value: "47 800 €", tint: "cyan" },
    { label: "Relances à faire", value: "5", tint: "amber" },
  ];
  const bars = [40, 65, 50, 80, 55, 90, 70];
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">Vue d'ensemble</h3>
      <div className="mb-5 grid grid-cols-4 gap-3">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="rounded-lg border border-white/5 bg-[#15152a] p-3"
          >
            <p className="mb-1 text-[10px] uppercase tracking-wider text-white/40">
              {k.label}
            </p>
            <p
              className="text-xl font-bold"
              style={{
                color:
                  k.tint === "cyan"
                    ? "var(--nexora-cyan)"
                    : k.tint === "purple"
                      ? "var(--nexora-purple)"
                      : "#f59e0b",
              }}
            >
              {k.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-white/5 bg-[#15152a] p-4">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-xs font-semibold text-white">Activité — 7 derniers jours</h4>
          <span className="text-[10px] text-white/40">Devis envoyés</span>
        </div>
        <div className="flex h-32 items-end justify-between gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-[var(--nexora-purple)]/70 to-[var(--nexora-cyan)]/70"
                style={{ height: `${h}%` }}
              />
              <span className="text-[9px] text-white/40">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- CONTACTS ---------------- */

function ContactsView() {
  const contacts = [
    { name: "Pierre Martin", company: "Menuiserie Martin", last: "Il y a 2j", status: "Chaud" },
    { name: "Sophie Rivière", company: "Atelier Rivière", last: "Il y a 5j", status: "Actif" },
    { name: "Jean Dupont", company: "Métallerie Dupont", last: "Il y a 1 sem.", status: "Chaud" },
    { name: "Claire Bernard", company: "Miroiterie Bernard", last: "Il y a 2 sem.", status: "Froid" },
    { name: "Marc Fontaine", company: "Ets Fontaine", last: "Il y a 3j", status: "Actif" },
    { name: "Julie Vidal", company: "SARL Vidal", last: "Il y a 1 mois", status: "Froid" },
  ];

  const tagColor = (s: string) => {
    if (s === "Chaud") return "border-amber-500/30 bg-amber-500/15 text-amber-400";
    if (s === "Actif") return "border-emerald-500/30 bg-emerald-500/15 text-emerald-400";
    return "border-white/15 bg-white/5 text-white/50";
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Contacts</h3>
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">
          <Search className="h-3 w-3 text-white/40" />
          <span className="text-[11px] text-white/40">Rechercher un contact…</span>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-white/5 bg-[#15152a]">
        <div className="grid grid-cols-[1.2fr_1.5fr_1fr_0.8fr] border-b border-white/5 bg-white/[0.02] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
          <span>Nom</span>
          <span>Entreprise</span>
          <span>Dernier contact</span>
          <span>Statut</span>
        </div>
        {contacts.map((c) => (
          <div
            key={c.name}
            className="grid grid-cols-[1.2fr_1.5fr_1fr_0.8fr] items-center border-b border-white/5 px-4 py-2.5 text-[11px] last:border-0"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nexora-purple)]/60 to-[var(--nexora-cyan)]/60 text-[9px] font-bold text-white">
                {c.name.charAt(0)}
              </div>
              <span className="font-medium text-white">{c.name}</span>
            </div>
            <span className="text-white/70">{c.company}</span>
            <span className="text-white/50">{c.last}</span>
            <span>
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tagColor(c.status)}`}
              >
                {c.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- OPPORTUNITIES (pipeline) ---------------- */

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

function OpportunitiesView() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Pipeline — Devis chantier</h3>
          <p className="text-[11px] text-white/40">Mis à jour il y a 2 minutes</p>
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
    </div>
  );
}

/* ---------------- CALENDAR ---------------- */

function CalendarView() {
  // April-style month: 30 days, starts Monday
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const events: Record<number, { label: string; tint: string }[]> = {
    3: [{ label: "RDV client", tint: "cyan" }],
    8: [{ label: "Relance prévue", tint: "amber" }],
    12: [{ label: "RDV client", tint: "cyan" }],
    15: [{ label: "Pose chantier", tint: "purple" }],
    18: [{ label: "Relance prévue", tint: "amber" }],
    22: [{ label: "RDV client", tint: "cyan" }],
    25: [{ label: "Pose chantier", tint: "purple" }],
  };

  const tint = (t: string) => {
    if (t === "cyan") return "border-cyan-400/30 bg-cyan-400/15 text-cyan-300";
    if (t === "purple") return "border-purple-400/30 bg-purple-400/15 text-purple-300";
    return "border-amber-400/30 bg-amber-400/15 text-amber-300";
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Avril 2026</h3>
        <div className="flex items-center gap-3 text-[10px] text-white/50">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> RDV client
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> Relance
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-purple-400" /> Pose
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-white/5 bg-[#15152a] p-3">
        <div className="mb-2 grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-white/40">
          {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((d) => (
            <div
              key={d}
              className="min-h-[52px] rounded-md border border-white/5 bg-white/[0.02] p-1.5"
            >
              <span className="text-[10px] font-semibold text-white/70">{d}</span>
              <div className="mt-1 flex flex-col gap-0.5">
                {(events[d] || []).map((e, i) => (
                  <span
                    key={i}
                    className={`truncate rounded border px-1 py-0.5 text-[8px] font-medium ${tint(e.tint)}`}
                  >
                    {e.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- AUTOMATIONS ---------------- */

function AutomationsView() {
  const seqs = [
    { name: "Relance devis J+7", status: "Actif", contacts: 8 },
    { name: "Réactivation clients 6 mois", status: "Actif", contacts: 14 },
    { name: "SAV suivi post-pose", status: "En pause", contacts: 3 },
    { name: "Nurturing prospects froids", status: "Actif", contacts: 22 },
  ];

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Séquences automatisées</h3>
        <button className="rounded-md border border-[var(--nexora-cyan)]/40 bg-[var(--nexora-cyan)]/10 px-3 py-1.5 text-[11px] font-semibold text-[var(--nexora-cyan)]">
          + Nouvelle séquence
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {seqs.map((s) => {
          const active = s.status === "Actif";
          return (
            <div
              key={s.name}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-[#15152a] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-md ${
                    active
                      ? "bg-[var(--nexora-cyan)]/15 text-[var(--nexora-cyan)]"
                      : "bg-white/5 text-white/40"
                  }`}
                >
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white">{s.name}</p>
                  <p className="text-[10px] text-white/40">{s.contacts} contacts dans la séquence</p>
                </div>
              </div>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${
                  active
                    ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-400"
                    : "border-white/15 bg-white/5 text-white/50"
                }`}
              >
                {active && (
                  <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 align-middle" />
                )}
                {s.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
