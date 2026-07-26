import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMenu, LuX } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', path: '/education' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const elements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);
    
    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e, id) => {
    setMobileOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
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
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="font-bold text-2xl text-cyan-400 font-[Space_Grotesk] drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-opacity hover:opacity-80"
        >
          RK
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id || link.path}>
              {link.path ? (
                <Link
                  to={link.path}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition-all text-sm font-semibold"
          >
            Hire Me
          </a>
        </div>

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
              {navLinks.map((link) => (
                <li key={link.id || link.path}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="block rounded-md px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`block rounded-md px-4 py-3 text-base font-medium transition-colors duration-300 ${
                        activeSection === link.id
                          ? 'bg-cyan-400/10 text-cyan-400'
                          : 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-4 mt-2 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="block text-center rounded-md border border-cyan-400 px-5 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
                >
                  Hire Me
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
