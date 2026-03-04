import { Button } from "@/components/ui/button";
import { Download, MessageCircle, ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass-card border border-primary/20 rounded-2xl p-12 sm:p-16 text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 border border-primary/30 mb-6">
            <Download className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Prêt à améliorer votre serveur ?
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg leading-relaxed mb-10">
            Rejoignez plus de 2 500 serveurs qui font confiance à CraftPlugin.
            Installation en moins de 2 minutes. Gratuit pour toujours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Télécharger — Gratuit
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-3 border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-200 px-10 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Rejoindre le Discord
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-muted-foreground/60">
            Aucune carte bancaire requise · Open-source · MIT License
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
