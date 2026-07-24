import { motion } from "framer-motion";
import styles from "./IconButton.module.css";

function IconButton({ label, children, className = "", ...rest }) {
  const classes = className ? `${styles.iconButton} ${className}` : styles.iconButton;
  return (
    <motion.button
      type="button"
      aria-label={label}
      className={classes}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.15 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export default IconButton;
