import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMenu, LuX } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/', hash: '#contact' },
];

function NavLink({ link, active, onClick }) {
  return (
    <span className="relative group">
      <Link
        to={link.hash ? '/#contact' : link.path}
        onClick={onClick}
        style={{
          color: active ? 'var(--gold)' : 'var(--text-muted)',
          transition: 'color 0.2s ease',
          fontSize: '0.875rem',
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}
        onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--gold)'; }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-muted)'; }}
      >
        {link.label}
      </Link>
      {/* gold underline reveal */}
      <span
        className="absolute left-0 -bottom-0.5 h-px w-full origin-left"
        style={{
          backgroundColor: 'var(--gold)',
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.25s ease',
        }}
      />
    </span>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (link) => {
    if (link.hash) return false;
    return location.pathname === link.path;
  };

  const handleContactClick = () => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <span style={{
            fontFamily: 'Georgia, serif',
            color: 'var(--gold)',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            fontSize: '1.25rem',
          }}>
            Rohit
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                link={link}
                active={isActive(link)}
                onClick={link.hash ? handleContactClick : undefined}
              />
            </li>
          ))}
        </ul>

        {/* Resume button (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://assets.rajrohit.tech/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm px-4 py-1.5 text-sm font-medium transition-all duration-200"
            style={{
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          style={{ color: 'var(--gold)' }}
        >
          {mobileOpen ? <LuX size={26} /> : <LuMenu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden"
            style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => {
                const active = isActive(link);
                return (
                  <li key={link.label}>
                    <Link
                      to={link.hash ? '/#contact' : link.path}
                      onClick={link.hash ? handleContactClick : () => setMobileOpen(false)}
                      className="block rounded px-4 py-3 text-base font-medium transition-colors duration-200"
                      style={{
                        color: active ? 'var(--gold)' : 'var(--text-muted)',
                        backgroundColor: active ? 'var(--gold-glow)' : 'transparent',
                      }}
                      onMouseEnter={e => {
                        if (!active) {
                          e.currentTarget.style.color = 'var(--gold)';
                          e.currentTarget.style.backgroundColor = 'var(--gold-glow)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!active) {
                          e.currentTarget.style.color = 'var(--text-muted)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 mt-2" style={{ borderTop: '1px solid var(--border)' }}>
                <a
                  href="https://assets.rajrohit.tech/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-sm px-5 py-3 text-sm font-medium transition-all duration-200"
                  style={{
                    border: '1px solid var(--gold)',
                    color: 'var(--gold)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-glow)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
