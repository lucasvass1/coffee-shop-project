import styles from "./Footer.module.css";

function FooterLinksColumn({ title, links }) {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinksColumn;
