import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Settings2,
  BarChart3,
  Globe,
  Wrench,
  Layers,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra Performant",
    description:
      "Optimisé pour les gros serveurs. Aucun lag, même avec des milliers de joueurs connectés simultanément.",
    badge: "Core",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: Shield,
    title: "Anti-Grief Avancé",
    description:
      "Protégez vos zones avec un système de permissions granulaire. Logs en temps réel de chaque action.",
    badge: "Sécurité",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Settings2,
    title: "Configuration Simple",
    description:
      "Interface de configuration intuitive avec rechargement à chaud. Aucun redémarrage requis.",
    badge: "DX",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    icon: BarChart3,
    title: "Dashboard de Stats",
    description:
      "Suivez l'activité de votre serveur avec des graphiques détaillés et des rapports automatiques.",
    badge: "Analytics",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: Globe,
    title: "Multi-monde",
    description:
      "Gérez plusieurs mondes indépendamment avec des règles et des économies séparées.",
    badge: "Worlds",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: Wrench,
    title: "API Développeur",
    description:
      "API complète et documentée pour intégrer CraftPlugin dans vos propres plugins.",
    badge: "API",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  {
    icon: Layers,
    title: "Économie Intégrée",
    description:
      "Système d'économie complet avec boutiques, marchés aux enchères et transferts entre joueurs.",
    badge: "Économie",
    color: "text-emerald-300",
    bg: "bg-emerald-300/10",
    border: "border-emerald-300/20",
  },
  {
    icon: Bell,
    title: "Notifications Discord",
    description:
      "Recevez des alertes instantanées sur votre serveur Discord pour chaque événement important.",
    badge: "Intégration",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary"
          >
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Tout ce dont votre serveur
            <span className="text-primary"> a besoin</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Un plugin tout-en-un qui remplace une douzaine d'autres. Puissant,
            léger, et facile à configurer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat) => (
            <Card
              key={feat.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
            >
              {/* Subtle glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feat.bg} blur-xl`} />

              <CardHeader className="relative pb-3">
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${feat.bg} border ${feat.border}`}>
                  <feat.icon className={`h-5 w-5 ${feat.color}`} />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base font-semibold text-foreground leading-snug">
                    {feat.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className={`shrink-0 text-xs px-2 py-0 h-5 ${feat.bg} ${feat.color} border ${feat.border}`}
                  >
                    {feat.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
