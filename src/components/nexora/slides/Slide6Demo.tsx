import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Zap,
  Search,
  Bell,
  Settings,
  Bot,
  TrendingUp,
  TrendingDown,
  Phone,
  Mail,
  MoreHorizontal,
  Play,
  Pause,
  Send,
  CheckCircle2,
  Clock,
  Plus,
} from "lucide-react";
import { SlideShell } from "../SlideShell";

type TabKey = "dashboard" | "contacts" | "calendars" | "automation" | "agents";

const TABS: { key: TabKey; icon: typeof LayoutDashboard; label: string }[] = [
  { key: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { key: "contacts", icon: Users, label: "Contacts" },
  { key: "calendars", icon: Calendar, label: "Calendars" },
  { key: "automation", icon: Zap, label: "Automation" },
  { key: "agents", icon: Bot, label: "AI Agents" },
];

export function Slide6Demo() {
  const [tab, setTab] = useState<TabKey>("dashboard");

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
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--nexora-cyan)] to-[var(--nexora-purple)] text-xs font-black text-white">
              G
            </div>
            <span className="text-sm font-semibold text-white">HighLevel</span>
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

        <div className="flex min-h-[440px]">
          {/* Sidebar */}
          <aside className="w-44 shrink-0 border-r border-white/10 bg-[#0b0b18] py-4">
            {TABS.map((item) => {
              const active = tab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setTab(item.key)}
                  className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-xs font-medium transition ${
                    active
                      ? "border-l-2 border-[var(--nexora-cyan)] bg-[var(--nexora-cyan)]/10 text-[var(--nexora-cyan)]"
                      : "border-l-2 border-transparent text-white/55 hover:bg-white/[0.03] hover:text-white/80"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              );
            })}
          </aside>

          {/* Main content */}
          <main className="flex-1 p-5">
            {tab === "dashboard" && <DashboardView />}
            {tab === "contacts" && <ContactsView />}
            {tab === "calendars" && <CalendarsView />}
            {tab === "automation" && <AutomationView />}
            {tab === "agents" && <AgentsView />}
          </main>
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- DASHBOARD ---------- */

function DashboardView() {
  const kpis = [
    { label: "CA récupéré (30j)", value: "47 800 €", trend: "+18%", up: true },
    { label: "Devis relancés", value: "126", trend: "+24%", up: true },
    { label: "Taux de signature", value: "32%", trend: "+6 pts", up: true },
    { label: "RDV pris", value: "41", trend: "-3%", up: false },
  ];
  return (
    <>
      <SectionHeader title="Vue d'ensemble" subtitle="Mis à jour il y a 2 minutes" />
      <div className="mb-4 grid grid-cols-4 gap-2.5">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-white/5 bg-[#15152a] p-3">
            <p className="mb-1 text-[10px] uppercase tracking-wider text-white/40">{k.label}</p>
            <p className="text-lg font-bold text-white">{k.value}</p>
            <div
              className={`mt-1 flex items-center gap-1 text-[10px] font-semibold ${
                k.up ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {k.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {k.trend}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        <div className="col-span-2 rounded-lg border border-white/5 bg-[#15152a] p-3">
          <p className="mb-3 text-[11px] font-semibold text-white">Évolution du CA récupéré</p>
          <div className="flex h-32 items-end gap-1.5">
            {[35, 48, 42, 60, 55, 72, 68, 85, 78, 92, 88, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-[var(--nexora-purple)]/60 to-[var(--nexora-cyan)]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/5 bg-[#15152a] p-3">
          <p className="mb-2 text-[11px] font-semibold text-white">Activité récente</p>
          {[
            { t: "Devis #2418 signé", d: "il y a 4 min", c: "emerald" },
            { t: "Relance auto envoyée", d: "il y a 12 min", c: "cyan" },
            { t: "RDV confirmé", d: "il y a 28 min", c: "purple" },
            { t: "Nouveau contact", d: "il y a 1 h", c: "white" },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-2 border-b border-white/5 py-1.5 last:border-0">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background:
                    a.c === "emerald"
                      ? "#10b981"
                      : a.c === "cyan"
                        ? "var(--nexora-cyan)"
                        : a.c === "purple"
                          ? "var(--nexora-purple)"
                          : "#fff",
                }}
              />
              <div className="flex-1">
                <p className="text-[10px] text-white/85">{a.t}</p>
                <p className="text-[9px] text-white/40">{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------- CONTACTS ---------- */

function ContactsView() {
  const contacts = [
    { name: "Menuiserie Martin", email: "contact@martin-menuiserie.fr", phone: "06 12 34 56 78", tag: "Chaud", status: "Devis envoyé" },
    { name: "Atelier Rivière", email: "j.riviere@atelier.fr", phone: "06 23 45 67 89", tag: "Tiède", status: "Nouveau" },
    { name: "Métallerie Dupont", email: "dupont@metallerie.com", phone: "06 34 56 78 90", tag: "Chaud", status: "Relancé" },
    { name: "Miroiterie Bernard", email: "bernard@miroir.fr", phone: "06 45 67 89 01", tag: "Froid", status: "Dormant" },
    { name: "Ets Fontaine", email: "contact@fontaine.fr", phone: "06 56 78 90 12", tag: "Chaud", status: "Devis envoyé" },
    { name: "SARL Vidal", email: "vidal@sarl.fr", phone: "06 67 89 01 23", tag: "Tiède", status: "Relancé" },
  ];
  const tagColor = (t: string) =>
    t === "Chaud"
      ? "bg-rose-500/15 text-rose-300 border-rose-500/30"
      : t === "Tiède"
        ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
        : "bg-sky-500/15 text-sky-300 border-sky-500/30";
  return (
    <>
      <SectionHeader title="Contacts" subtitle="2 184 contacts · 126 actifs">
        <button className="flex items-center gap-1 rounded-md bg-[var(--nexora-cyan)]/15 px-2.5 py-1 text-[10px] font-semibold text-[var(--nexora-cyan)]">
          <Plus className="h-3 w-3" /> Nouveau
        </button>
      </SectionHeader>
      <div className="overflow-hidden rounded-lg border border-white/5 bg-[#15152a]">
        <div className="grid grid-cols-12 border-b border-white/5 bg-white/[0.02] px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-white/50">
          <div className="col-span-3">Nom</div>
          <div className="col-span-3">Email</div>
          <div className="col-span-2">Téléphone</div>
          <div className="col-span-2">Statut</div>
          <div className="col-span-1">Tag</div>
          <div className="col-span-1 text-right">—</div>
        </div>
        {contacts.map((c) => (
          <div
            key={c.name}
            className="grid grid-cols-12 items-center border-b border-white/5 px-3 py-2 text-[11px] last:border-0 hover:bg-white/[0.02]"
          >
            <div className="col-span-3 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nexora-purple)]/60 to-[var(--nexora-cyan)]/60 text-[8px] font-bold text-white">
                {c.name.charAt(0)}
              </div>
              <span className="font-medium text-white/90">{c.name}</span>
            </div>
            <div className="col-span-3 flex items-center gap-1 text-white/55">
              <Mail className="h-2.5 w-2.5" /> {c.email}
            </div>
            <div className="col-span-2 flex items-center gap-1 text-white/55">
              <Phone className="h-2.5 w-2.5" /> {c.phone}
            </div>
            <div className="col-span-2 text-white/65">{c.status}</div>
            <div className="col-span-1">
              <span className={`rounded border px-1.5 py-0.5 text-[9px] font-semibold ${tagColor(c.tag)}`}>
                {c.tag}
              </span>
            </div>
            <div className="col-span-1 text-right text-white/30">
              <MoreHorizontal className="ml-auto h-3 w-3" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- CALENDARS ---------- */

function CalendarsView() {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven"];
  const slots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
  const events: Record<string, { label: string; color: string }> = {
    "Lun-10:00": { label: "RDV Martin", color: "var(--nexora-cyan)" },
    "Mar-14:00": { label: "Visite chantier", color: "var(--nexora-purple)" },
    "Mer-09:00": { label: "Appel Bernard", color: "#f59e0b" },
    "Mer-15:00": { label: "Signature Dupont", color: "#10b981" },
    "Jeu-11:00": { label: "Démo Vidal", color: "var(--nexora-cyan)" },
    "Ven-16:00": { label: "RDV Fontaine", color: "var(--nexora-purple)" },
  };
  return (
    <>
      <SectionHeader title="Calendrier — Semaine du 14 avril" subtitle="6 RDV planifiés · 2 confirmés par l'IA" />
      <div className="overflow-hidden rounded-lg border border-white/5 bg-[#15152a]">
        <div className="grid grid-cols-6 border-b border-white/5 bg-white/[0.02]">
          <div className="border-r border-white/5 px-2 py-1.5 text-[9px] font-semibold uppercase text-white/40" />
          {days.map((d) => (
            <div key={d} className="border-r border-white/5 px-2 py-1.5 text-center text-[10px] font-semibold text-white/70 last:border-0">
              {d}
            </div>
          ))}
        </div>
        {slots.map((s) => (
          <div key={s} className="grid grid-cols-6 border-b border-white/5 last:border-0">
            <div className="border-r border-white/5 px-2 py-2 text-[10px] text-white/40">{s}</div>
            {days.map((d) => {
              const ev = events[`${d}-${s}`];
              return (
                <div key={d + s} className="border-r border-white/5 p-1 last:border-0">
                  {ev && (
                    <div
                      className="rounded px-1.5 py-1 text-[9px] font-semibold text-white"
                      style={{ background: `${ev.color}25`, borderLeft: `2px solid ${ev.color}` }}
                    >
                      {ev.label}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- AUTOMATION ---------- */

function AutomationView() {
  const flows = [
    { name: "Réactivation devis dormants", trigger: "Devis > 30 jours", actions: 6, runs: "1 248", status: "active" },
    { name: "Relance devis envoyé J+3", trigger: "Devis envoyé", actions: 4, runs: "892", status: "active" },
    { name: "Bienvenue nouveau lead", trigger: "Nouveau contact", actions: 5, runs: "324", status: "active" },
    { name: "Confirmation RDV", trigger: "RDV créé", actions: 3, runs: "186", status: "active" },
    { name: "Nurturing froid", trigger: "Lead inactif 90j", actions: 8, runs: "67", status: "paused" },
  ];
  return (
    <>
      <SectionHeader title="Workflows — 5 actifs" subtitle="2 717 exécutions ce mois">
        <button className="flex items-center gap-1 rounded-md bg-[var(--nexora-cyan)]/15 px-2.5 py-1 text-[10px] font-semibold text-[var(--nexora-cyan)]">
          <Plus className="h-3 w-3" /> Workflow
        </button>
      </SectionHeader>
      <div className="space-y-2">
        {flows.map((f) => (
          <div
            key={f.name}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#15152a] px-3 py-2.5"
          >
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-md ${
                f.status === "active"
                  ? "bg-emerald-500/15 text-emerald-400"
                  : "bg-white/10 text-white/50"
              }`}
            >
              {f.status === "active" ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-white">{f.name}</p>
              <p className="text-[9px] text-white/40">
                Déclencheur : {f.trigger} · {f.actions} actions
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-white">{f.runs}</p>
              <p className="text-[9px] text-white/40">exécutions</p>
            </div>
            <span
              className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold ${
                f.status === "active"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-white/15 bg-white/5 text-white/50"
              }`}
            >
              {f.status === "active" ? "Actif" : "En pause"}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- AI AGENTS ---------- */

function AgentsView() {
  const agents = [
    {
      name: "Agent Réactivation",
      role: "Réveille les contacts dormants > 90 jours",
      stats: { conv: "412", rdv: "38", ca: "18 200 €" },
      color: "var(--nexora-cyan)",
      active: true,
    },
    {
      name: "Agent Relance Devis",
      role: "Suit et relance les devis envoyés jusqu'à signature",
      stats: { conv: "684", rdv: "92", ca: "29 600 €" },
      color: "var(--nexora-purple)",
      active: true,
    },
    {
      name: "Agent Acquisition",
      role: "Qualifie les nouveaux leads entrants 24/7",
      stats: { conv: "1 156", rdv: "64", ca: "—" },
      color: "#10b981",
      active: true,
    },
  ];

  const conversation = [
    { from: "client", text: "Bonjour, j'avais reçu un devis en janvier mais pas eu le temps…" },
    {
      from: "agent",
      text: "Bonjour M. Martin 👋 Pas de souci ! Votre devis pour la pose de menuiserie est encore valable. Souhaitez-vous qu'on planifie une visite cette semaine pour finaliser ?",
    },
    { from: "client", text: "Oui pourquoi pas, jeudi matin ?" },
    {
      from: "agent",
      text: "Parfait, je vous propose jeudi 17 à 10h. Je vous envoie la confirmation par SMS 📅",
    },
  ];

  return (
    <>
      <SectionHeader title="Agents IA conversationnels" subtitle="Un agent dédié par workflow · supervisé par NEXORA IA" />
      <div className="grid grid-cols-3 gap-2.5">
        {agents.map((a) => (
          <div
            key={a.name}
            className="rounded-lg border bg-[#15152a] p-3"
            style={{ borderColor: `${a.color}40`, boxShadow: `0 0 16px -6px ${a.color}40` }}
          >
            <div className="mb-2 flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-md"
                style={{ background: `${a.color}25`, color: a.color }}
              >
                <Bot className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold text-white">{a.name}</p>
                <div className="flex items-center gap-1 text-[9px] text-emerald-400">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
                  En ligne
                </div>
              </div>
            </div>
            <p className="mb-2.5 text-[10px] leading-relaxed text-white/55">{a.role}</p>
            <div className="grid grid-cols-3 gap-1 border-t border-white/5 pt-2">
              <Stat label="Convers." value={a.stats.conv} />
              <Stat label="RDV" value={a.stats.rdv} />
              <Stat label="CA" value={a.stats.ca} />
            </div>
          </div>
        ))}
      </div>

      {/* Live conversation preview */}
      <div className="mt-3 rounded-lg border border-white/5 bg-[#15152a] p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-3.5 w-3.5 text-[var(--nexora-cyan)]" />
            <p className="text-[11px] font-semibold text-white">
              Agent Réactivation — conversation en cours
            </p>
          </div>
          <span className="flex items-center gap-1 text-[9px] text-white/40">
            <Clock className="h-2.5 w-2.5" /> il y a 2 min
          </span>
        </div>
        <div className="space-y-1.5">
          {conversation.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "agent" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[75%] rounded-lg px-2.5 py-1.5 text-[10px] leading-relaxed ${
                  m.from === "agent"
                    ? "bg-[var(--nexora-cyan)]/10 text-white/90"
                    : "bg-white/5 text-white/75"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2 border-t border-white/5 pt-2">
          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
          <p className="text-[10px] text-white/55">RDV confirmé · ajouté au calendrier</p>
          <Send className="ml-auto h-3 w-3 text-white/30" />
        </div>
      </div>
    </>
  );
}

/* ---------- shared bits ---------- */

function SectionHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-[11px] text-white/40">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2">
        {children}
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          NEXORA IA actif
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-[11px] font-bold text-white">{value}</p>
      <p className="text-[8px] uppercase tracking-wider text-white/40">{label}</p>
    </div>
  );
}
