import { motion } from "framer-motion";
import styles from "./Button.module.css";

const VARIANT_CLASS = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

function Button({
  as: Tag = "button",
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  const classes = [styles.button, VARIANT_CLASS[variant], className]
    .filter(Boolean)
    .join(" ");

  const MotionTag = motion[Tag] ?? motion.button;

  return (
    <MotionTag
      className={classes}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default Button;
