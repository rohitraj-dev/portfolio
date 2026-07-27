import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="bg-[#212529] py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col items-center">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f8f9fa] mb-3">Skills</h2>
            <div className="w-16 h-1 bg-[#5b8fa8] rounded-full mx-auto mb-4"></div>
            <p className="text-[#adb5bd] text-lg">Technologies & tools I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-20">
            {skills.map((categoryObj, idx) => {
              return (
                <motion.div key={idx} variants={itemVariants} className="bg-[#343a40] border border-[#495057] rounded-2xl p-6 hover:border-[#5b8fa8]/60 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#5b8fa8] text-2xl">⚡</span>
                    <h3 className="text-xl font-bold text-[#f8f9fa]">{categoryObj.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {categoryObj.items.map((skillName, sIdx) => {
                      return (
                        <div key={sIdx} className="flex items-center gap-2 bg-[#495057] text-[#f8f9fa] text-sm font-medium rounded-full px-3 py-1.5 cursor-default">
                          <span>{skillName}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
