import { motion } from "framer-motion";
import Container from "../../ui/Container/Container.jsx";
import flatlay from "../../../assets/images/decorativos/xicara-graos-flatlay.png";
import styles from "./About.module.css";

const STATS = [
  { value: "10+", label: "Anos de experiência" },
  { value: "100%", label: "Grãos arábica selecionados" },
  { value: "15 mil+", label: "Clientes satisfeitos" },
];

function About() {
  return (
    <section id="sobre" className={styles.about}>
      <Container className={styles.grid}>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <img src={flatlay} alt="Xícara de café ao lado de grãos torrados" />
        </motion.div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className={styles.eyebrow}>Nossa história</p>
          <h2>Uma paixão por café que virou ponto de encontro</h2>
          <p className={styles.paragraph}>
            A Bean Scene nasceu do desejo de trazer para o bairro uma
            experiência de café completa: grãos selecionados diretamente de
            pequenos produtores, torra artesanal feita em pequenos lotes e um
            espaço pensado para acolher desde o café rápido da manhã até
            longas conversas à tarde.
          </p>
          <p className={styles.paragraph}>
            Hoje seguimos com o mesmo cuidado do primeiro dia: cada xícara é
            preparada na hora, com atenção aos detalhes que fazem toda a
            diferença no sabor.
          </p>

          <dl className={styles.stats}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;
