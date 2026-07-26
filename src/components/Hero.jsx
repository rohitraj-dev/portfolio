import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaArrowDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const taglines = [
  'BCA Student at BIT Mesra',
  'B.Sc. Data Science @ IIT Madras',
  'Full Stack Developer',
  'AI Product Builder',
  'Open to Internships',
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/rohitraj-dev', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rohitraj-dev/', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/rajrohit_7388', label: 'Twitter/X' },
  { icon: FaInstagram, href: 'https://www.instagram.com/r.a.j_rohit/', label: 'Instagram' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentFullText = taglines[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % taglines.length);
      } else {
        setCurrentText(
          currentFullText.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#212529]" id="home">
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f8f9fa 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      <motion.div
        className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16 text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#6c757d] text-sm tracking-widest uppercase mb-2"
        >
          👋 Hello, I&apos;m
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold text-[#f8f9fa] mb-4"
        >
          Rohit Raj
        </motion.h1>

        <motion.div variants={itemVariants} className="h-8 md:h-10 mb-2">
          <p className="text-amber-400 text-xl md:text-2xl font-semibold">
            {currentText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-[#adb5bd] mt-4 text-base md:text-lg"
        >
          Building AI-powered products from Deoghar, Jharkhand 🚀
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 gap-4 flex justify-center flex-wrap"
        >
          <Link
            to="/projects"
            className="bg-amber-400 text-[#212529] font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition-all"
          >
            View My Work
          </Link>
          <a
            href="https://assets.rajrohit.tech/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-amber-400 text-amber-400 px-6 py-3 rounded-lg hover:bg-amber-400 hover:text-[#212529] transition-all"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-6 flex justify-center gap-6"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#6c757d] hover:text-amber-400 transition-colors text-2xl"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[#6c757d] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowDown className="text-amber-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
