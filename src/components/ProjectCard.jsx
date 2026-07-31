import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, itemVariants }) {
  const isCompleted = project.status === "Completed";
  
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-[#343a40] border border-[#495057] rounded-2xl p-6 hover:border-[#5b8fa8]/60 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-2 gap-4">
        <h3 className="text-[#f8f9fa] font-bold text-xl">{project.title}</h3>
        <span className={`text-xs px-2.5 py-1 rounded-full border whitespace-nowrap ${
          isCompleted 
            ? 'bg-green-500/10 text-green-400 border-green-500/30' 
            : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
        }`}>
          {project.status}
        </span>
      </div>
      
      <p className="text-[#5b8fa8] text-sm mt-1 font-medium">{project.tagline}</p>
      
      <p className="text-[#adb5bd] text-sm mt-3 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {(project.tags || project.stack || []).map((tag, idx) => (
          <span key={idx} className="bg-[#495057] text-[#f8f9fa] text-xs rounded-full px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="border border-[#5b8fa8] text-[#5b8fa8] hover:bg-[#5b8fa8] hover:text-[#212529] rounded-lg px-4 py-2 text-sm flex items-center gap-2 transition-colors font-medium">
            <FaGithub size={16} /> GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="border border-[#5b8fa8] text-[#5b8fa8] hover:bg-[#5b8fa8] hover:text-[#212529] rounded-lg px-4 py-2 text-sm flex items-center gap-2 transition-colors font-medium">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
        <Link to={`/projects/${project.id}`}
          className="ml-auto text-[#6c757d] hover:text-[#5b8fa8] text-sm flex items-center gap-1.5 transition-colors font-medium">
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
