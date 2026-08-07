import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { skills } from '../data/skills';
import Footer from '../components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerItem = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.07 },
});

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/rohitraj-dev' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohitraj-dev/' },
  { icon: FaXTwitter, label: 'Twitter/X', href: 'https://x.com/rajrohit_7388' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/r.a.j_rohit/' },
];

const funFacts = [
  { emoji: '🏫', title: 'Allen Kota', desc: 'JEE preparation — built discipline and a love for problem-solving.' },
  { emoji: '🌐', title: 'Polyglot in training', desc: 'Actively learning French & German alongside coding.' },
  { emoji: '🤖', title: 'AI enthusiast', desc: 'Building with Claude API, OpenAI, scikit-learn, and more.' },
  { emoji: '📍', title: 'Deoghar, Jharkhand', desc: 'Small city. Big ambitions. Proving geography is no barrier.' },
];

const techSkills = skills.filter(g => g.category !== 'Soft Skills');

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="w-10 h-px" style={{ backgroundColor: 'var(--gold)', display: 'inline-block' }} />
      <span style={{
        color: 'var(--gold)',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        fontVariant: 'small-caps',
        fontWeight: 600,
      }}>
        {text}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 px-6 md:px-16" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <div className="max-w-5xl mx-auto w-full flex-1">

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

        {/* ── Hero area ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center mb-24">
          {/* Text */}
          <div className="md:col-span-3 flex flex-col">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <SectionLabel text="ABOUT ME" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold mb-3"
              style={{ color: 'var(--text)' }}
            >
              Rohit Raj
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base mb-6"
              style={{ color: 'var(--gold)', letterSpacing: '0.04em' }}
            >
              BCA @ BIT Mesra · B.Sc. Data Science @ IIT Madras
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)', maxWidth: '52ch' }}
            >
              I'm a 19-year-old developer and data science student from Deoghar, Jharkhand.
              I'm simultaneously pursuing <span style={{ color: 'var(--text)' }}>BCA at BIT Mesra, Deoghar Off-Campus (2025–2029)</span> and{' '}
              <span style={{ color: 'var(--text)' }}>B.Sc. Data Science &amp; Programming at IIT Madras (2024–2028)</span>.
              I'm passionate about AI/ML, full-stack development, and building products that solve real problems.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex flex-wrap gap-3"
            >
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--surface)',
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
                  <Icon size={15} /> {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="md:col-span-2 flex justify-center md:justify-end"
          >
            <img
              src="https://assets.rajrohit.tech/photos/photo_no-back.png"
              alt="Rohit Raj"
              className="w-48 md:w-64 object-contain select-none"
              style={{ filter: 'drop-shadow(0 0 32px rgba(201,168,76,0.18))' }}
            />
          </motion.div>
        </div>

        {/* ── Skills grid ── */}
        <motion.section {...fadeUp} className="mb-24">
          <SectionLabel text="SKILLS" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text)' }}>
            Technical Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSkills.map((group, i) => (
              <motion.div
                key={group.category}
                {...staggerItem(i)}
                className="rounded-sm p-5"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full transition-all duration-200 cursor-default"
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
          </div>
        </motion.section>

        {/* ── Fun facts ── */}
        <motion.section {...fadeUp} className="mb-24">
          <SectionLabel text="BEYOND CODE" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text)' }}>
            A Few Things About Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {funFacts.map((fact, i) => (
              <motion.div
                key={fact.title}
                {...staggerItem(i)}
                className="flex gap-4 p-5 rounded-sm"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span className="text-2xl shrink-0">{fact.emoji}</span>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>{fact.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{fact.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Resume CTA ── */}
        <motion.section {...fadeUp} className="flex justify-center py-8">
          <a
            href="https://assets.rajrohit.tech/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-sm text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: '#c9a84c', color: '#0a0a0a' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4b460'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#c9a84c'; }}
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.section>

      </div>
      <div className="h-16" />
      <Footer />
    </div>
  );
}
