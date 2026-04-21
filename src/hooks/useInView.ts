import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
