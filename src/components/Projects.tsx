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
    <section id="projects" className="pt-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="mb-12"
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
        className="mb-8"
      >
        <div className="flex items-center mb-6">
          <Folder className="h-5 w-5 mr-2 text-yellow-400" />
          <span className="text-xl text-white">Projects</span>
        </div>
      </motion.div>

      <div className="space-y-4">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900"
          >
            <div
              className="flex items-center p-4 cursor-pointer hover:bg-gray-800 transition-colors"
              onClick={() => toggleProject(index)}
            >
              {expandedProject === index ? (
                <ChevronDown className="h-5 w-5 text-gray-400 mr-2" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-400 mr-2" />
              )}

              <Code className="h-5 w-5 text-blue-400 mr-2" />

              <div className="flex-1">
                <h3 className="text-white font-medium">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>

            {expandedProject === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 pb-4"
              >
                <div className="border-l-2 border-gray-700 pl-4 ml-4 mt-2">
                  <ul className="space-y-2 text-gray-300">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="list-disc ml-4">
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
