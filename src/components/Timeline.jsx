import { motion } from 'framer-motion';
import timeline from '../data/timeline';

export default function Timeline() {
  return (
    <section id="education" className="bg-[#212529] py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f8f9fa] mb-3">Journey</h2>
          <div className="w-20 h-1 bg-amber-400 rounded-full mx-auto mb-4"></div>
          <p className="text-[#adb5bd] text-lg">Education & milestones</p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#495057] md:-translate-x-1/2"></div>

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex w-full mb-10 ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-10 md:pl-0`}>
                <div className="absolute left-2 md:left-1/2 top-6 w-4 h-4 rounded-full border-4 border-[#212529] -translate-x-1/2 md:-translate-x-1/2 z-10 bg-amber-400"></div>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-[45%] bg-[#343a40] border border-[#495057] rounded-2xl p-5"
                >
                  <div className="bg-amber-400/10 text-amber-400 text-xs px-3 py-1 rounded-full w-fit mb-3 font-medium border border-amber-400/30">
                    {item.duration}
                  </div>
                  <h3 className="text-[#f8f9fa] font-semibold text-base leading-snug">{item.institution}</h3>
                  <p className="text-[#6c757d] text-xs mt-1">{item.degree}</p>
                  <p className="text-[#adb5bd] text-sm mt-3 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
