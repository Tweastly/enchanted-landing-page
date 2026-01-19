
import { Download, BookOpen, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/minecraft-hero-bg.jpg)` }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Main Title */}
        <div className="animate-float text-center">
          <h1 className="text-glow-emerald mb-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            CraftPlugin
          </h1>
          <p className="text-glow-diamond mx-auto max-w-2xl text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl">
            Améliorez votre serveur Minecraft avec des fonctionnalités incroyables
          </p>
        </div>

        {/* Glass Buttons */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <button className="glass-button group flex items-center gap-3 text-foreground">
            <Download className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span>Télécharger</span>
          </button>
          
          <button className="glass-button group flex items-center gap-3 text-foreground">
            <BookOpen className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span>Documentation</span>
          </button>
          
          <button className="glass-button group flex items-center gap-3 text-foreground">
            <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span>Discord</span>
          </button>
        </div>

        {/* Subtle version badge */}
        <div className="glass-card mt-16 px-4 py-2 text-sm text-muted-foreground">
          Version 1.0.0 • Compatible 1.18 - 1.21
        </div>
      </div>
    </div>
  );
};

export default Index;
