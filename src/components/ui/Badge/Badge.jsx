import styles from "./Badge.module.css";

function Badge({ tone = "neutral", children }) {
  const toneClass = styles[tone] ?? styles.neutral;
  return <span className={`${styles.badge} ${toneClass}`}>{children}</span>;
}

export default Badge;
