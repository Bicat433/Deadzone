import GlitchText from '../components/GlitchText';
import ScrollReveal from '../components/ScrollReveal';
import StatCounter from '../components/StatCounter';

const comparisons = [
  { old: 'Endless scrolling', dead: 'Real conversations' },
  { old: 'Blue light insomnia', dead: 'Analog adventures' },
  { old: 'Digital dopamine', dead: 'Physical thrills' },
  { old: 'Algorithm-fed reality', dead: 'Unfiltered experience' },
];

export default function Concept() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Stats Section */}
      <section className="py-24 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[10px] tracking-[0.5em] text-neon-green/40 text-center uppercase mb-16">
              /// THE PROBLEM ///
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <StatCounter value={6} suffix="hrs" label="Avg daily screen time" delay={0} />
            <StatCounter value={96} suffix="x" label="Phone checks per day" delay={200} />
            <StatCounter value={11} suffix="yrs" label="Lifetime on screens" delay={400} />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-foreground/60 leading-relaxed text-center">
              We've become <span className="text-neon-magenta font-medium">prisoners of the screen</span>. 
              Every notification, every scroll, every swipe pulls us further from the 
              <span className="text-neon-green font-medium"> tangible world</span>. 
              We forgot what it feels like to be completely, unapologetically present.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DEAD ZONE Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="border border-neon-green/20 p-8 sm:p-12 md:p-16 relative">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green" />

              <p className="font-mono text-[10px] tracking-[0.5em] text-neon-green/60 uppercase mb-6">
                CLASSIFIED // BRIEFING
              </p>
              <GlitchText
                text="DEAD ZONE"
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
              />
              <p className="font-sans text-base sm:text-lg text-foreground/50 leading-relaxed max-w-2xl">
                An underground venue where your phone doesn't exist. Trade your device at the door 
                and step into a world of arcade games, bowling lanes, graffiti walls, and a retro diner. 
                No Wi-Fi. No cameras. No digital traces. Just raw, unfiltered human connection.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4 sm:gap-0">
              <div className="text-right pr-4 sm:pr-8 border-r border-foreground/10">
                <p className="font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase mb-8">
                  The Old World
                </p>
              </div>
              <div className="pl-4 sm:pl-8">
                <p className="font-mono text-[10px] tracking-[0.3em] text-neon-green/60 uppercase mb-8">
                  Dead Zone
                </p>
              </div>
            </div>
          </ScrollReveal>

          {comparisons.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="grid grid-cols-2 gap-4 sm:gap-0 py-4 border-b border-foreground/5">
                <div className="text-right pr-4 sm:pr-8 border-r border-foreground/10">
                  <p className="font-sans text-sm sm:text-base text-foreground/30 line-through decoration-neon-magenta/40">
                    {item.old}
                  </p>
                </div>
                <div className="pl-4 sm:pl-8">
                  <p className="font-sans text-sm sm:text-base text-neon-green/80">
                    {item.dead}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom signal */}
      <div className="text-center pb-16">
        <p className="font-mono text-[9px] tracking-[0.5em] text-foreground/10 uppercase">
          — END TRANSMISSION —
        </p>
      </div>
    </div>
  );
}