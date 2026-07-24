import SectionHeading from "../../ui/SectionHeading/SectionHeading.jsx";
import Container from "../../ui/Container/Container.jsx";
import DrinkCard from "./DrinkCard.jsx";
import products from "../../../data/products.json";
import styles from "./FeaturedDrinks.module.css";

function FeaturedDrinks() {
  return (
    <section id="destaques" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Selecionados para você"
          title="Destaques do nosso cardápio"
          description="Uma nova mistura de sabores para explorar — sempre tem algo novo para experimentar."
        />
        <div className={styles.grid}>
          {products.map((product, index) => (
            <DrinkCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedDrinks;
