import { motion } from "framer-motion";
import { Users, Award, Shield } from "lucide-react";
import mentorasImg from "@/assets/mentoras.png";

const stats = [
  { icon: Users, label: "Horas de atendimento", value: "+7.000" },
  { icon: Award, label: "Especializações", value: "Diversas" },
  { icon: Shield, label: "Prática clínica", value: "Ética & Segura" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src={mentorasImg}
                alt="Mentoras do PsiPraQueTeQuero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Sobre <span className="text-primary">Nós</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Somos psicólogas clínicas com mais de 7 mil horas de atendimentos
              realizados. Cada uma em sua área, mas passamos pelos mesmos
              desafios da clínica: inseguranças, dúvidas técnicas, impasses
              éticos e a solidão das decisões clínicas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa prática não se construiu sozinha. Foi sustentada por
              mentorias, supervisões e especializações — investimentos
              necessários, porém nem sempre acessíveis, para quem está começando
              ou se reposicionando.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              Por isso, hoje ocupamos o lugar de mentoras. Criamos o
              PsiPraQueTeQuero para ser um espaço de apoio e fortalecimento de
              uma prática clínica ética, segura e autoral.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center space-y-1">
                  <stat.icon className="h-6 w-6 mx-auto text-primary" />
                  <p className="text-lg font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
