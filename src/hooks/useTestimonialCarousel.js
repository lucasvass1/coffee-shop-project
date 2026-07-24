import { useCallback, useState } from "react";

export function useTestimonialCarousel(items) {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  return { activeIndex: index, activeItem: items[index], goNext, goPrev, setIndex };
}
