import { motion } from "framer-motion";
import styles from "./Card.module.css";

function Card({ className = "", children, hoverLift = true, ...rest }) {
  const classes = className ? `${styles.card} ${className}` : styles.card;
  return (
    <motion.div
      className={classes}
      whileHover={hoverLift ? { y: -8, boxShadow: "var(--shadow-lg)" } : undefined}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default Card;
