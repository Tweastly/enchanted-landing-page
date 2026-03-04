import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Steve_Builder",
    role: "Admin • Survival 500 slots",
    avatar: "SB",
    rating: 5,
    text: "CraftPlugin a complètement transformé notre serveur. Les performances sont incroyables même avec 400 joueurs connectés. L'équipe de support est ultra réactive.",
    badge: "Vérifié",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    name: "CreeperKing_FR",
    role: "Propriétaire • SkyBlock Network",
    avatar: "CK",
    rating: 5,
    text: "Je cherchais un plugin tout-en-un depuis des mois. CraftPlugin coche toutes les cases. La configuration YAML est claire et le rechargement à chaud est un game changer.",
    badge: "Top Reviewer",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    name: "DiamondMiner99",
    role: "Admin • PvP Faction 1000 slots",
    avatar: "DM",
    rating: 5,
    text: "L'anti-grief est tout simplement le meilleur que j'ai utilisé. Zéro faux positif et les logs sont parfaits pour résoudre les litiges entre joueurs.",
    badge: "Vérifié",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    name: "EnderQueen",
    role: "Dev • Mini-jeux Network",
    avatar: "EQ",
    rating: 5,
    text: "L'API développeur est exceptionnelle. Bien documentée, stable et très flexible. J'ai pu intégrer CraftPlugin dans 3 de mes propres plugins en moins de 2 heures.",
    badge: "Développeur",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    name: "NotchFan2011",
    role: "Admin • Vanilla+ 200 slots",
    avatar: "NF",
    rating: 5,
    text: "Passé de 3 plugins différents à CraftPlugin. Mon serveur utilise 30% moins de RAM et les TPS sont stables à 20 en permanence. Incroyable.",
    badge: "Vérifié",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    name: "PixelCraft_Pro",
    role: "Fondateur • Creative Hub 800 slots",
    avatar: "PC",
    rating: 5,
    text: "Les notifications Discord sont parfaites pour modérer le serveur à distance. Je reçois une alerte dès qu'un joueur tente quelque chose de suspect.",
    badge: "Vérifié",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary"
          >
            Témoignages
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Ce que disent les{" "}
            <span className="text-primary">admins</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Plus de 340 avis vérifiés sur SpigotMC et Modrinth.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="group relative overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm hover:border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-muted-foreground/20 mb-4" />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-border">
                    <AvatarFallback className={`text-xs font-bold ${t.color} ${t.bg}`}>
                      {t.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-foreground">
                        {t.name}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`text-xs px-1.5 py-0 h-4 ${t.bg} ${t.color} border border-current/20`}
                      >
                        {t.badge}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
