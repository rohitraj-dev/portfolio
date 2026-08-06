import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

// Show only first 6 on the home page
const featured = projects.slice(0, 6);

export default function Projects() {
  return (
    <section
      id="projects"
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
            PROJECTS
          </span>
        </motion.div>

        {/* Heading + "View All" row */}
        <div className="flex items-end justify-between mb-12 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            Things I've Built
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="flex items-center gap-1.5 text-sm font-medium shrink-0 transition-colors duration-200 group"
              style={{ color: 'var(--gold)' }}
            >
              View All
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} variants={cardVariants} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
