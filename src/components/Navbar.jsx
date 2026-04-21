import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: '01. HOME' },
  { path: '/concept', label: '02. CONCEPT' },
  { path: '/experience', label: '03. EXPERIENCE' },
  { path: '/trade-in', label: '04. TRADE-IN' },
  { path: '/access', label: '05. ACCESS' },
  { path: '/gallery', label: '06. GALLERY' },
  { path: '/contact', label: '07. CONTACT' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-neon-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-mono text-neon-green text-lg tracking-[0.4em] hover:text-neon-cyan transition-colors duration-300">
            DEAD ZONE
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  font-mono text-[10px] tracking-[0.2em] px-3 py-2
                  transition-all duration-300 relative group
                  ${location.pathname === item.path
                    ? 'text-neon-green'
                    : 'text-foreground/40 hover:text-neon-green'
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {/* Glitch hover effect */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                  style={{
                    textShadow: '1px 0 #FF0080, -1px 0 #00D4FF',
                  }}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-neon-green p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-bg/98 backdrop-blur-xl border-b border-neon-green/10">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  block font-mono text-xs tracking-[0.3em] px-4 py-3
                  transition-all duration-300 border-l-2
                  ${location.pathname === item.path
                    ? 'text-neon-green border-neon-green'
                    : 'text-foreground/40 border-transparent hover:text-neon-green hover:border-neon-green/50'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}