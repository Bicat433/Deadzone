import { useState } from 'react';

export default function SurvivalItem({ icon: Icon, title, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-6 bg-dark-surface border border-foreground/5 text-center transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? '#00D4FF' : undefined,
        boxShadow: hovered ? '0 0 30px rgba(0,212,255,0.1)' : 'none',
      }}
    >
      <div
        className="w-14 h-14 mx-auto mb-4 border flex items-center justify-center transition-all duration-500"
        style={{
          borderColor: hovered ? '#00D4FF' : 'rgba(255,255,255,0.08)',
          color: hovered ? '#00D4FF' : 'rgba(255,255,255,0.3)',
        }}
      >
        <Icon size={24} />
      </div>
      <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/80 mb-2">{title}</h4>
      <p className="font-sans text-xs text-foreground/35 leading-relaxed">{description}</p>
    </div>
  );
}