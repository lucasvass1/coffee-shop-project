import { motion } from "framer-motion";
import Container from "../../ui/Container/Container.jsx";
import SectionHeading from "../../ui/SectionHeading/SectionHeading.jsx";
import { BeanIcon, LeafIcon, CupIcon, HeartIcon } from "./icons.jsx";
import styles from "./WhyUs.module.css";

const FEATURES = [
  {
    icon: BeanIcon,
    title: "Grãos 100% arábica",
    description: "Selecionados diretamente de pequenos produtores parceiros.",
  },
  {
    icon: LeafIcon,
    title: "Torra artesanal",
    description: "Lotes pequenos, torrados semanalmente para garantir frescor.",
  },
  {
    icon: CupIcon,
    title: "Ambiente aconchegante",
    description: "Um espaço pensado para trabalhar, criar e relaxar com calma.",
  },
  {
    icon: HeartIcon,
    title: "Feito com cuidado",
    description: "Cada xícara preparada na hora, com atenção aos detalhes.",
  },
];

function WhyUs() {
  return (
    <section id="diferenciais" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Por que a Bean Scene"
          title="Nossos diferenciais"
          description="O que torna cada visita uma experiência memorável."
        />
        <div className={styles.grid}>
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.feature}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className={styles.iconWrap}>
                <feature.icon />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyUs;
