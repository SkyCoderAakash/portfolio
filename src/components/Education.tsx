import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import { Terminal } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="pt-12 sm:pt-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="mb-6 lg:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-green-400 text-2xl">// Education</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden"
      >
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <Terminal className="h-4 w-4 mr-2 text-gray-400" />
          <span className="text-gray-200 text-lg">education.sh</span>
          <div className="ml-auto flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="p-4 sm:p-6 text-gray-300 font-mono text-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-4 text-lg"
          >
            <span className="text-green-400">$</span> ls -la education/
          </motion.div>

          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              className="mb-6 pl-4 border-l-2 border-blue-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <span className="text-yellow-300 text-lg font-semibold">
                  {edu.degree}
                </span>
                <span className="text-gray-500 text-base">{edu.period}</span>
              </div>
              <div className="text-blue-400 text-base">{edu.institution}</div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="text-base"
          >
            <span className="text-green-400">$</span>{" "}
            <span className="animate-pulse">_</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
