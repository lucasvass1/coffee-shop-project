import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../../ui/Container/Container.jsx";
import Button from "../../ui/Button/Button.jsx";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa história", href: "#sobre" },
  { label: "Cardápio", href: "#menu" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container className={styles.inner}>
        <a href="#inicio" className={styles.logo} aria-label="Bean Scene — página inicial">
          Bean Scene
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Button as="a" href="#menu" className={styles.cta}>
          Peça agora
        </Button>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.mobileNav}
            aria-label="Navegação mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button as="a" href="#menu" onClick={() => setMenuOpen(false)}>
              Peça agora
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
