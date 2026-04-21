import { useState } from 'react';
import GlitchText from '../components/GlitchText';
import ScrollReveal from '../components/ScrollReveal';

export default function Access() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    party: '',
    reason: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <section className="py-24 sm:py-32 px-4 text-center">
        <ScrollReveal>
          <p className="font-mono text-[10px] tracking-[0.5em] text-neon-magenta/40 uppercase mb-6">
            /// RESTRICTED ///
          </p>
        </ScrollReveal>
        <GlitchText
          text="LIMITED ENTRY"
          as="h1"
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-[0.05em]"
        />
        <ScrollReveal delay={300}>
          <p className="font-mono text-xs text-neon-magenta/60 mt-4 tracking-[0.2em]">
            INVITE ONLY — CLEARANCE REQUIRED
          </p>
        </ScrollReveal>
      </section>

      {/* Terminal Form */}
      <section className="px-4 pb-24 sm:pb-32">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="border border-foreground/10 bg-dark-surface overflow-hidden">
              {/* Terminal header */}
              <div className="px-4 py-2 border-b border-foreground/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-magenta/60" />
                <div className="w-2 h-2 rounded-full bg-neon-green/40" />
                <div className="w-2 h-2 rounded-full bg-neon-cyan/40" />
                <span className="font-mono text-[10px] text-foreground/20 ml-2 tracking-wider">
                  DEADZONE://ACCESS_REQUEST
                </span>
              </div>

              <div className="p-6 sm:p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="font-mono text-[10px] text-neon-green/50 mb-6">
                      <span style={{ animation: 'terminalBlink 1s infinite' }}>█</span>
                      {' '}INITIALIZE ACCESS REQUEST PROTOCOL...
                    </div>

                    <TerminalInput
                      label="DESIGNATION"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(v) => handleChange('name', v)}
                    />
                    <TerminalInput
                      label="COMM CHANNEL"
                      placeholder="your@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(v) => handleChange('email', v)}
                    />
                    <TerminalInput
                      label="PREFERRED DATE"
                      placeholder="MM/DD/YYYY"
                      value={formData.date}
                      onChange={(v) => handleChange('date', v)}
                    />
                    <TerminalInput
                      label="PARTY SIZE"
                      placeholder="Number of operatives"
                      type="number"
                      value={formData.party}
                      onChange={(v) => handleChange('party', v)}
                    />

                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase mb-2">
                        {'>'} WHY DO YOU DESERVE ACCESS?
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-dark-bg border border-foreground/10 px-4 py-3 font-mono text-sm text-neon-green focus:border-neon-green/50 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all duration-300 resize-none placeholder:text-foreground/15"
                        placeholder="State your case..."
                        value={formData.reason}
                        onChange={(e) => handleChange('reason', e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full font-mono text-sm tracking-[0.3em] uppercase py-3 border border-neon-green/40 text-neon-green hover:bg-neon-green/10 hover:border-neon-green hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300"
                    >
                      SUBMIT REQUEST
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div
                      className="font-mono text-lg sm:text-xl text-neon-green tracking-[0.2em] mb-4"
                      style={{ animation: 'flicker 3s infinite' }}
                    >
                      ACCESS PENDING...
                    </div>
                    <p className="font-mono text-[10px] text-foreground/30 tracking-[0.2em]">
                      YOUR REQUEST HAS BEEN LOGGED.
                    </p>
                    <p className="font-mono text-[10px] text-foreground/20 tracking-[0.2em] mt-2">
                      ESTIMATED CLEARANCE TIME: ██:██:██
                    </p>
                    <div className="mt-8 font-mono text-xs text-neon-magenta/50">
                      DO NOT ATTEMPT TO CONTACT US.
                      <br />
                      WE WILL FIND YOU.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Countdown Timer */}
          <ScrollReveal delay={300}>
            <div className="mt-8 text-center">
              <p className="font-mono text-[10px] tracking-[0.3em] text-foreground/20 uppercase mb-3">
                NEXT AVAILABLE ENTRY WINDOW
              </p>
              <div className="flex justify-center gap-4">
                {['14', '08', '33', '07'].map((val, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="font-mono text-2xl sm:text-3xl text-neon-cyan/70"
                      style={{ animation: 'terminalBlink 2s infinite', animationDelay: `${i * 0.3}s` }}
                    >
                      {val}
                    </div>
                    <div className="font-mono text-[8px] tracking-[0.2em] text-foreground/20 uppercase mt-1">
                      {['Days', 'Hours', 'Mins', 'Secs'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function TerminalInput({ label, placeholder, type = 'text', value, onChange }) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase mb-2">
        {'>'} {label}
      </label>
      <input
        type={type}
        className="w-full bg-dark-bg border border-foreground/10 px-4 py-3 font-mono text-sm text-neon-green focus:border-neon-green/50 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all duration-300 placeholder:text-foreground/15"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}