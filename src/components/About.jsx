import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center md:justify-start"
          >
            <img
              src="https://assets.rajrohit.tech/photos/photo_no-back.png"
              alt="Rohit Raj"
              className="w-56 md:w-72 object-contain select-none"
              style={{ filter: 'drop-shadow(0 0 32px rgba(201,168,76,0.18))' }}
            />
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col">

            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-10 h-px" style={{ backgroundColor: 'var(--gold)', display: 'inline-block' }} />
              <span style={{
                color: 'var(--gold)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                fontVariant: 'small-caps',
                fontWeight: 600,
              }}>
                ABOUT
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--text)' }}
            >
              Who I Am
            </motion.h2>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-muted)', maxWidth: '42ch' }}
            >
              I'm a developer and data science student simultaneously pursuing{' '}
              <span style={{ color: 'var(--text)' }}>BCA at BIT Mesra</span> and{' '}
              <span style={{ color: 'var(--text)' }}>B.Sc. Data Science at IIT Madras</span>.
              I build AI-powered apps and love turning ambitious ideas into real products.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-col gap-2 mb-8"
            >
              {[
                { label: 'Location', value: 'Deoghar, Jharkhand' },
                { label: 'Focus', value: 'AI/ML · Full-Stack · Data Science' },
                { label: 'Learning', value: 'French & German' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest w-20 shrink-0" style={{ color: 'var(--gold)' }}>
                    {label}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{value}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.34 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-sm font-medium transition-all duration-200"
                style={{ border: '1px solid var(--gold)', color: 'var(--gold)', backgroundColor: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-glow)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
