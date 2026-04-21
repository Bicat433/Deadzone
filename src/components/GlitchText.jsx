import { useRef, useEffect, useState } from 'react';

export default function GlitchText({ text, className = '', as: Tag = 'h1', animate = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`relative font-mono ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    >
      {animate && isVisible && (
        <>
          <span
            className="absolute top-0 left-0 w-full h-full"
            style={{
              color: '#00FF41',
              animation: 'glitchClip 3s infinite linear alternate-reverse',
              transform: 'translate(-2px, -2px)',
              opacity: 0.7,
            }}
            aria-hidden="true"
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full"
            style={{
              color: '#FF0080',
              animation: 'glitchClip 2s infinite linear alternate',
              transform: 'translate(2px, 2px)',
              opacity: 0.7,
            }}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
      <span className="relative z-10">{text}</span>
    </Tag>
  );
}