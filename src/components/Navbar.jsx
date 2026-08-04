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
      className="sticky top-0 z-50 w-full bg-[#212529] border-b border-[#495057]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <span style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold tracking-widest text-[#c9a84c]">Rohit</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link);
            if (link.hash) {
              return (
                <li key={link.label}>
                  <Link
                    to="/#contact"
                    onClick={handleContactClick}
                    className="text-sm font-medium text-[#adb5bd] hover:text-[#5b8fa8] transition-colors duration-300"
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
                      ? 'text-[#5b8fa8] border-b-2 border-[#5b8fa8] pb-1'
                      : 'text-[#adb5bd] hover:text-[#5b8fa8]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://assets.rajrohit.tech/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#5b8fa8] text-[#5b8fa8] px-4 py-2 rounded-lg hover:bg-[#5b8fa8] hover:text-[#212529] transition-all text-sm font-semibold"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-[#5b8fa8]"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden bg-[#212529] border-t border-[#495057]"
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
                        className="block rounded-md px-4 py-3 text-base font-medium text-[#adb5bd] hover:bg-[#343a40] hover:text-[#5b8fa8] transition-colors duration-300"
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
                          ? 'bg-[#5b8fa8]/10 text-[#5b8fa8]'
                          : 'text-[#adb5bd] hover:bg-[#343a40] hover:text-[#5b8fa8]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 mt-2 border-t border-[#495057]">
                <a
                  href="https://assets.rajrohit.tech/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-md border border-[#5b8fa8] px-5 py-3 text-sm font-semibold text-[#5b8fa8] transition-all duration-300 hover:bg-[#5b8fa8] hover:text-[#212529]"
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
