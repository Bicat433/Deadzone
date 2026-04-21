import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [signalLost, setSignalLost] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSignalLost(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { label: 'FREQ_01', value: '40.7128° N, 74.0060° W' },
    { label: 'FREQ_02', value: 'CH-4 // 162.550 MHz' },
    { label: 'FREQ_03', value: 'BAND-X // 000.NULL' },
  ];

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl w-full text-center">
          {/* Opening line */}
          <ScrollReveal>
            <p
              className="font-mono text-lg sm:text-xl md:text-2xl text-foreground/20 tracking-[0.05em] leading-relaxed"
              style={{ animation: 'signalLost 5s infinite' }}
            >
              You were not supposed to find this.
            </p>
          </ScrollReveal>

          {/* Spacer */}
          <div className="h-16 sm:h-24" />

          {/* Signal lost */}
          <ScrollReveal delay={600}>
            <p
              className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em]"
              style={{
                color: signalLost ? '#FF0080' : 'rgba(255,255,255,0.5)',
                textShadow: signalLost ? '0 0 20px rgba(255,0,128,0.3)' : 'none',
                transition: 'all 2s ease',
              }}
            >
              Signal Lost.
            </p>
          </ScrollReveal>

          {/* Spacer */}
          <div className="h-16 sm:h-24" />

          {/* Contact email */}
          <ScrollReveal delay={1200}>
            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] text-foreground/15 uppercase mb-4">
                DEAD CHANNEL
              </p>
              <p className="font-mono text-sm sm:text-base text-foreground/30 tracking-wider">
                <span className="text-foreground/10">c</span>
                <span>ontact</span>
                <span className="text-neon-green/30">@</span>
                <span className="text-foreground/10">d</span>
                <span>ead</span>
                <span className="text-foreground/10">z</span>
                <span>one</span>
                <span className="text-foreground/10">.</span>
                <span className="text-foreground/10">███</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Spacer */}
          <div className="h-16 sm:h-20" />

          {/* Social/coordinate links */}
          <ScrollReveal delay={1800}>
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
              {socialLinks.map((link, i) => (
                <div key={i} className="text-center">
                  <p className="font-mono text-[9px] tracking-[0.3em] text-foreground/10 uppercase mb-1">
                    {link.label}
                  </p>
                  <p className="font-mono text-[11px] text-foreground/20 tracking-wider">
                    {link.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 pb-8">
        {/* Full-width line */}
        <div
          className="h-px w-full mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,0,128,0.3) 20%, rgba(0,255,65,0.3) 50%, rgba(0,212,255,0.3) 80%, transparent)',
          }}
        />

        {/* Glitch fade out effect */}
        <div className="text-center">
          <p
            className="font-mono text-[9px] tracking-[0.5em] text-foreground/10 uppercase"
            style={{ animation: 'flicker 4s infinite' }}
          >
            DEAD ZONE — ALL FREQUENCIES JAMMED
          </p>
          <p className="font-mono text-[8px] tracking-[0.3em] text-foreground/5 mt-2">
            © {new Date().getFullYear()} // SIGNAL TERMINATED
          </p>
        </div>
      </footer>
    </div>
  );
}