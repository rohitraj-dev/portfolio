import { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { SiCisco, SiSap } from 'react-icons/si';
import { FaBriefcase, FaLaptopCode, FaFilePdf, FaMedal } from 'react-icons/fa6';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const getIssuerIcon = (issuer) => {
  switch (issuer) {
    case 'Cisco': return <SiCisco className="text-4xl text-cyan-400" />;
    case 'IBM': return <FaBriefcase className="text-4xl text-blue-500" />;
    case 'SAP': return <SiSap className="text-4xl text-blue-400" />;
    case 'Forage': return <FaBriefcase className="text-4xl text-purple-400" />;
    case 'CS50': return <FaLaptopCode className="text-4xl text-red-400" />;
    default: return <FaMedal className="text-4xl text-gray-400" />;
  }
};

const TABS = ['All', 'Cisco', 'IBM', 'Forage', 'SAP', 'CS50'];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCerts = certifications.filter(cert => 
    activeTab === 'All' ? true : cert.issuer === activeTab
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation & Hero */}
        <div className="mb-12">
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
              Certifications
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              A comprehensive showcase of my professional credentials, continuous learning, and technical achievements.
            </p>
          </motion.div>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {TABS.map(tab => {
            const count = tab === 'All' 
              ? certifications.length 
              : certifications.filter(c => c.issuer === tab).length;

            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive 
                    ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]' 
                    : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab}
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-cyan-400/20' : 'bg-white/10'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div 
          key={activeTab} // Force re-animation on tab change
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCerts.map(cert => (
            <motion.div 
              key={cert.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 flex flex-col h-full hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
            >
              {/* Badge Image or Icon */}
              <div className="h-40 w-full flex items-center justify-center bg-black/20 rounded-xl mb-5 overflow-hidden p-4">
                {cert.badgeUrl ? (
                  <img 
                    src={cert.badgeUrl} 
                    alt={`${cert.name} badge`} 
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  getIssuerIcon(cert.issuer)
                )}
              </div>

              {/* Info */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {cert.name}
                </h3>
                <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1 rounded-full font-medium">
                  {cert.issuer}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10">
                {cert.certUrl && (
                  <a 
                    href={cert.certUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[100px] text-center bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 text-xs font-medium py-2 px-3 rounded-lg flex justify-center items-center gap-1.5 transition-colors"
                  >
                    PDF <FaFilePdf size={12} />
                  </a>
                )}
                {cert.credlyUrl && (
                  <a 
                    href={cert.credlyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[100px] text-center bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium py-2 px-3 rounded-lg flex justify-center items-center gap-1.5 transition-colors"
                  >
                    Credly <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredCerts.length === 0 && (
          <div className="text-center py-20 text-white/50">
            No certifications found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
