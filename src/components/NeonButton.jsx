import { Link } from 'react-router-dom';

export default function NeonButton({ children, to, onClick, variant = 'green', className = '' }) {
  const colors = {
    green: {
      border: 'border-neon-green',
      text: 'text-neon-green',
      shadow: 'hover:shadow-[0_0_20px_rgba(0,255,65,0.4),0_0_40px_rgba(0,255,65,0.2)]',
      bg: 'hover:bg-neon-green/10',
    },
    cyan: {
      border: 'border-neon-cyan',
      text: 'text-neon-cyan',
      shadow: 'hover:shadow-[0_0_20px_rgba(0,212,255,0.4),0_0_40px_rgba(0,212,255,0.2)]',
      bg: 'hover:bg-neon-cyan/10',
    },
    magenta: {
      border: 'border-neon-magenta',
      text: 'text-neon-magenta',
      shadow: 'hover:shadow-[0_0_20px_rgba(255,0,128,0.4),0_0_40px_rgba(255,0,128,0.2)]',
      bg: 'hover:bg-neon-magenta/10',
    },
  };

  const c = colors[variant];
  const baseClasses = `
    inline-block font-mono text-sm tracking-[0.3em] uppercase px-8 py-3
    border ${c.border} ${c.text}
    ${c.shadow} ${c.bg}
    transition-all duration-300 ease-out
    relative overflow-hidden
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}