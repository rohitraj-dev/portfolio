import { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { SiCisco, SiSap } from 'react-icons/si';
import { FaBriefcase, FaLaptopCode, FaFilePdf, FaMedal } from 'react-icons/fa6';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const getIssuerIcon = (issuer) => {
  switch (issuer) {
    case 'Cisco': return <SiCisco className="text-4xl text-[#5b8fa8]" />;
    case 'IBM': return <FaBriefcase className="text-4xl text-blue-400" />;
    case 'SAP': return <SiSap className="text-4xl text-blue-400" />;
    case 'Forage': return <FaBriefcase className="text-4xl text-[#5b8fa8]" />;
    case 'CS50': return <FaLaptopCode className="text-4xl text-red-400" />;
    default: return <FaMedal className="text-4xl text-[#6c757d]" />;
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#212529] text-[#f8f9fa] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <Link to="/" className="text-[#5b8fa8] hover:text-[#5b8fa8] transition-colors flex items-center gap-2 mb-8 font-medium inline-flex">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#f8f9fa] mb-4">Certifications</h1>
            <p className="text-[#adb5bd] text-lg max-w-2xl">
              A comprehensive showcase of my professional credentials, continuous learning, and technical achievements.
            </p>
          </motion.div>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 overflow-x-auto pb-2">
          {TABS.map(tab => {
            const count = tab === 'All' ? certifications.length : certifications.filter(c => c.issuer === tab).length;
            const isActive = activeTab === tab;
            return (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#5b8fa8] text-[#212529] border-[#5b8fa8]'
                    : 'bg-[#343a40] text-[#adb5bd] border-[#495057] hover:border-[#5b8fa8]/60 hover:text-[#f8f9fa]'
                }`}>
                {tab}
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-[#212529]/20' : 'bg-[#495057]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div key={activeTab} variants={containerVariants} initial="hidden" animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map(cert => (
            <motion.div key={cert.id} variants={itemVariants}
              className="bg-[#343a40] border border-[#495057] rounded-2xl p-6 flex flex-col h-full hover:border-[#5b8fa8]/60 transition-all duration-300">
              
              <div className="h-40 w-full flex items-center justify-center bg-[#212529] rounded-xl mb-5 overflow-hidden p-4">
                {cert.badgeUrl ? (
                  <img src={cert.badgeUrl} alt={`${cert.name} badge`} className="max-h-full max-w-full object-contain" />
                ) : (
                  getIssuerIcon(cert.issuer)
                )}
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#f8f9fa] mb-2 leading-tight">{cert.name}</h3>
                <span className="inline-block bg-[#495057] text-[#adb5bd] text-xs px-3 py-1 rounded-full font-medium">{cert.issuer}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#495057]">
                {cert.certUrl && (
                  <a href={cert.certUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 min-w-[100px] text-center bg-[#5b8fa8]/10 hover:bg-[#5b8fa8]/20 border border-[#5b8fa8]/30 text-[#5b8fa8] text-xs font-medium py-2 px-3 rounded-lg flex justify-center items-center gap-1.5 transition-colors">
                    PDF <FaFilePdf size={12} />
                  </a>
                )}
                {cert.credlyUrl && (
                  <a href={cert.credlyUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 min-w-[100px] text-center bg-[#5b8fa8]/10 hover:bg-[#5b8fa8]/20 border border-[#5b8fa8]/30 text-[#5b8fa8] text-xs font-medium py-2 px-3 rounded-lg flex justify-center items-center gap-1.5 transition-colors">
                    Credly <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredCerts.length === 0 && (
          <div className="text-center py-20 text-[#6c757d]">
            No certifications found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
