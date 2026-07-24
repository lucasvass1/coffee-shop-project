import { AnimatePresence, motion } from "framer-motion";
import Badge from "../../ui/Badge/Badge.jsx";
import { formatPrice } from "../../../utils/formatPrice.js";
import styles from "./MenuSection.module.css";

function MenuTable({ items }) {
  return (
    <div className={styles.table} role="table" aria-label="Itens do cardápio">
      <div className={styles.tableHeaderRow} role="row">
        <span role="columnheader">Item</span>
        <span role="columnheader">Categoria</span>
        <span role="columnheader">Preço</span>
      </div>

      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.id}
            role="row"
            className={styles.tableRow}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <span role="cell" className={styles.itemName}>
              {item.name}
            </span>
            <span role="cell">
              <Badge tone={item.category}>{categoryLabel(item.category)}</Badge>
            </span>
            <span role="cell" className={styles.itemPrice}>
              {formatPrice(item.price)}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>

      {items.length === 0 && (
        <p className={styles.empty}>Nenhum item encontrado nesta categoria.</p>
      )}
    </div>
  );
}

function categoryLabel(category) {
  const labels = {
    warm: "Quente",
    cold: "Gelado",
    snack: "Salgado",
    dessert: "Sobremesa",
  };
  return labels[category] ?? category;
}

export default MenuTable;
