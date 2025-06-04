import { useState } from "react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import { ChevronDown, ChevronRight, Folder, Code } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="pt-12 sm:pt-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="mb-6 lg:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-green-400 text-2xl">// Real-Time Projects</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 sm:mb-6"
      >
        <div className="flex items-center">
          <Folder className="h-5 w-5 mr-2 text-yellow-400" />
          <span className="text-lg sm:text-xl text-white">Projects</span>
        </div>
      </motion.div>

      <div className="space-y-3 sm:space-y-4">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50"
          >
            <div
              className="flex sm:items-center p-3 sm:p-4 cursor-pointer hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleProject(index)}
            >
              {expandedProject === index ? (
                <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2" />
              ) : (
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2" />
              )}

              <Code className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />

              <div className="flex-1">
                <h3 className="text-white text-base sm:text-lg font-medium">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mt-1">
                  {project.description}
                </p>
              </div>
            </div>

            {expandedProject === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-3 sm:px-4 pb-3 sm:pb-4"
              >
                <div className="sm:border-l-2 border-gray-700 pl-3 sm:pl-4 ml-3 sm:ml-4 mt-1 sm:mt-2">
                  <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="list-disc">
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
