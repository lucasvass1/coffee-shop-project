import { CATEGORY_ORDER, CATEGORY_LABELS } from "../../../constants/categories.js";
import styles from "./MenuSection.module.css";

function MenuFilterBar({ activeCategory, onChange }) {
  return (
    <div className={styles.filterBar} role="group" aria-label="Filtrar cardápio por categoria">
      {CATEGORY_ORDER.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            className={`${styles.filterButton} ${isActive ? styles.filterButtonActive : ""}`}
            aria-pressed={isActive}
            onClick={() => onChange(category)}
          >
            {CATEGORY_LABELS[category]}
          </button>
        );
      })}
    </div>
  );
}

export default MenuFilterBar;
