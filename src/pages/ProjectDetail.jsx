import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center text-white px-6 text-center">
        <h1 className="text-3xl font-bold mb-4 font-[Space_Grotesk]">Project not found</h1>
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 font-medium">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const isCompleted = project.status === "Completed";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#0a0a0f] text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* HERO SECTION */}
        <div className="mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="text-cyan-400 hover:text-white transition-colors flex items-center gap-2 mb-8 font-medium"
          >
            <ArrowLeft size={16} /> Back
          </button>
          
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <h1 className="font-bold text-4xl md:text-6xl font-[Space_Grotesk]">
              {project.title}
            </h1>
            <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${
              isCompleted 
                ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
            }`}>
              {project.status}
            </span>
          </div>

          <p className="text-cyan-400 text-lg md:text-xl font-medium mb-6">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="bg-white/10 border border-white/20 text-white/60 text-xs rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Card 1: Overview */}
          <div className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-cyan-400 font-semibold text-xl mb-3 font-[Space_Grotesk]">Overview</h2>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </div>

          {/* Card 2: Tech Stack */}
          <div className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-cyan-400 font-semibold text-xl mb-4 font-[Space_Grotesk]">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="bg-white/10 border border-cyan-400/30 text-white/90 text-sm font-medium rounded-full px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 rounded-xl px-6 py-3 flex items-center gap-2 font-medium transition-colors duration-300"
            >
              <FaGithub size={20} /> GitHub
            </a>
          )}
          {project.live && (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 rounded-xl px-6 py-3 flex items-center gap-2 font-medium transition-colors duration-300"
            >
              <ExternalLink size={20} /> Live Demo
            </a>
          )}
        </div>

        {/* BOTTOM NOTE */}
        <div className="text-white/30 text-sm text-center mt-12 border-t border-white/5 pt-8">
          <p>More details, screenshots & learnings coming soon.</p>
        </div>
      </div>
    </motion.div>
  );
}
