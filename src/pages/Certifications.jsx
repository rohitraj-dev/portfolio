import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import { certifications } from '../data/certifications';

const TABS = ['All', 'Cisco', 'IBM', 'Forage', 'SAP', 'CS50'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function CertLink({ href, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-xs transition-colors duration-200"
      style={{ color: 'var(--text-muted)' }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
    >
      {label} <ExternalLink size={10} />
    </a>
  );
}

export default function CertificationsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? certifications
    : certifications.filter(c => c.issuer === activeTab);

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
              CERTIFICATIONS
            </span>
          </div>
          <h1
            className="font-display text-5xl md:text-6xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            Credentials &amp; Badges
          </h1>
        </motion.div>

        {/* Tab filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {TABS.map(tab => {
            const count = tab === 'All' ? certifications.length : certifications.filter(c => c.issuer === tab).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={isActive
                  ? { backgroundColor: 'var(--gold)', color: '#000' }
                  : {
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    backgroundColor: 'transparent',
                  }
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
                {tab}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isActive ? 'rgba(0,0,0,0.15)' : 'var(--surface-2)',
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
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                className="flex flex-col p-5 rounded-sm transition-all duration-300"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Badge area */}
                <div className="mb-4 w-16 h-16 flex items-center justify-center">
                  {cert.badgeUrl
                    ? <img src={cert.badgeUrl} alt={cert.name} className="w-16 h-16 object-contain" />
                    : <Award size={36} style={{ color: 'var(--gold)', opacity: 0.5 }} />
                  }
                </div>

                {/* Name */}
                <p
                  className="text-sm font-medium leading-snug line-clamp-2 mb-1 flex-grow"
                  style={{ color: 'var(--text)' }}
                >
                  {cert.name}
                </p>

                {/* Issuer */}
                <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                  {cert.issuer}
                </p>

                {/* Links row */}
                <div
                  className="flex flex-wrap gap-3 pt-3"
                  style={{ borderTop: '1px solid var(--border)', marginTop: 'auto' }}
                >
                  <CertLink href={cert.credlyUrl} label="Badge" />
                  <CertLink href={cert.certUrl} label="Cert" />
                  <CertLink href={cert.verifyUrl} label="Verify" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: 'var(--text-muted)' }}>
            No certifications found.
          </div>
        )}

      </div>
    </div>
  );
}
