import { motion } from "motion/react";
import { certifications } from "../constants";

const CertificationCard = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-storm to-indigo p-6 hover:-translate-y-2 transition-all duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Category Badge */}
      <div className="relative z-10 mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-aqua/20 to-mint/20 text-aqua border border-aqua/30">
          {certification.category}
        </span>
      </div>

      {/* Certificate Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-aqua transition-colors">
          {certification.title}
        </h3>
        
        <p className="text-sm text-neutral-300 mb-3 font-medium">
          {certification.provider}
        </p>
        
        <p className="text-sm text-neutral-400 leading-relaxed">
          {certification.description}
        </p>
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-aqua/10 to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Certificate Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certificates" className="c-space section-spacing">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading">My Certifications</h2>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 h-[1px] w-full" />
          <p className="subtext mt-6 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
            in various technologies and development practices.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-royal/20 to-lavender/20 border border-royal/30">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-royal to-lavender animate-pulse" />
            <span className="text-sm text-neutral-300 font-medium">
              Continuously learning and growing
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lavender to-royal animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;