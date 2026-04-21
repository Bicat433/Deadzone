import { Gamepad2, Target, Paintbrush, Coffee } from 'lucide-react';
import GlitchText from '../components/GlitchText';
import ScrollReveal from '../components/ScrollReveal';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
  {
    icon: Gamepad2,
    title: 'The Arcade',
    description: 'Rows of vintage arcade machines, pinball tables, and competitive gaming - the way it was meant to be. Shoulder to shoulder, not screen to screen.',
    color: 'green',
  },
  {
    icon: Target,
    title: 'Bowling Alley',
    description: 'Neon-lit lanes, cold drinks, and the satisfying crash of pins. No scoreboards on your phone - we do it old school.',
    color: 'cyan',
  },
  {
    icon: Paintbrush,
    title: 'Graffiti Wall',
    description: 'A living canvas that evolves every night. Grab a can and leave your mark. No filters, no uploads - just pure expression.',
    color: 'magenta',
  },
  {
    icon: Coffee,
    title: 'Retro Diner',
    description: 'Milkshakes, burgers, and vinyl booths. A space designed for conversation, not content creation. Eat without photographing it.',
    color: 'green',
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <section className="py-24 sm:py-32 px-4 text-center">
        <ScrollReveal>
          <p className="font-mono text-[10px] tracking-[0.5em] text-neon-cyan/40 uppercase mb-6">
            /// SECTOR MAP ///
          </p>
        </ScrollReveal>
        <GlitchText
          text="THE EXPERIENCE"
          as="h1"
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-[0.05em]"
        />
        <ScrollReveal delay={300}>
          <p className="font-sans text-sm sm:text-base text-foreground/40 mt-6 max-w-lg mx-auto">
            Four zones. Zero screens. Every corner designed to pull you back into the real world.
          </p>
        </ScrollReveal>
      </section>

      {/* Cards Grid */}
      <section className="px-4 pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <ExperienceCard {...exp} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom divider */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
        <p className="font-mono text-[9px] tracking-[0.5em] text-foreground/10 text-center mt-6 uppercase">
          ALL ZONES OPERATIONAL
        </p>
      </div>
    </div>
  );
}