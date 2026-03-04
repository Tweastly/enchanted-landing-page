import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Server, Users, Download, Star } from "lucide-react";

const stats = [
  {
    icon: Server,
    value: "2 500+",
    label: "Serveurs actifs",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    value: "180K+",
    label: "Joueurs uniques",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Download,
    value: "45K+",
    label: "Téléchargements",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Note moyenne",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-20 relative">
      {/* Top separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary"
          >
            En chiffres
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Une communauté qui{" "}
            <span className="text-primary">grandit vite</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="glass-card p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}
              >
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-4xl sm:text-5xl font-black tracking-tight ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>

              {/* Vertical separator between items (desktop) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute" />
              )}
            </div>
          ))}
        </div>

        {/* Compatibility bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Compatible avec :</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Paper", "Spigot", "Purpur", "Folia", "Bukkit"].map((p) => (
              <Badge
                key={p}
                variant="secondary"
                className="bg-muted/60 text-muted-foreground hover:bg-muted transition-colors"
              >
                {p}
              </Badge>
            ))}
          </div>
          <Separator orientation="vertical" className="hidden sm:block h-4" />
          <span>Java 17+ · MC 1.18 – 1.21</span>
        </div>
      </div>

      {/* Bottom separator gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default StatsSection;
