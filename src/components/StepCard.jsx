import ScrollReveal from './ScrollReveal';

export default function StepCard({ number, title, description, delay = 0, isLast = false }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative flex gap-6">
        {/* Step number + line */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border border-neon-green/40 flex items-center justify-center font-mono text-sm text-neon-green flex-shrink-0">
            {number}
          </div>
          {!isLast && (
            <div className="w-px flex-1 bg-gradient-to-b from-neon-green/30 to-transparent min-h-[60px]" />
          )}
        </div>

        {/* Content */}
        <div className="pb-10">
          <h3 className="font-mono text-sm tracking-[0.2em] uppercase text-foreground/80 mb-2">
            {title}
          </h3>
          <p className="font-sans text-sm text-foreground/40 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}