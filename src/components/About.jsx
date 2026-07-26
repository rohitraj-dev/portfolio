import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const funFacts = [
    "🎓 BCA @ BIT Deoghar + B.Sc. DS @ IIT Madras",
    "🤖 Building AI tools with Claude & OpenAI APIs",
    "🌐 Learning French & German",
    "📍 Deoghar, Jharkhand"
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/rohitraj-dev", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/rohitraj-dev/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/rajrohit_7388", label: "Twitter/X" },
    { icon: FaInstagram, href: "https://www.instagram.com/r.a.j_rohit/", label: "Instagram" }
  ];

  return (
    <section id="about" className="bg-[#212529] py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#343a40] border border-[#495057] rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <motion.div 
                variants={itemVariants}
                className="w-[180px] h-[180px] rounded-full ring-2 ring-[#5b8fa8] bg-[#495057] flex items-center justify-center mb-6"
              >
                <span className="text-5xl font-bold text-[#f8f9fa]">RR</span>
              </motion.div>
              
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-[#f8f9fa] mb-2">
                Rohit Raj
              </motion.h3>
              
              <motion.p variants={itemVariants} className="text-[#5b8fa8] mb-6 font-medium">
                Developer & AI Enthusiast
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[#6c757d] hover:text-[#5b8fa8] transition-colors text-2xl"
                  >
                    <social.icon />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div variants={itemVariants} className="mb-6 lg:mb-8 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-[#f8f9fa] mb-3">About Me</h2>
                <div className="w-20 h-1 bg-[#5b8fa8] rounded-full mx-auto lg:mx-0"></div>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-[#adb5bd] text-base md:text-lg leading-relaxed mb-8 text-center lg:text-left"
              >
                I'm a BCA student at BIT Deoghar and a B.Sc. Data Science & Programming student at IIT Madras. I build AI-powered tools, web apps, and love solving real-world problems with code. Currently learning French and German on the side.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {funFacts.map((fact, index) => (
                  <div 
                    key={index} 
                    className="bg-[#495057] border border-[#495057] rounded-xl p-4 hover:border-[#5b8fa8]/60 transition-all duration-300 group"
                  >
                    <p className="text-[#adb5bd] text-sm md:text-base font-medium group-hover:text-[#f8f9fa] transition-colors">
                      {fact}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
