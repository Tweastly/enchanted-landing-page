import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Github, MessageCircle, BookOpen, Zap } from "lucide-react";

const Footer = () => {
  const links = {
    Plugin: [
      { label: "Télécharger", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "Contribuer", href: "#" },
    ],
    Ressources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Exemples", href: "#" },
      { label: "Tutoriels", href: "#" },
    ],
    Communauté: [
      { label: "Discord", href: "#" },
      { label: "SpigotMC", href: "#" },
      { label: "Modrinth", href: "#" },
      { label: "GitHub Issues", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <span className="font-bold text-foreground text-lg">
                Craft<span className="text-primary">Plugin</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
              Le plugin Minecraft tout-en-un pour propulser votre serveur au niveau supérieur.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground hover:text-indigo-400 hover:bg-indigo-400/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <BookOpen className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-border/50" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>© 2024 CraftPlugin. Tous droits réservés.</span>
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 text-xs"
            >
              MIT License
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
