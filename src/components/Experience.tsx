import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="pt-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-green-400 text-2xl">
          // Professional Experience
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div>
          <span className="text-purple-400">function</span>
          <span className="text-yellow-300"> CareerTimeline</span>
          <span className="text-white">() </span>
          <span className="text-yellow-300">&#123;</span>
        </div>
        <div className="ml-4">
          <span className="text-purple-400">return</span>
          <span className="text-white"> (</span>
        </div>
      </motion.div>

      <div className="relative ml-8 mb-4">
        <div className="absolute top-0 bottom-0 left-[9px] w-0.5 bg-gray-700"></div>

        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="relative pl-6 mb-12"
          >
            <div className="absolute left-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900 z-10"></div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-xl font-bold text-white">
                {exp.company}
                <span className="text-gray-400 text-sm ml-2">{exp.period}</span>
              </div>

              <div className="text-blue-400 mb-4">{exp.position}</div>

              {exp.location && (
                <div className="text-gray-400 mb-4">
                  <Briefcase className="inline-block h-4 w-4 mr-2" />
                  {exp.location}
                </div>
              )}

              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="ml-4 text-white">);</div>
        <div className="text-yellow-300">&#125;</div>
      </motion.div>
    </section>
  );
};

export default Experience;
