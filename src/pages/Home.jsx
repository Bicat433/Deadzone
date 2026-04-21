import { useState, useEffect } from 'react';
import GlitchText from '../components/GlitchText';
import NeonButton from '../components/NeonButton';
import ScrollIndicator from '../components/ScrollIndicator';

export default function Home() {
  const [showTagline, setShowTagline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTagline(true), 1200);
    const t2 = setTimeout(() => setShowButtons(true), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Noise background */}
      <div className="noise-bg absolute inset-0" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.05)_0%,transparent_70%)]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Pre-text */}
        <p
          className="font-mono text-[10px] tracking-[0.5em] text-neon-green/40 uppercase mb-8"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
          }}
        >
          /// SIGNAL DETECTED ///
        </p>

        {/* Main heading */}
        <GlitchText
          text="DEAD ZONE"
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-[0.1em]"
        />

        {/* Tagline */}
        <p
          className="font-sans text-sm sm:text-base md:text-lg text-foreground/50 mt-6 tracking-[0.15em] max-w-lg mx-auto"
          style={{
            opacity: showTagline ? 1 : 0,
            transform: showTagline ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease',
          }}
        >
          No Signal. No Screens. Just Reality.
        </p>

        {/* Decorative line */}
        <div
          className="w-px h-12 bg-gradient-to-b from-transparent via-neon-green/30 to-transparent mx-auto mt-8"
          style={{
            opacity: showTagline ? 1 : 0,
            transition: 'opacity 1s ease 0.3s',
          }}
        />

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          style={{
            opacity: showButtons ? 1 : 0,
            transform: showButtons ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease',
          }}
        >
          <NeonButton to="/experience" variant="green">
            Enter
          </NeonButton>
          <NeonButton to="/access" variant="cyan">
            Request Access
          </NeonButton>
        </div>

        {/* Coordinates */}
        <p
          className="font-mono text-[9px] tracking-[0.4em] text-foreground/15 mt-16"
          style={{
            opacity: showButtons ? 1 : 0,
            transition: 'opacity 2s ease',
          }}
        >
          LAT 40.7128° N — LONG 74.0060° W — FREQ 000.00 MHz
        </p>
      </div>

      <ScrollIndicator />
    </div>
  );
}