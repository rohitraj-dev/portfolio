import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { skillsData } from '../data/skills';

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/rohitraj-dev' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohitraj-dev/' },
  { icon: FaXTwitter, label: 'Twitter/X', href: 'https://x.com/rajrohit_7388' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/r.a.j_rohit/' },
];

const quickFacts = [
  { emoji: '🎂', label: 'Born', value: 'April 10, 2006' },
  { emoji: '📍', label: 'Location', value: 'Deoghar, Jharkhand' },
  { emoji: '🎓', label: 'BCA', value: 'BIT Mesra (2025–2029)' },
  { emoji: '🎓', label: 'B.Sc. DS', value: 'IIT Madras (2024–2028)' },
  { emoji: '💻', label: 'Focus', value: 'AI/ML, Web Dev, Data Science' },
  { emoji: '🌐', label: 'Languages', value: 'English, Hindi, learning French & German' },
];

const softSkills = [
  'Communication', 'Teamwork', 'Responsibility', 'Creativity',
  'Problem-solving', 'Leadership', 'Adaptive',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#212529] text-[#f8f9fa] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <Link to="/" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2 mb-8 font-medium inline-flex">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#f8f9fa] mb-4">About Me</h1>
          </motion.div>
        </div>

        {/* Profile */}
        <motion.section {...fadeUp} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="w-64 h-72 bg-[#343a40] border border-[#495057] rounded-2xl flex flex-col items-center justify-center gap-3">
                <span className="text-6xl font-bold text-amber-400">RR</span>
                <span className="text-[#6c757d] text-sm">Photo coming soon</span>
              </div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-1">Rohit Raj</h2>
              <p className="text-amber-400 text-sm font-medium mb-5">BCA @ BIT Mesra · B.Sc. Data Science @ IIT Madras</p>
              <p className="text-[#adb5bd] leading-relaxed text-base md:text-lg mb-8">
                I'm a 19-year-old developer and data science student from Deoghar, Jharkhand.
                I build AI-powered apps, explore ML, and love turning ideas into real products.
                Currently pursuing BCA at BIT Mesra and B.Sc. Data Science at IIT Madras simultaneously.
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#343a40] border border-[#495057] hover:border-amber-400/60 text-[#adb5bd] hover:text-amber-400 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                    <s.icon size={16} /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Facts */}
        <motion.section {...fadeUp} className="mb-20">
          <h2 className="text-2xl font-bold mb-2">Quick Facts</h2>
          <div className="w-16 h-1 bg-amber-400 rounded-full mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickFacts.map((fact, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#343a40] border border-[#495057] rounded-2xl p-5 hover:border-amber-400/60 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{fact.emoji}</span>
                  <div>
                    <p className="text-[#6c757d] text-xs font-medium uppercase tracking-wider mb-1">{fact.label}</p>
                    <p className="text-[#f8f9fa] font-medium text-sm">{fact.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Skills */}
        <motion.section {...fadeUp} className="mb-20">
          <h2 className="text-2xl font-bold mb-2">Tech Skills</h2>
          <div className="w-16 h-1 bg-amber-400 rounded-full mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((group, i) => (
              <motion.div key={group.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#343a40] border border-[#495057] rounded-2xl p-6 hover:border-amber-400/60 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  {group.categoryIcon && <group.categoryIcon className="text-amber-400" size={18} />}
                  <h3 className="text-[#f8f9fa] font-semibold text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill.name} className="flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-medium rounded-full px-3 py-1.5">
                      {skill.icon && <skill.icon size={12} />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Soft Skills */}
        <motion.section {...fadeUp} className="mb-20">
          <h2 className="text-2xl font-bold mb-2">Soft Skills</h2>
          <div className="w-16 h-1 bg-amber-400 rounded-full mb-8"></div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-[#495057] text-[#f8f9fa] text-sm font-medium rounded-full px-5 py-2.5">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Resume CTA */}
        <motion.section {...fadeUp} className="text-center py-12">
          <a href="https://assets.rajrohit.tech/resume/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-500 text-[#212529] font-bold text-base px-8 py-4 rounded-xl transition-all duration-300">
            <Download size={20} /> Download Resume
          </a>
        </motion.section>
      </div>
    </div>
  );
}
