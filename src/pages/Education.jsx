import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import educationData from '../data/timeline';

export default function Education() {
  return (
    <div className="min-h-screen bg-[#212529] text-[#f8f9fa] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20">
          <Link to="/" className="text-[#5b8fa8] hover:text-[#5b8fa8] transition-colors flex items-center gap-2 mb-8 font-medium inline-flex">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#f8f9fa] mb-4">Education</h1>
            <p className="text-[#adb5bd] text-lg max-w-2xl">My academic journey</p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#495057] md:-translate-x-1/2 rounded-full"></div>

          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row w-full mb-16 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="absolute left-6 md:left-1/2 top-8 w-5 h-5 rounded-full border-4 border-[#212529] bg-[#5b8fa8] md:-translate-x-1/2 z-10 -translate-x-1/2"></div>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-[45%] pl-16 md:pl-0"
                >
                  <div className="bg-[#343a40] border border-[#495057] rounded-2xl p-6 md:p-8 hover:border-[#5b8fa8]/60 transition-all duration-300">
                    <div className="mb-4">
                      <span className="inline-block bg-[#5b8fa8]/10 border border-[#5b8fa8]/30 text-[#5b8fa8] text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {item.degree}
                      </span>
                      <h3 className="text-2xl font-bold text-[#f8f9fa] leading-tight">{item.institution}</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[#6c757d] mb-4 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#5b8fa8]" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#5b8fa8]" />
                        {item.location}
                      </div>
                    </div>
                    <p className="text-[#adb5bd] leading-relaxed text-sm md:text-base">{item.description}</p>
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
