import { motion } from "framer-motion";
import Container from "../../ui/Container/Container.jsx";
import Input from "../../ui/Input/Input.jsx";
import Button from "../../ui/Button/Button.jsx";
import { useNewsletterSubscription } from "../../../hooks/useNewsletterSubscription.js";
import newsletterBg from "../../../assets/images/backgrounds/newsletter-bg.png";
import cupImage from "../../../assets/images/decorativos/xicara-newsletter.png";
import styles from "./Newsletter.module.css";

const STATUS_MESSAGE = {
  subscribed: { text: "Inscrição realizada com sucesso!", tone: "success" },
  unsubscribed: { text: "Você cancelou sua inscrição.", tone: "muted" },
  invalid: { text: "E-mail inválido. Digite um endereço válido.", tone: "error" },
  idle: null,
};

function Newsletter() {
  const { email, setEmail, status, subscribe, unsubscribe } = useNewsletterSubscription();
  const message = STATUS_MESSAGE[status];
  const isSubscribed = status === "subscribed";

  return (
    <section
      className={styles.newsletter}
      style={{ backgroundImage: `url(${newsletterBg})` }}
    >
      <Container className={styles.wrapper}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2>Assine e receba nossas ofertas!</h2>
          <p>
            Não perca nossas novidades, atualizações, dicas e ofertas
            especiais direto no seu e-mail.
          </p>

          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              subscribe();
            }}
          >
            <Input
              type="email"
              value={email}
              disabled={isSubscribed}
              placeholder="Digite seu e-mail"
              aria-label="Endereço de e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            {isSubscribed ? (
              <Button type="button" onClick={unsubscribe}>
                Cancelar inscrição
              </Button>
            ) : (
              <Button type="submit">Inscrever-se</Button>
            )}
          </form>

          {message && (
            <p className={`${styles.message} ${styles[message.tone]}`} role="status">
              {message.text}
            </p>
          )}
        </motion.div>

        <img src={cupImage} alt="" className={styles.cupImage} />
      </Container>
    </section>
  );
}

export default Newsletter;
