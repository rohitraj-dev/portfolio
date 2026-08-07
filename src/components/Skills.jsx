import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import SkillsGlobe from './SkillsGlobe';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16"
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
            SKILLS
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-3xl md:text-4xl font-bold"
          style={{ color: 'var(--text)' }}
        >
          Technologies &amp; Tools
        </motion.h2>

        {/* Globe — lg and above only */}
        <div className="hidden lg:block h-[340px] w-full mb-12">
          <SkillsGlobe />
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="rounded-sm p-5 transition-colors duration-300 group"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>▸</span>
                <h3
                  className="text-xs font-medium uppercase tracking-[0.15em]"
                  style={{ color: 'var(--gold)' }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full cursor-default transition-colors duration-200"
                    style={{
                      backgroundColor: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--gold)';
                      e.currentTarget.style.color = 'var(--gold)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
