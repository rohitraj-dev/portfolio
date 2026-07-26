import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import projectsData from '../data/projects';

const TABS = ['All', 'In Progress', 'Completed', 'Proposed'];

export default function AllProjects() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projectsData;
    return projectsData.filter((project) => project.status === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation & Hero */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="text-cyan-400 hover:text-white transition-colors flex items-center gap-2 mb-8 font-medium inline-flex"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] mb-4">
              Projects
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Things I've built
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-12">
          {TABS.map((tab) => {
            const count = tab === 'All' 
              ? projectsData.length 
              : projectsData.filter(p => p.status === tab).length;
              
            const isActive = activeTab === tab;
            
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                  isActive 
                    ? 'bg-cyan-400/10 border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {tab}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-cyan-400/20 text-cyan-400' : 'bg-white/10 text-white/60'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                let badgeClass = "bg-white/10 text-white border-white/20";
                if (project.status === "Completed" || project.status === "Done") {
                  badgeClass = "bg-green-500/10 text-green-400 border-green-500/30";
                } else if (project.status === "In Progress") {
                  badgeClass = "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
                } else if (project.status === "Proposed") {
                  badgeClass = "bg-purple-500/10 text-purple-400 border-purple-500/30";
                }

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
                  >
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white font-[Space_Grotesk]">
                          {project.title}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${badgeClass}`}>
                          {project.status === 'Done' ? 'Completed' : project.status}
                        </span>
                      </div>
                      
                      <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 4).map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs rounded-full px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="bg-white/5 border border-white/10 text-white/50 text-xs rounded-full px-2.5 py-1">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                        <Link 
                          to={`/projects/${project.id}`}
                          className="flex-1 text-center bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2 px-4 rounded-xl transition-colors"
                        >
                          Details
                        </Link>
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-colors"
                          >
                            <FaGithub size={18} />
                          </a>
                        )}
                        {project.live && (
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/20 text-cyan-400 rounded-xl transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl"
          >
            <p className="text-white/50 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
