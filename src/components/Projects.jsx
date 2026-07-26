import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="bg-[#212529] py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col items-center">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f8f9fa] mb-3">Projects</h2>
            <div className="w-20 h-1 bg-[#5b8fa8] rounded-full mx-auto mb-4"></div>
            <p className="text-[#adb5bd] text-lg">Things I've built (and am still building)</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} itemVariants={itemVariants} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
