import { useState } from 'react';

const grainFilter = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;

const colors = ['#00FF41', '#00D4FF', '#FF0080'];

export default function GalleryCard({ index, label }) {
  const [hovered, setHovered] = useState(false);
  const color = colors[index % 3];
  const fileNum = String(index + 1).padStart(4, '0');

  return (
    <div
      className="relative aspect-square overflow-hidden cursor-default group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Abstract background */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `linear-gradient(${135 + index * 30}deg, rgba(${index % 2 === 0 ? '0,255,65' : '0,212,255'},0.08) 0%, rgba(255,0,128,0.05) 50%, rgba(0,0,0,0.9) 100%)`,
          filter: hovered ? 'brightness(1.5) contrast(1.2)' : 'brightness(0.6) contrast(0.8) grayscale(0.5)',
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: grainFilter, backgroundSize: '128px 128px' }}
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
        }}
      />

      {/* Glitch effect on hover */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 60px ${color}20`,
            borderColor: color,
          }}
        />
      )}

      {/* Border */}
      <div
        className="absolute inset-0 border transition-all duration-300"
        style={{ borderColor: hovered ? `${color}60` : 'rgba(255,255,255,0.04)' }}
      />

      {/* File label - top */}
      <div className="absolute top-3 left-3 z-10">
        <span className="font-mono text-[9px] tracking-[0.2em] text-foreground/20">
          FILE_{fileNum}.jpg
        </span>
      </div>

      {/* Classification label */}
      <div
        className="absolute bottom-3 left-3 right-3 z-10 transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0.3 }}
      >
        <span
          className="font-mono text-[8px] tracking-[0.3em] uppercase px-2 py-1 border"
          style={{
            color: hovered ? color : 'rgba(255,255,255,0.2)',
            borderColor: hovered ? `${color}40` : 'rgba(255,255,255,0.05)',
            backgroundColor: hovered ? `${color}10` : 'transparent',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}