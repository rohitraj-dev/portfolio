import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certifications = [
  { title: "Introduction to Cybersecurity", issuer: "Cisco", icon: "🛡️" },
  { title: "Web Development Fundamentals", issuer: "IBM", icon: "🌐" },
  { title: "Introduction to Data Science", issuer: "Cisco", icon: "📊" },
  { title: "Introduction to Event Management", issuer: "Coursera", icon: "🎯" },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="certifications" className="bg-[#212529] py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col items-center">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f8f9fa] mb-3">Certifications</h2>
            <div className="w-20 h-1 bg-amber-400 rounded-full mx-auto mb-4"></div>
            <p className="text-[#adb5bd] text-lg">Verified credentials & courses</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}
                className="bg-[#343a40] border border-[#495057] rounded-2xl p-6 hover:border-amber-400/60 transition-all duration-300 flex flex-col">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-[#f8f9fa] font-semibold text-base leading-snug flex-grow">{cert.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <p className="text-[#6c757d] text-sm">{cert.issuer}</p>
                </div>
                <div className="mt-5">
                  <span className="inline-block bg-green-500/10 text-green-400 border border-green-500/20 text-xs px-2.5 py-1 rounded-full font-medium">
                    Verified ✓
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p variants={itemVariants} className="text-[#6c757d] text-sm text-center mt-12">
            More certifications being added as I complete them.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
