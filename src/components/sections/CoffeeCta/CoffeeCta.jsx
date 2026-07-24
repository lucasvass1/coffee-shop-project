import { motion } from "framer-motion";
import Container from "../../ui/Container/Container.jsx";
import Button from "../../ui/Button/Button.jsx";
import ctaBg from "../../../assets/images/backgrounds/cta-bg.png";
import styles from "./CoffeeCta.module.css";

function CoffeeCta() {
  return (
    <section className={styles.cta} style={{ backgroundImage: `url(${ctaBg})` }}>
      <Container>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2>
            Uma chance de viver uma <span>manhã incrível</span>
          </h2>
          <p>
            Aproveite esta oportunidade única de experimentar uma vida melhor
            com café — todos os dias, sempre fresco.
          </p>
          <Button as="a" href="#menu">
            Peça agora
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default CoffeeCta;
