import styles from "./Input.module.css";

function Input({ className = "", ...rest }) {
  const classes = className ? `${styles.input} ${className}` : styles.input;
  return <input className={classes} {...rest} />;
}

export default Input;
