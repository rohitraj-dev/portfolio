import { motion } from 'framer-motion';
import timeline from '../data/timeline';

export default function Timeline() {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
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
            EDUCATION
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-3xl md:text-4xl font-bold mb-16"
          style={{ color: 'var(--text)' }}
        >
          My Journey
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ backgroundColor: 'var(--border)' }}
          />

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex w-full mb-10 ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-10 md:pl-0`}
              >
                {/* Dot */}
                <div
                  className="absolute left-3 md:left-1/2 top-5 w-2 h-2 rounded-full -translate-x-1/2 z-10"
                  style={{ backgroundColor: 'var(--gold)', border: '2px solid var(--bg)' }}
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full md:w-[45%] p-5 rounded-sm transition-colors duration-300"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  {/* Year badge */}
                  <span
                    className="text-xs font-medium mb-3 block"
                    style={{ color: 'var(--gold)' }}
                  >
                    {item.duration}
                  </span>

                  {/* Institution */}
                  <h3
                    className="font-medium text-base leading-snug mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.institution}
                  </h3>

                  {/* Degree */}
                  <p className="text-xs mb-3" style={{ color: 'var(--gold)', opacity: 0.75 }}>
                    {item.degree}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {item.description}
                  </p>

                  {/* Location */}
                  <p className="text-xs mt-2" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
                    📍 {item.location}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
