import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import educationData from '../data/timeline';

export default function Education() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation & Hero */}
        <div className="mb-20">
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
              Education
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              My academic journey
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2 rounded-full"></div>

          {educationData.map((item, index) => {
            // Alternate sides on desktop
            const isEven = index % 2 === 0;
            const isCyan = item.color === 'cyan';
            
            return (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row w-full mb-16 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Center Dot */}
                <div 
                  className={`absolute left-6 md:left-1/2 top-8 w-5 h-5 rounded-full border-4 border-[#0a0a0f] md:-translate-x-1/2 z-10 -translate-x-1/2 ${
                    isCyan 
                      ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                      : 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                  }`}
                ></div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-[45%] pl-16 md:pl-0"
                >
                  <div className={`bg-white/5 backdrop-blur-md border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                    isCyan 
                      ? 'border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                      : 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]'
                  }`}>
                    
                    {/* Badge & Title */}
                    <div className="mb-4">
                      <span className={`inline-block border text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                        isCyan 
                          ? 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400' 
                          : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                      }`}>
                        {item.degree}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {item.institution}
                      </h3>
                    </div>
                    
                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className={isCyan ? 'text-cyan-400' : 'text-purple-500'} />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className={isCyan ? 'text-cyan-400' : 'text-purple-500'} />
                        {item.location}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                    
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
