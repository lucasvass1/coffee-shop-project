import Container from "../../ui/Container/Container.jsx";
import SectionHeading from "../../ui/SectionHeading/SectionHeading.jsx";
import MenuFilterBar from "./MenuFilterBar.jsx";
import MenuTable from "./MenuTable.jsx";
import { useMenuFilter } from "../../../hooks/useMenuFilter.js";
import menuItems from "../../../data/menu.json";
import styles from "./MenuSection.module.css";

function MenuSection() {
  const { activeCategory, setActiveCategory, filteredItems } = useMenuFilter(menuItems);

  return (
    <section id="menu" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Cardápio completo"
          title="Explore todo o nosso menu"
          description="Filtre por categoria e encontre exatamente o que combina com o seu momento."
        />
        <MenuFilterBar activeCategory={activeCategory} onChange={setActiveCategory} />
        <MenuTable items={filteredItems} />
      </Container>
    </section>
  );
}

export default MenuSection;
