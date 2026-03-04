import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen, MessageCircle, ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/minecraft-hero-bg.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        {/* Announcement badge */}
        <div className="flex justify-center mb-6">
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/10 text-primary gap-2 animate-fade-in"
          >
            <Star className="h-3.5 w-3.5 fill-primary" />
            Nouveau — Compatible Minecraft 1.21
            <ArrowRight className="h-3.5 w-3.5" />
          </Badge>
        </div>

        {/* Title */}
        <div className="animate-float">
          <h1 className="text-glow-emerald mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl leading-none">
            Craft<span className="text-primary">Plugin</span>
          </h1>
          <p className="text-glow-diamond mx-auto max-w-2xl text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl leading-relaxed">
            Transformez votre serveur Minecraft avec des fonctionnalités
            <span className="text-foreground font-semibold"> ultra-puissantes</span> et une
            configuration <span className="text-primary font-semibold">simple</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download className="h-5 w-5" />
            Télécharger gratuitement
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-3 border-border/60 bg-background/20 backdrop-blur-sm hover:bg-muted/30 px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <BookOpen className="h-5 w-5" />
            Voir la documentation
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l) => (
                <div
                  key={l}
                  className="h-7 w-7 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 border-2 border-background flex items-center justify-center text-xs font-bold text-foreground"
                >
                  {l}
                </div>
              ))}
            </div>
            <span>+2 500 serveurs actifs</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-1">4.9/5 (340 avis)</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-indigo-400" />
            <span>Discord actif</span>
          </div>
        </div>

        {/* Version badge */}
        <div className="glass-card mt-16 inline-flex items-center gap-3 px-5 py-2.5 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Version 1.0.0 — Compatible 1.18 · 1.19 · 1.20 · 1.21
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
