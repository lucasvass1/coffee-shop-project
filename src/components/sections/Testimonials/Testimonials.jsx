import { AnimatePresence, motion } from "framer-motion";
import Container from "../../ui/Container/Container.jsx";
import IconButton from "../../ui/IconButton/IconButton.jsx";
import { useTestimonialCarousel } from "../../../hooks/useTestimonialCarousel.js";
import testimonials from "../../../data/testimonials.json";
import decorLeft from "../../../assets/images/decorativos/graos-decorativo-esquerda.png";
import decorRight from "../../../assets/images/decorativos/graos-decorativo-direita.png";
import avatar1 from "../../../assets/images/avatares/avatar-cliente-1.png";
import avatar2 from "../../../assets/images/avatares/avatar-cliente-2.png";
import avatar3 from "../../../assets/images/avatares/avatar-cliente-3.png";
import styles from "./Testimonials.module.css";

const AVATARS = {
  "avatar-cliente-1": avatar1,
  "avatar-cliente-2": avatar2,
  "avatar-cliente-3": avatar3,
};

function Testimonials() {
  const { activeIndex, activeItem, goNext, goPrev, setIndex } =
    useTestimonialCarousel(testimonials);

  return (
    <section id="depoimentos" className={styles.section}>
      <img src={decorLeft} alt="" className={styles.decorLeft} />
      <img src={decorRight} alt="" className={styles.decorRight} />

      <Container className={styles.container}>
        <p className={styles.eyebrow}>Depoimentos</p>
        <h2>O que dizem sobre nós</h2>
        <p className={styles.subtitle}>
          Nossos clientes têm coisas incríveis para contar sobre a experiência
          Bean Scene
        </p>

        <div className={styles.carousel}>
          <IconButton label="Depoimento anterior" onClick={goPrev}>
            ←
          </IconButton>

          <div className={styles.viewport} aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.id}
                className={styles.card}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className={styles.quote}>&ldquo;</span>
                <p className={styles.text}>{activeItem.text}</p>
                <img
                  src={AVATARS[activeItem.avatar]}
                  alt={activeItem.name}
                  className={styles.avatar}
                />
                <h3>{activeItem.name}</h3>
                <p className={styles.role}>{activeItem.role}</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <IconButton label="Próximo depoimento" onClick={goNext}>
            →
          </IconButton>
        </div>

        <div className={styles.dots} role="tablist" aria-label="Selecionar depoimento">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Depoimento de ${item.name}`}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
