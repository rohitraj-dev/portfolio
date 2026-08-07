import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const HeroCanvas = lazy(() => import('./HeroCanvas'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const socials = [
  { icon: FaGithub, href: 'https://github.com/rohitraj-dev', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rohitraj-dev/', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/rajrohit_7388', label: 'Twitter/X' },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-16"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24 lg:py-0">

        {/* ── Left: Text ── */}
        <div className="flex flex-col order-2 lg:order-1">

          {/* Greeting line + rule */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-4">
            <span
              className="w-10 h-px"
              style={{ backgroundColor: 'var(--gold)', display: 'inline-block' }}
            />
            <span
              style={{
                color: 'var(--gold)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                fontVariant: 'small-caps',
                fontWeight: 600,
              }}
            >
              ROHIT RAJ
            </span>
          </motion.div>

          {/* Name heading */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4"
            style={{ color: 'var(--text)' }}
          >
            Developer<br />
            <span style={{ color: 'var(--gold)' }}>&amp;</span> Data Scientist
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg md:text-xl mb-8 max-w-md"
            style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}
          >
            Building intelligent systems.<br />One line at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-8">
            {/* View Work */}
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-2.5 rounded-sm text-sm font-medium transition-all duration-200"
              style={{ backgroundColor: '#c9a84c', color: '#0a0a0a' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4b460'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#c9a84c'; }}
            >
              View Work
            </button>

            {/* Contact Me */}
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 rounded-sm text-sm font-medium transition-all duration-200"
              style={{
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              Contact Me
            </button>

            {/* Resume */}
            <a
              href="https://assets.rajrohit.tech/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <ArrowDownToLine size={15} />
              Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div {...fadeUp(0.4)} className="flex items-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: 3D Canvas ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="hidden lg:flex justify-center items-center order-1 lg:order-2 h-[420px] w-full pointer-events-none"
        >
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </motion.div>

      </div>
    </section>
  );
}
