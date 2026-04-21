import GlitchText from '../components/GlitchText';
import ScrollReveal from '../components/ScrollReveal';
import GalleryCard from '../components/GalleryCard';

const galleryItems = [
  { label: 'UNAUTHORIZED LEAK' },
  { label: 'CLASSIFIED' },
  { label: 'REDACTED' },
  { label: 'CORRUPTED FILE' },
  { label: 'SURVEILLANCE FEED' },
  { label: 'UNAUTHORIZED LEAK' },
  { label: 'SIGNAL INTERCEPT' },
  { label: 'RECOVERED DATA' },
  { label: 'CLASSIFIED' },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <section className="py-24 sm:py-32 px-4 text-center">
        <ScrollReveal>
          <div className="inline-block border border-neon-magenta/20 px-4 py-1 mb-6">
            <p className="font-mono text-[10px] tracking-[0.3em] text-neon-magenta/60 uppercase">
              CLASSIFIED / LEAKED FOOTAGE
            </p>
          </div>
        </ScrollReveal>
        <GlitchText
          text="THE GALLERY"
          as="h1"
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-[0.05em]"
        />
        <ScrollReveal delay={300}>
          <p className="font-sans text-sm text-foreground/30 mt-6 max-w-md mx-auto">
            These files were never meant to be seen. Recovered from corrupted drives 
            and unauthorized surveillance feeds within the zone.
          </p>
        </ScrollReveal>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <GalleryCard index={i} label={item.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Warning */}
        <ScrollReveal delay={400}>
          <div className="max-w-5xl mx-auto mt-8 text-center">
            <p className="font-mono text-[9px] tracking-[0.4em] text-neon-magenta/30 uppercase">
              ⚠ UNAUTHORIZED DISTRIBUTION OF THESE FILES IS A VIOLATION OF DEAD ZONE PROTOCOL ⚠
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}