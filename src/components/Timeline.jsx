import { motion } from 'framer-motion';
import timeline from '../data/timeline';

export default function Timeline() {
  return (
    <section id="education" className="bg-[#0a0a0f] py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-[Space_Grotesk] mb-3">Journey</h2>
          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mb-4"></div>
          <p className="text-white/70 text-lg">Education & milestones</p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          
          {/* Vertical Center Line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2"></div>

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            
            let borderClass = "";
            let dotColor = "";
            let shadowClass = "";
            
            if (item.type === "education") {
              borderClass = "border-cyan-400/30";
              dotColor = "bg-cyan-400";
            } else if (item.type === "milestone") {
              borderClass = "border-purple-500/30";
              dotColor = "bg-purple-500";
            } else if (item.type === "current") {
              borderClass = "border-green-400/30";
              dotColor = "bg-green-400";
              shadowClass = "shadow-[0_0_15px_rgba(74,222,128,0.2)]";
            }

            return (
              <div 
                key={index} 
                className={`relative flex w-full mb-10 ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-10 md:pl-0`}
              >
                {/* Center Dot */}
                <div 
                  className={`absolute left-2 md:left-1/2 top-6 w-4 h-4 rounded-full border-4 border-[#0a0a0f] -translate-x-1/2 md:-translate-x-1/2 z-10 ${dotColor}`}
                ></div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full md:w-[45%] bg-white/5 backdrop-blur-md border ${borderClass} rounded-2xl p-5 ${shadowClass}`}
                >
                  <div className="bg-white/10 text-cyan-400 text-xs px-3 py-1 rounded-full w-fit mb-3 font-medium">
                    {item.year}
                  </div>
                  <h3 className="text-white font-semibold text-base leading-snug">{item.title}</h3>
                  <p className="text-white/50 text-xs mt-1">{item.institution}</p>
                  <p className="text-white/70 text-sm mt-3 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
