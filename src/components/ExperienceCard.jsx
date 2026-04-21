import { useState } from 'react';

export default function ExperienceCard({ icon: Icon, title, description, color = 'green', index }) {
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    green: { border: '#00FF41', glow: 'rgba(0,255,65,0.15)', text: '#00FF41' },
    cyan: { border: '#00D4FF', glow: 'rgba(0,212,255,0.15)', text: '#00D4FF' },
    magenta: { border: '#FF0080', glow: 'rgba(255,0,128,0.15)', text: '#FF0080' },
  };

  const c = colorMap[color] || colorMap.green;

  return (
    <div
      className="relative p-6 sm:p-8 bg-dark-surface border border-foreground/5 transition-all duration-500 cursor-default group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? c.border : undefined,
        boxShadow: isHovered ? `inset 0 0 30px ${c.glow}, 0 0 20px ${c.glow}` : 'none',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Index */}
      <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/15 absolute top-4 right-4">
        0{index + 1}
      </span>

      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center mb-6 border transition-all duration-500"
        style={{
          borderColor: isHovered ? c.border : 'rgba(255,255,255,0.08)',
          color: isHovered ? c.text : 'rgba(255,255,255,0.3)',
        }}
      >
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3
        className="font-mono text-sm tracking-[0.2em] uppercase mb-3 transition-colors duration-500"
        style={{ color: isHovered ? c.text : 'rgba(255,255,255,0.8)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-foreground/40 leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-px transition-all duration-500"
        style={{
          width: isHovered ? '100%' : '0%',
          backgroundColor: c.border,
        }}
      />
    </div>
  );
}