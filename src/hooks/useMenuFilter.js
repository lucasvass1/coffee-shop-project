import { useMemo, useState } from "react";
import { CATEGORIES } from "../constants/categories.js";

export function useMenuFilter(items) {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL);

  const filteredItems = useMemo(() => {
    if (activeCategory === CATEGORIES.ALL) return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return { activeCategory, setActiveCategory, filteredItems };
}
