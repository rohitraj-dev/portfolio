import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData, learningSkills } from '../data/skills';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <section id="skills" className="bg-[#0a0a0f] py-24 px-4 md:px-8 lg:px-16">
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
            <h2 className="text-4xl font-bold text-white font-[Space_Grotesk] mb-3">Skills</h2>
            <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-white/70 text-lg">Technologies & tools I work with</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-20">
            {skillsData.map((categoryObj, idx) => {
              const Icon = categoryObj.categoryIcon;
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="text-cyan-400 text-2xl" />
                    <h3 className="text-xl font-bold text-white">{categoryObj.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {categoryObj.items.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div 
                          key={sIdx}
                          className="flex items-center gap-2 bg-white/10 border border-cyan-400/30 hover:border-cyan-400/60 text-white/80 text-sm font-medium rounded-full px-3 py-1.5 transition-colors cursor-default"
                        >
                          {SkillIcon ? <SkillIcon className="text-base" /> : <span className="text-base">⚡</span>}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Currently Learning */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white font-[Space_Grotesk] mb-6">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {learningSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-purple-500/30 text-white/80 text-sm md:text-base font-medium rounded-full px-5 py-2 hover:bg-white/10 hover:border-purple-500/50 transition-colors duration-300 cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
