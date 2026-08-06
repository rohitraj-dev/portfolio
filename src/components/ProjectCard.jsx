import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

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
    <span
      className="text-xs px-2 py-0.5 rounded-full"
      style={{ backgroundColor: 'transparent', ...style }}
    >
      {label}
    </span>
  );
}

export default function ProjectCard({ project, variants }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const tags = (project.stack || project.tags || []);
  const visibleTags = tags.slice(0, 4);
  const extraCount = tags.length - 4;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const rotY = (dx / (rect.width / 2)) * 8;
    const rotX = -(dy / (rect.height / 2)) * 8;
    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => setHovered(true);

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const linkStyle = { color: 'var(--text-muted)', transition: 'color 0.2s ease' };

  return (
    <motion.div
      variants={variants}
      style={{ perspective: '900px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col h-full p-5 rounded-sm"
        style={{
          backgroundColor: 'var(--surface)',
          border: hovered ? '1px solid var(--gold)' : '1px solid var(--border)',
          boxShadow: hovered ? '0 8px 32px rgba(201,168,76,0.10)' : 'none',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered
            ? 'border-color 0.25s ease, box-shadow 0.25s ease'
            : 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.4s ease',
          willChange: 'transform',
        }}
      >
        {/* Top row: title + badge */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="font-display font-medium text-lg leading-snug"
            style={{ color: 'var(--text)' }}
          >
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        {/* Tagline */}
        {project.tagline && (
          <p className="text-xs mb-3" style={{ color: 'var(--gold)', opacity: 0.8 }}>
            {project.tagline}
          </p>
        )}

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-grow mb-4 line-clamp-3"
          style={{ color: 'var(--text-muted)' }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              {tag}
            </span>
          ))}
          {extraCount > 0 && (
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              +{extraCount} more
            </span>
          )}
        </div>

        {/* Links row */}
        <div
          className="flex items-center gap-4 pt-4"
          style={{ borderTop: '1px solid var(--border)', marginTop: 'auto' }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <FaGithub size={17} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <ExternalLink size={15} />
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="ml-auto flex items-center gap-1 text-xs font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
