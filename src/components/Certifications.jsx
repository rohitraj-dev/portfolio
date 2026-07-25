import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    icon: "🛡️",
    color: "cyan",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "IBM",
    icon: "🌐",
    color: "purple",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    icon: "📊",
    color: "cyan",
  },
  {
    title: "Introduction to Event Management",
    issuer: "Coursera",
    icon: "🎯",
    color: "purple",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.15 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="certifications" className="bg-[#0a0a0f] py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white font-[Space_Grotesk] mb-3">Certifications</h2>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-white/70 text-lg">Verified credentials & courses</p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {certifications.map((cert, index) => {
              const isCyan = cert.color === 'cyan';
              const borderClass = isCyan 
                ? 'border-cyan-400/30 hover:border-cyan-400/60' 
                : 'border-purple-500/30 hover:border-purple-500/60';
              const dotColor = isCyan ? 'bg-cyan-400' : 'bg-purple-500';

              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 border ${borderClass} hover:scale-[1.03] transition-all duration-300 flex flex-col`}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  
                  <h3 className="text-white font-semibold text-base leading-snug flex-grow">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></div>
                    <p className="text-white/50 text-sm">{cert.issuer}</p>
                  </div>
                  
                  <div className="mt-5">
                    <span className="inline-block bg-green-500/10 text-green-400 border border-green-500/20 text-xs px-2.5 py-1 rounded-full font-medium">
                      Verified ✓
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p variants={itemVariants} className="text-white/40 text-sm text-center mt-12">
            More certifications being added as I complete them.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
