import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span className="font-mono text-[10px] tracking-[0.3em] text-neon-green/50 uppercase">
        Scroll
      </span>
      <ChevronDown size={16} className="text-neon-green/50" />
    </div>
  );
}