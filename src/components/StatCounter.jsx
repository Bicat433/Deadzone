import { useRef, useEffect, useState } from 'react';

export default function StatCounter({ value, suffix = '', label, delay = 0 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-neon-green mb-2">
        {count}{suffix}
      </div>
      <div className="font-mono text-[10px] tracking-[0.3em] text-foreground/40 uppercase">
        {label}
      </div>
    </div>
  );
}