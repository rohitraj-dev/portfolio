import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import projectsData from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const TABS = [
  { label: 'All', value: 'All' },
  { label: 'Live', value: 'Done' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Proposed', value: 'Proposed' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AllProjects() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = useMemo(() => {
    if (activeTab === 'All') return projectsData;
    return projectsData.filter(p => p.status === activeTab);
  }, [activeTab]);

  return (
    <div
      className="min-h-screen py-20 px-6 md:px-16"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <div className="max-w-6xl mx-auto">

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
          className="mb-14"
        >
          {/* Label */}
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
              PROJECTS
            </span>
          </div>
          <h1
            className="font-display text-5xl md:text-6xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            Things I've Built
          </h1>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {TABS.map(tab => {
            const count = tab.value === 'All'
              ? projectsData.length
              : projectsData.filter(p => p.status === tab.value).length;
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-sm text-sm font-medium transition-all duration-200"
                style={isActive
                  ? { backgroundColor: 'var(--gold)', color: '#000' }
                  : { border: '1px solid var(--border)', color: 'var(--text-muted)', backgroundColor: 'transparent' }
                }
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--gold)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }
                }}
              >
                {tab.label}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isActive ? 'rgba(0,0,0,0.15)' : 'var(--surface)',
                    color: isActive ? '#000' : 'var(--text-muted)',
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} variants={cardVariants} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                No projects in this category yet.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
