import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const featured = certifications.slice(0, 6);

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

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            CERTIFICATIONS
          </span>
        </motion.div>

        {/* Heading + View All row */}
        <div className="flex items-end justify-between mb-12 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            Credentials
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/certifications"
              className="flex items-center gap-1.5 text-sm font-medium shrink-0 transition-colors duration-200 group"
              style={{ color: 'var(--gold)' }}
            >
              View All
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featured.map((cert) => (
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
              {/* Badge */}
              <div className="mb-4 w-14 h-14 flex items-center justify-center">
                {cert.badgeUrl
                  ? <img src={cert.badgeUrl} alt={cert.name} className="w-14 h-14 object-contain" />
                  : <span className="text-3xl" style={{ color: 'var(--gold)', opacity: 0.4 }}>🏅</span>
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

              {/* Links */}
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

      </div>
    </section>
  );
}
