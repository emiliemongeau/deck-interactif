import { SlideShell } from "../SlideShell";

export function Slide0Infra() {
  const departments = [
    { title: "Équipe commerciale", tools: ["GHL", "ProDevis"] },
    { title: "Production / Atelier", tools: ["n8n", "ProDevis"] },
    { title: "Équipe de pose", tools: ["WhatsApp", "Obat"] },
    { title: "Finances / Compta", tools: ["Pennylane", "PayPal"] },
    { title: "Achats / Appro", tools: ["n8n", "Notion"] },
    { title: "RH", tools: ["Notion", "WhatsApp"] },
  ];

  return (
    <SlideShell>
      <div className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        L'infrastructure
      </div>

      <h2 className="mb-10 max-w-5xl text-center text-3xl font-semibold leading-tight text-white md:text-4xl">
        Un cerveau IA connecté à toute votre entreprise
      </h2>

      {/* Schema */}
      <div className="flex w-full max-w-7xl flex-col items-center gap-3">
        {/* Niveau 1 */}
        <Node label="Telegram" tint="cyan" />
        <Connector />

        {/* Niveau 2 */}
        <div className="flex items-center gap-6">
          <Node label="Hermès Agent" tint="purple" />
          <div className="h-[2px] w-16 bg-gradient-to-r from-[var(--nexora-purple)] to-[var(--nexora-cyan)]" />
          <Node label="Data OS" sublabel="source de vérité" tint="cyan" />
        </div>
        <Connector />

        {/* Niveau 3 */}
        <Node label="Claude Code" tint="purple" />

        {/* Branches */}
        <div className="relative h-6 w-full max-w-6xl">
          <div className="absolute left-1/2 top-0 h-3 w-[2px] -translate-x-1/2 bg-white/30" />
          <div className="absolute left-[8%] right-[8%] top-3 h-[2px] bg-white/20" />
          <div className="absolute bottom-0 left-[8%] h-3 w-[2px] bg-white/20" />
          <div className="absolute bottom-0 left-[24.8%] h-3 w-[2px] bg-white/20" />
          <div className="absolute bottom-0 left-[41.6%] h-3 w-[2px] bg-white/20" />
          <div className="absolute bottom-0 left-[58.4%] h-3 w-[2px] bg-white/20" />
          <div className="absolute bottom-0 left-[75.2%] h-3 w-[2px] bg-white/20" />
          <div className="absolute bottom-0 right-[8%] h-3 w-[2px] bg-white/20" />
        </div>

        {/* Niveau 4 */}
        <div className="grid w-full max-w-7xl grid-cols-6 gap-3">
          {departments.map((d) => (
            <div
              key={d.title}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 backdrop-blur-sm"
            >
              <div className="text-center text-xs font-semibold text-white">{d.title}</div>
              <div className="flex flex-wrap justify-center gap-1">
                {d.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[var(--nexora-cyan)]/20 bg-[var(--nexora-cyan)]/5 px-2 py-0.5 text-[10px] font-medium text-[var(--nexora-cyan)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function Node({
  label,
  sublabel,
  tint,
}: {
  label: string;
  sublabel?: string;
  tint: "cyan" | "purple";
}) {
  const ring =
    tint === "cyan"
      ? "border-[var(--nexora-cyan)]/40 shadow-[var(--glow-cyan)]"
      : "border-[var(--nexora-purple)]/40 shadow-[var(--glow-purple)]";
  return (
    <div
      className={`flex min-w-[180px] flex-col items-center rounded-xl border bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm ${ring}`}
    >
      <span className="text-sm font-semibold text-white">{label}</span>
      {sublabel && <span className="text-[10px] italic text-white/50">{sublabel}</span>}
    </div>
  );
}

function Connector() {
  return <div className="h-5 w-[2px] bg-gradient-to-b from-[var(--nexora-cyan)]/60 to-[var(--nexora-purple)]/60" />;
}
