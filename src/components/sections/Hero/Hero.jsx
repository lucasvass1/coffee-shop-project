import { motion } from "framer-motion";
import Container from "../../ui/Container/Container.jsx";
import Button from "../../ui/Button/Button.jsx";
import heroBg from "../../../assets/images/backgrounds/hero-bg.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section
      id="inicio"
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.overlay} />
      <Container className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Torra artesanal desde 2015
        </motion.p>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Aroma, sabor e aconchego em cada xícara
        </motion.h1>
        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Grãos selecionados, torra artesanal e um espaço pensado para você
          começar o dia com calma — ou fazer dele um momento especial.
        </motion.p>
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button as="a" href="#menu">
            Ver cardápio
          </Button>
          <Button as="a" href="#sobre" variant="secondary">
            Nossa história
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
