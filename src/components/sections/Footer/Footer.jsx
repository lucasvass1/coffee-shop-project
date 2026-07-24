import Container from "../../ui/Container/Container.jsx";
import FooterLinksColumn from "./FooterLinksColumn.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { aboutLinks, companyLinks } from "../../../data/footerLinks.js";
import footerBg from "../../../assets/images/backgrounds/footer-bg.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer
      id="contato"
      className={styles.footer}
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <Container className={styles.grid}>
        <div className={styles.brandColumn}>
          <h3 className={styles.logo}>Bean Scene</h3>
          <p className={styles.about}>
            Cafeteria de especialidade com torra artesanal e grãos
            selecionados de pequenos produtores. Um espaço para começar o dia
            com calma ou fazer dele um momento especial.
          </p>
          <SocialLinks />
        </div>

        <FooterLinksColumn title="Sobre" links={aboutLinks} />
        <FooterLinksColumn title="Empresa" links={companyLinks} />

        <div>
          <h3 className={styles.title}>Contato</h3>
          <address className={styles.address}>
            Rua dos Grãos, 123 — Vila Madalena
            <br />
            São Paulo, SP — 05435-000
            <br />
            (11) 4002-8922
            <br />
            <a href="mailto:contato@beanscene.com.br">contato@beanscene.com.br</a>
            <br />
            <a href="https://www.beanscene.com.br">www.beanscene.com.br</a>
          </address>
        </div>
      </Container>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} Bean Scene. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
