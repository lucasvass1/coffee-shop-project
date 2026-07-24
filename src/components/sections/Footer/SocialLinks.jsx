import { socialLinks } from "../../../data/footerLinks.js";
import styles from "./Footer.module.css";

function SocialLinks() {
  return (
    <div className={styles.social}>
      {socialLinks.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.label}>
          <img src={link.icon} alt="" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
