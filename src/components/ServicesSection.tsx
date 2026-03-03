import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ShieldAlert, HelpCircle, Brain } from "lucide-react";

const painPoints = [
  {
    icon: ShieldAlert,
    title: "Insegurança nas decisões",
    description: "Medo de errar e a sensação de não estar preparada para a prática clínica.",
  },
  {
    icon: HelpCircle,
    title: "Dúvidas técnicas",
    description: "Hesitação nas intervenções sem uma base sólida nas habilidades centrais.",
  },
  {
    icon: Brain,
    title: "Impasses éticos",
    description: "Desafios éticos que surgem no dia a dia e exigem orientação qualificada.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        {/* Main service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Competências Essenciais{" "}
            <span className="text-primary">na Prática Clínica</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Card className="max-w-3xl mx-auto border-primary/20 bg-gradient-to-br from-card to-accent/30 shadow-lg mb-20">
            <CardContent className="p-8 md:p-10">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <p className="text-muted-foreground leading-relaxed text-base">
                Muitos profissionais atuam sob insegurança, hesitam nas
                intervenções e acabam exaustos pela tentativa de "acertar", sem
                uma base sólida em suas habilidades centrais. Este módulo foi
                criado para mudar esse cenário, ajudando psicoterapeutas a
                desenvolverem competências essenciais para uma atuação ética,
                sensível e consistente, integrando técnica, teoria e humanidade,
                e sustentando uma prática clínica segura e autoral.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Identification section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
            Eu me formei e quero viver da clínica.
          </h3>
          <p className="text-xl font-serif italic text-primary">
            Mas não sei por onde começar...
          </p>
        </motion.div>

        {/* Pain points */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground">
                    {point.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
