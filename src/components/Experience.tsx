import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import { MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="pt-12 sm:pt-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="mb-6 lg:mb-12"
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
        className="mb-2 sm:mb-4 text-base"
      >
        <div>
          <span className="text-purple-400">function</span>
          <span className="text-yellow-300"> CareerTimeline</span>
          <span className="text-white">() </span>
          <span className="text-yellow-300">&#123;</span>
        </div>
        <div className="ml-2 sm:ml-4">
          <span className="text-purple-400">return</span>
          <span className="text-white"> (</span>
        </div>
      </motion.div>

      <div className="relative ml-4 sm:ml-8 mb-4">
        <div className="absolute hidden sm:block top-0 bottom-0 left-[9px] w-0.5 bg-gray-700"></div>
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="relative sm:pl-6 mb-3 sm:mb:8"
          >
            <div className="absolute hidden sm:block left-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500 border-4 border-gray-900 z-10"></div>

            <div className="bg-gray-800 rounded-lg p-3 sm:p-6 border border-gray-700">
              <div className="text-lg sm:text-xl font-semibold text-white">
                {exp.company}
                <span className="text-gray-400 text-base sm:text-lg ml-2">
                  {exp.period}
                </span>
              </div>
              <div className="text-blue-400 text-base sm:text-lg mb-3 sm:mb-4">
                {exp.position}
              </div>
              {exp.location && (
                <div className="flex items-center text-gray-400 text-base sm:text-lg mb-3 sm:mb-4">
                  <MapPin className="inline-block aspect-square h-[14px] sm:h-[16px] sm:mr-2" />
                  {exp.location}
                </div>
              )}
              <div className="pl-3 sm:pl-4 ml-3 sm:ml-4 mt-1 sm:mt-2">
                <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="list-disc">
                      <span className="text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-base"
      >
        <div className="ml-2 sm:ml-4 text-white">);</div>
        <div className="text-yellow-300">&#125;</div>
      </motion.div>
    </section>
  );
};

export default Experience;
