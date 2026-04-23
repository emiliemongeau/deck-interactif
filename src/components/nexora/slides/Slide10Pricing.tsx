import { Check, ArrowRight, Zap, Bot, Building2 } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function Slide10Pricing() {
  return (
    <SlideShell>
      <div className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[var(--nexora-cyan)]">
        Investissement
      </div>

      <h2 className="mb-4 max-w-4xl text-center text-3xl font-semibold text-white md:text-4xl">
        Votre parcours de croissance
      </h2>

      <p className="mb-10 max-w-2xl text-center text-sm text-white/50">
        Chaque étape prépare la suivante. Vous commencez par récupérer votre CA dormant, puis l'IA prend le relais pour automatiser votre croissance.
      </p>

      {/* Timeline connectée */}
      <div className="relative w-full max-w-6xl">
        {/* Ligne de connexion horizontale derrière les cartes */}
        <div className="absolute top-[72px] left-[16.5%] right-[16.5%] hidden h-[2px] bg-gradient-to-r from-[var(--nexora-cyan)] via-[var(--nexora-purple)] to-[var(--nexora-purple)] md:block" />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* Offre 1 - Booster */}
          <GrowthCard
            step="1"
            icon={<Zap className="h-6 w-6" />}
            title="Booster"
            badge="Produit d'appel"
            badgeTint="cyan"
            priceMain="2 500 €"
            priceSub="setup + 250 € / mois + 5% CA généré"
            priceStrike="3 000 €"
            features={[
              "Réactivation de votre base dormante",
              "Relances devis automatisées via ProDevis",
              "Séquences WhatsApp & email personnalisées",
              "Tableau de bord commercial GHL",
              "Formation & onboarding inclus",
            ]}
            cta="Démarrer"
            highlighted
            note="Prix préférentiel sous conditions : confirmation sous 7 jours · 1 témoignage vidéo · 2 recommandations qualifiées"
            transition="Résultat rapide → base pour l'agentique"
          />

          {/* Offre 2 - Agentique */}
          <GrowthCard
            step="2"
            icon={<Bot className="h-6 w-6" />}
            title="Agentique"
            badge="Recommandé"
            badgeTint="purple"
            priceMain="4 000 €"
            priceSub="setup + 500 € / mois"
            features={[
              "Tout le Booster inclus",
              "Équipe d'agents IA autonomes 24h/24",
              "Pilotage par WhatsApp ou Telegram",
              "L'IA analyse vos devis et relance seule",
              "Alertes proactives : analyse + recommandation temps réel",
              "Reporting instantané par message",
              "Accompagnement 6 mois inclus",
            ]}
            cta="Démarrer"
            transition="Croissance pilotée par l'IA → vers l'infrastructure complète"
          />

          {/* Offre 3 - Premium */}
          <GrowthCard
            step="3"
            icon={<Building2 className="h-6 w-6" />}
            title="Premium"
            badge="Sur mesure"
            badgeTint="purple"
            priceMain="À partir de 10 000 €"
            features={[
              "Infrastructure IA multi-départements",
              "Commerciale, production, SAV",
              "RH, finances, approvisionnement",
              "Déploiement sur mesure",
              "Accompagnement long terme",
            ]}
            cta="Nous contacter"
          />
        </div>
      </div>

      <p className="mt-8 text-center text-xs italic text-white/40">
        Offre lancement — places limitées
      </p>
    </SlideShell>
  );
}

function GrowthCard({
  step,
  icon,
  title,
  badge,
  badgeTint,
  priceMain,
  priceSub,
  priceStrike,
  features,
  cta,
  highlighted,
  note,
  transition,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  badge?: string;
  badgeTint?: "cyan" | "purple";
  priceMain: string;
  priceSub?: string;
  priceStrike?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  note?: string;
  transition?: string;
}) {
  const stepColor = step === "1"
    ? "border-[var(--nexora-cyan)] bg-[var(--nexora-cyan)] text-[var(--nexora-bg)]"
    : step === "2"
    ? "border-[var(--nexora-purple)] bg-[var(--nexora-purple)] text-white"
    : "border-white/30 bg-white/10 text-white";

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
        highlighted
          ? "border-[var(--nexora-cyan)]/50 bg-gradient-to-b from-[var(--nexora-cyan)]/[0.08] to-white/[0.02] shadow-[var(--glow-cyan)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20"
      }`}
    >
      {/* Step number + icône */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-black ${stepColor}`}
        >
          {step}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white/70">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      {badge && (
        <div
          className={`mb-4 self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
            badgeTint === "purple"
              ? "border border-[var(--nexora-purple)]/50 bg-[var(--nexora-purple)]/20 text-[var(--nexora-purple)]"
              : "border border-[var(--nexora-cyan)]/50 bg-[var(--nexora-cyan)]/20 text-[var(--nexora-cyan)]"
          }`}
        >
          {badge}
        </div>
      )}

      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-3xl font-black text-white">{priceMain}</span>
        {priceStrike && (
          <span className="text-sm text-white/40 line-through">{priceStrike}</span>
        )}
      </div>
      {priceSub && (
        <p className="mb-5 text-sm font-light text-white/60">{priceSub}</p>
      )}
      {!priceSub && <div className="mb-5 h-5" />}

      <ul className="mb-4 flex flex-1 flex-col gap-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/75">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                highlighted ? "text-[var(--nexora-cyan)]" : "text-white/50"
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Transition vers l'étape suivante */}
      {transition && (
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-dashed border-white/10 bg-white/[0.02] px-3 py-2">
          <ArrowRight className="h-3 w-3 shrink-0 text-white/30" />
          <span className="text-[10px] text-white/40">{transition}</span>
        </div>
      )}

      <button
        className={`mt-auto rounded-lg py-2.5 text-sm font-semibold transition ${
          highlighted
            ? "bg-gradient-to-r from-[var(--nexora-cyan)] to-[var(--nexora-purple)] text-white shadow-[var(--glow-cyan)] hover:opacity-90"
            : "border border-white/15 bg-white/5 text-white hover:border-[var(--nexora-cyan)]/50 hover:text-[var(--nexora-cyan)]"
        }`}
      >
        {cta}
      </button>

      {note && (
        <p className="mt-3 text-[10px] leading-relaxed text-white/45">
          {note}
        </p>
      )}
    </div>
  );
}
