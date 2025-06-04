import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="mb-6 lg:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-green-400 text-2xl">// Contact Me</span>
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
          <span className="text-yellow-300"> ContactMe</span>
          <span className="text-white">() </span>
          <span className="text-yellow-300">&#123;</span>
        </div>
        <div className="ml-2 sm:ml-4">
          <span className="text-purple-400">return</span>
          <span className="text-white"> (</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gray-800 rounded-lg p-2.5 sm:p-6 border border-gray-700 ml-4 sm:ml-8 mb-4"
      >
        <div className="">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 flex items-center">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mr-2"
            >
              🔄
            </motion.div>
            Let's Connect
          </h3>
        </div>

        <div className="bg-gray-900 rounded-lg p-2.5 sm:p-6 mb-4 sm:mb-6">
          <h4 className="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-sm">
            # Git config information
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <div className="mb-1 sm:mb-2 flex">
                <span className="text-green-400 mr-2 text-xs sm:text-sm">
                  user.name
                </span>
                <span className="text-white text-xs sm:text-sm">
                  {resumeData.personalInfo.name}
                </span>
              </div>

              <div className="mb-1 sm:mb-2 flex">
                <span className="text-green-400 mr-2 text-xs sm:text-sm">
                  user.email
                </span>
                <span className="text-white text-xs sm:text-sm">
                  {resumeData.personalInfo.email}
                </span>
              </div>
            </div>

            <div>
              <div className="mb-1 sm:mb-2 flex">
                <span className="text-green-400 mr-2 text-xs sm:text-sm">
                  user.role
                </span>
                <span className="text-white text-xs sm:text-sm">
                  {resumeData.personalInfo.title}
                </span>
              </div>

              <div className="mb-1 sm:mb-2 flex">
                <span className="text-green-400 mr-2 text-xs sm:text-sm">
                  user.location
                </span>
                <span className="text-white text-xs sm:text-sm">
                  {resumeData.personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
            # Preferred communication channels
          </h4>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 sm:p-3 rounded-md transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Email
            </a>

            <a
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 sm:p-3 rounded-md transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              GitHub
            </a>

            <a
              href={resumeData.personalInfo.linkedid}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 sm:p-3 rounded-md transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>

      {/* Function closure */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-base"
      >
        <div className="ml-2 sm:ml-4 text-white">);</div>
        <div className="text-yellow-300">&#125;</div>
      </motion.div>
    </section>
  );
};

export default Contact;
