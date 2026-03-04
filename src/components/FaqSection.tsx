import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "CraftPlugin est-il vraiment gratuit ?",
    a: "Oui, CraftPlugin est entièrement gratuit et open-source. Il n'y a aucun frais caché, aucun système de paiement et aucune fonctionnalité bloquée derrière un paywall. La version gratuite est la version complète.",
  },
  {
    q: "Avec quels serveurs est-il compatible ?",
    a: "CraftPlugin est compatible avec Paper, Spigot, Purpur, Folia et Bukkit. Nous recommandons Paper ou Purpur pour de meilleures performances. La version Minecraft minimale requise est 1.18 et nous supportons jusqu'à 1.21.",
  },
  {
    q: "Comment installer CraftPlugin ?",
    a: "Il suffit de télécharger le fichier .jar et de le placer dans le dossier /plugins de votre serveur. Au premier démarrage, les fichiers de configuration sont générés automatiquement. La documentation complète est disponible sur notre site.",
  },
  {
    q: "Est-ce que CraftPlugin impacte les performances ?",
    a: "CraftPlugin est conçu pour être aussi léger que possible. Il utilise des tâches asynchrones pour toutes les opérations lourdes (base de données, calculs), ce qui garantit des TPS stables même sur les gros serveurs avec plusieurs centaines de joueurs.",
  },
  {
    q: "Puis-je utiliser CraftPlugin avec d'autres plugins ?",
    a: "Absolument. CraftPlugin est conçu pour coexister avec les plugins populaires (EssentialsX, LuckPerms, Vault, WorldGuard, etc.). L'API développeur permet également d'intégrer vos propres plugins facilement.",
  },
  {
    q: "Comment obtenir de l'aide en cas de problème ?",
    a: "Plusieurs options s'offrent à vous : notre serveur Discord avec un support actif 7j/7, la documentation en ligne très complète, ou les issues GitHub pour les bugs. La communauté est très active et répondra rapidement.",
  },
  {
    q: "Est-ce que les mises à jour sont fréquentes ?",
    a: "Oui, nous publions des mises à jour régulières (corrections de bugs toutes les 1-2 semaines, nouvelles fonctionnalités chaque mois). Chaque nouvelle version de Minecraft est supportée en général dans les 48h suivant sa sortie.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary"
          >
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Questions{" "}
            <span className="text-primary">fréquentes</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Tout ce que vous devez savoir avant d'installer CraftPlugin.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card border border-border/50 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:text-primary hover:no-underline transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
