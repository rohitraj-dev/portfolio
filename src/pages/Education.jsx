import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import timeline from '../data/timeline';
import Footer from '../components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span
        className="w-10 h-px"
        style={{ backgroundColor: 'var(--gold)', display: 'inline-block' }}
      />
      <span
        style={{
          color: 'var(--gold)',
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          fontVariant: 'small-caps',
          fontWeight: 600,
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default function Education() {
  return (
    <div
      className="min-h-screen py-20 px-6 md:px-16"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Back link */}
        <div className="mb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>

        {/* Page hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <SectionLabel text="EDUCATION" />
          <h1
            className="font-display text-5xl md:text-6xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            Academic Journey
          </h1>
        </motion.div>

        {/* Full vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-3 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--border)' }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.07 }}
              className="relative pl-12 mb-10 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute left-3 top-5 w-2 h-2 rounded-full -translate-x-1/2 z-10"
                style={{ backgroundColor: 'var(--gold)', border: '2px solid var(--bg)' }}
              />

              {/* Card */}
              <div
                className="p-6 rounded-sm transition-colors duration-300"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                {/* Year */}
                <span
                  className="text-xs font-semibold mb-3 block"
                  style={{ color: 'var(--gold)', letterSpacing: '0.05em' }}
                >
                  {item.duration}
                </span>

                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h2
                    className="font-display text-xl md:text-2xl font-bold leading-snug"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.institution}
                  </h2>
                  <span
                    className="text-xs px-3 py-1 rounded-full shrink-0"
                    style={{
                      border: '1px solid var(--gold)',
                      color: 'var(--gold)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    {item.degree}
                  </span>
                </div>

                {/* Location */}
                <p
                  className="text-xs mb-4"
                  style={{ color: 'var(--text-muted)', opacity: 0.7 }}
                >
                  📍 {item.location}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp} className="flex justify-center mt-20">
          <Link
            to="/certifications"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-sm font-medium transition-all duration-200"
            style={{ border: '1px solid var(--gold)', color: 'var(--gold)', backgroundColor: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            View Certifications →
          </Link>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}
