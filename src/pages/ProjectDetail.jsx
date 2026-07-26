import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#212529] flex flex-col items-center justify-center text-[#f8f9fa] px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="text-[#5b8fa8] hover:text-[#5b8fa8] transition-colors flex items-center gap-2 font-medium">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  const isCompleted = project.status === "Completed";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#212529] text-[#f8f9fa] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link to="/projects" className="text-[#5b8fa8] hover:text-[#5b8fa8] transition-colors flex items-center gap-2 mb-8 font-medium inline-flex">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <h1 className="font-bold text-4xl md:text-6xl">{project.title}</h1>
            <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${
              isCompleted 
                ? 'bg-green-500/10 text-green-400 border-green-500/30' 
                : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
            }`}>
              {project.status}
            </span>
          </div>

          <p className="text-[#5b8fa8] text-lg md:text-xl font-medium mb-6">{project.tagline}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#495057] text-[#f8f9fa] text-xs rounded-full px-3 py-1">{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-12">
          <div className="bg-[#343a40] border border-[#495057] rounded-2xl p-6 md:p-8">
            <h2 className="text-[#5b8fa8] font-semibold text-xl mb-3">Overview</h2>
            <p className="text-[#adb5bd] leading-relaxed text-base md:text-lg">{project.description}</p>
          </div>

          <div className="bg-[#343a40] border border-[#495057] rounded-2xl p-6 md:p-8">
            <h2 className="text-[#5b8fa8] font-semibold text-xl mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-[#5b8fa8]/10 border border-[#5b8fa8]/30 text-[#5b8fa8] text-sm font-medium rounded-full px-4 py-2">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="border border-[#5b8fa8] text-[#5b8fa8] hover:bg-[#5b8fa8] hover:text-[#212529] rounded-xl px-6 py-3 flex items-center gap-2 font-medium transition-colors duration-300">
              <FaGithub size={20} /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="border border-[#5b8fa8] text-[#5b8fa8] hover:bg-[#5b8fa8] hover:text-[#212529] rounded-xl px-6 py-3 flex items-center gap-2 font-medium transition-colors duration-300">
              <ExternalLink size={20} /> Live Demo
            </a>
          )}
        </div>

        <div className="text-[#6c757d] text-sm text-center mt-12 border-t border-[#495057] pt-8">
          <p>More details, screenshots & learnings coming soon.</p>
        </div>
      </div>
    </motion.div>
  );
}
