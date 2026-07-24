import { motion } from "framer-motion";
import styles from "./SectionHeading.module.css";

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      className={`${styles.wrapper} ${styles[align]}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
}

export default SectionHeading;
