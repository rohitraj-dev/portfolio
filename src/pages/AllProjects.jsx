import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
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
    <div className="min-h-screen bg-[#212529] text-[#f8f9fa] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <Link to="/" className="text-[#5b8fa8] hover:text-[#5b8fa8] transition-colors flex items-center gap-2 mb-8 font-medium inline-flex">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#f8f9fa] mb-4">Projects</h1>
            <p className="text-[#adb5bd] text-lg max-w-2xl">Things I've built</p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-12">
          {TABS.map((tab) => {
            const count = tab === 'All' ? projectsData.length : projectsData.filter(p => p.status === tab).length;
            const isActive = activeTab === tab;
            return (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#5b8fa8] text-[#212529] border-[#5b8fa8]'
                    : 'bg-[#343a40] border-[#495057] text-[#adb5bd] hover:border-[#5b8fa8]/60 hover:text-[#f8f9fa]'
                }`}>
                {tab}
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-[#212529]/20 text-[#212529]' : 'bg-[#495057] text-[#adb5bd]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                let badgeClass = "bg-[#495057] text-[#f8f9fa] border-[#495057]";
                if (project.status === "Completed" || project.status === "Done") {
                  badgeClass = "bg-green-500/10 text-green-400 border-green-500/30";
                } else if (project.status === "In Progress") {
                  badgeClass = "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
                } else if (project.status === "Proposed") {
                  badgeClass = "bg-[#5b8fa8]/10 text-[#5b8fa8] border-[#5b8fa8]/30";
                }

                return (
                  <motion.div key={project.id} layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col bg-[#343a40] border border-[#495057] rounded-2xl overflow-hidden hover:border-[#5b8fa8]/60 transition-all duration-300"
                  >
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-[#f8f9fa]">{project.title}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${badgeClass}`}>
                          {project.status === 'Done' ? 'Completed' : project.status}
                        </span>
                      </div>
                      
                      <p className="text-[#adb5bd] text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {(project.tags || project.stack || []).slice(0, 4).map((tag, idx) => (
                          <span key={idx} className="bg-[#5b8fa8]/10 border border-[#5b8fa8]/30 text-[#5b8fa8] text-xs rounded-full px-2.5 py-1">{tag}</span>
                        ))}
                        {(project.tags || project.stack || []).length > 4 && (
                          <span className="bg-[#495057] text-[#6c757d] text-xs rounded-full px-2.5 py-1">+{(project.tags || project.stack || []).length - 4}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#495057]">
                        <Link to={`/projects/${project.id}`}
                          className="flex-1 text-center bg-[#495057] hover:bg-[#5b8fa8] hover:text-[#212529] text-[#f8f9fa] text-sm font-medium py-2 px-4 rounded-xl transition-colors">
                          Details
                        </Link>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="p-2 bg-[#495057] hover:bg-[#5b8fa8] hover:text-[#212529] text-[#f8f9fa] rounded-xl transition-colors">
                            <FaGithub size={18} />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="p-2 bg-[#5b8fa8]/10 hover:bg-[#5b8fa8] hover:text-[#212529] border border-[#5b8fa8]/30 text-[#5b8fa8] rounded-xl transition-colors">
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-20 bg-[#343a40] border border-[#495057] rounded-2xl">
            <p className="text-[#6c757d] text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
