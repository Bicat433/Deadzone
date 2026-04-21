import { Smartphone, Camera, Map } from 'lucide-react';
import GlitchText from '../components/GlitchText';
import ScrollReveal from '../components/ScrollReveal';
import StepCard from '../components/StepCard';
import SurvivalItem from '../components/SurvivalItem';

const steps = [
  {
    number: '01',
    title: 'Surrender Your Device',
    description: 'At the entrance, you hand over your phone. It\'s locked in a secure vault. No exceptions. No smartwatches either.',
  },
  {
    number: '02',
    title: 'Receive Your Kit',
    description: 'In exchange, you receive a DEAD ZONE Survival Kit — everything you need to navigate, capture memories, and stay connected the analog way.',
  },
  {
    number: '03',
    title: 'Enter The Zone',
    description: 'Step through the threshold. From this point forward, you exist only in the present tense. No notifications. No distractions. Just reality.',
  },
];

const survivalItems = [
  {
    icon: Smartphone,
    title: 'The Pager',
    description: 'A retro pager for emergency-only communication. If the real world needs you, we\'ll find you.',
  },
  {
    icon: Camera,
    title: 'Disposable Camera',
    description: '27 exposures. No filters, no retakes, no preview. Every shot is a commitment.',
  },
  {
    icon: Map,
    title: 'Printed Map',
    description: 'A hand-illustrated map of the venue. Navigate by instinct and landmarks, not GPS.',
  },
];

export default function TradeIn() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <section className="py-24 sm:py-32 px-4 text-center">
        <ScrollReveal>
          <p className="font-mono text-[10px] tracking-[0.5em] text-neon-magenta/40 uppercase mb-6">
            /// PROTOCOL ///
          </p>
        </ScrollReveal>
        <GlitchText
          text="THE TRADE-IN"
          as="h1"
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-[0.05em]"
        />
        <ScrollReveal delay={300}>
          <p className="font-sans text-sm sm:text-base text-foreground/40 mt-6 max-w-lg mx-auto">
            Your phone is the price of admission. Here's what happens when you let go.
          </p>
        </ScrollReveal>
      </section>

      {/* Steps */}
      <section className="px-4 pb-20">
        <div className="max-w-xl mx-auto">
          {steps.map((step, i) => (
            <StepCard
              key={i}
              {...step}
              delay={i * 200}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Survival Kit */}
      <section className="px-4 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-mono text-[10px] tracking-[0.5em] text-neon-cyan/40 uppercase mb-4">
                /// ISSUED EQUIPMENT ///
              </p>
              <h2 className="font-mono text-xl sm:text-2xl tracking-[0.1em] text-foreground/80">
                SURVIVAL KIT
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {survivalItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <SurvivalItem {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}