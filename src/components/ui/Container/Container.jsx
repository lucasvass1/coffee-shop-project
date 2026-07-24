import styles from "./Container.module.css";

function Container({ as: Tag = "div", className = "", children, ...rest }) {
  const combined = className ? `${styles.container} ${className}` : styles.container;
  return (
    <Tag className={combined} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
