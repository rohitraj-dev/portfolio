import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import projects from '../data/projects';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: 'easeOut', delay },
});

function SectionLabel({ text }) {
  return (
    <p
      className="text-xs font-semibold uppercase mb-4"
      style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
    >
      ▸ {text}
    </p>
  );
}

function StatusBadge({ status }) {
  let style = {};
  let label = status;
  if (status === 'Done') {
    label = 'Live';
    style = { border: '1px solid #4ade80', color: '#4ade80' };
  } else if (status === 'In Progress') {
    style = { border: '1px solid var(--gold)', color: 'var(--gold)' };
  } else {
    style = { border: '1px solid var(--text-muted)', color: 'var(--text-muted)' };
  }
  return (
    <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: 'transparent', ...style }}>
      {label}
    </span>
  );
}

function Divider() {
  return <div className="my-10" style={{ borderTop: '1px solid var(--border)' }} />;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-5 px-6 text-center"
        style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
      >
        <p className="font-display text-3xl font-bold">Project not found</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>
    );
  }

  const stack = project.stack || project.tags || [];
  const features = project.features || [];

  return (
    <div
      className="min-h-screen py-20 px-6 md:px-16"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>
        </motion.div>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mb-10"
        >
          {/* Status */}
          <div className="mb-4">
            <StatusBadge status={project.status} />
          </div>

          {/* Title */}
          <h1
            className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4"
            style={{ color: 'var(--text)' }}
          >
            {project.title}
          </h1>

          {/* Tagline */}
          {project.tagline && (
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}
            >
              {project.tagline}
            </p>
          )}

          {/* Action buttons */}
          {(project.github || project.live) && (
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium transition-all duration-200"
                  style={{ border: '1px solid var(--gold)', color: 'var(--gold)', backgroundColor: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-glow)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <FaGithub size={16} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium transition-all duration-200"
                  style={{ backgroundColor: 'var(--gold)', color: '#000' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          )}
        </motion.div>

        <Divider />

        {/* ── Overview ── */}
        <motion.div {...fadeUp(0)}>
          <SectionLabel text="OVERVIEW" />
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {project.longDescription || project.description}
          </p>
        </motion.div>

        <Divider />

        {/* ── Tech Stack ── */}
        <motion.div {...fadeUp(0.05)}>
          <SectionLabel text="TECH STACK" />
          <div className="flex flex-wrap gap-2">
            {stack.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full cursor-default transition-colors duration-200"
                style={{
                  backgroundColor: 'var(--surface)',
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
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Key Features ── */}
        {features.length > 0 && (
          <>
            <Divider />
            <motion.div {...fadeUp(0.1)}>
              <SectionLabel text="KEY FEATURES" />
              <ul className="flex flex-col gap-2.5">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: 'var(--gold)' }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}

        {/* ── Links ── */}
        {(project.github || project.live) && (
          <>
            <Divider />
            <motion.div {...fadeUp(0.15)}>
              <SectionLabel text="LINKS" />
              <div className="flex flex-col gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--surface)',
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
                    <FaGithub size={16} className="shrink-0" />
                    {project.github}
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--surface)',
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
                    <ExternalLink size={15} className="shrink-0" />
                    {project.live}
                  </a>
                )}
              </div>
            </motion.div>
          </>
        )}

      </div>
    </div>
  );
}
