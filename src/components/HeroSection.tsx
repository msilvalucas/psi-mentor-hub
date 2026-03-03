import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-secondary/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4" />
              Clube de Desenvolvimento Continuado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Bem-vindo ao{" "}
              <span className="text-primary">PsiPraQueTeQuero</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Um espaço de apoio e fortalecimento para psicólogos clínicos que
              buscam uma prática ética, segura e autoral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="text-base">
                <a href="#servicos">Quero saber mais</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="#sobre">Sobre Nós</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 via-accent to-secondary overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-primary/40">
                <div className="text-center space-y-3">
                  <Heart className="h-16 w-16 mx-auto" />
                  <p className="font-serif text-lg">Foto das Mentoras</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/60 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
