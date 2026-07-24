import { motion } from "framer-motion";
import Card from "../../ui/Card/Card.jsx";
import Button from "../../ui/Button/Button.jsx";
import { formatPrice } from "../../../utils/formatPrice.js";
import cappuccino from "../../../assets/images/produtos/cappuccino.png";
import chaiLatte from "../../../assets/images/produtos/chai-latte.png";
import macchiato from "../../../assets/images/produtos/macchiato.png";
import espresso from "../../../assets/images/produtos/espresso.png";
import styles from "./FeaturedDrinks.module.css";

const IMAGES = {
  cappuccino,
  "chai-latte": chaiLatte,
  macchiato,
  espresso,
};

function DrinkCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className={styles.card}>
        <img src={IMAGES[product.image]} alt={product.name} className={styles.image} />
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.composition}>{product.composition}</p>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <Button variant="ghost" className={styles.button}>
          Peça agora
        </Button>
      </Card>
    </motion.div>
  );
}

export default DrinkCard;
