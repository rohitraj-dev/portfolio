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

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (link) => {
    if (link.hash) return false;
    return location.pathname === link.path;
  };

  const handleContactClick = () => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-2xl text-cyan-400 font-[Space_Grotesk] drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-opacity hover:opacity-80"
        >
          RR
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link);

            if (link.hash) {
              return (
                <li key={link.label}>
                  <Link
                    to="/#contact"
                    onClick={handleContactClick}
                    className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    active
                      ? 'text-cyan-400 underline underline-offset-4 decoration-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://assets.rajrohit.tech/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition-all text-sm font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-1.5 text-cyan-400"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden bg-black/95 backdrop-blur-lg border-t border-cyan-400/20"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => {
                const active = isActive(link);

                if (link.hash) {
                  return (
                    <li key={link.label}>
                      <Link
                        to="/#contact"
                        onClick={handleContactClick}
                        className="block rounded-md px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-md px-4 py-3 text-base font-medium transition-colors duration-300 ${
                        active
                          ? 'bg-cyan-400/10 text-cyan-400'
                          : 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 mt-2 border-t border-white/5">
                <a
                  href="https://assets.rajrohit.tech/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-md border border-cyan-400 px-5 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
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
