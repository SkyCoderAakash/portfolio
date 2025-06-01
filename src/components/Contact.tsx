import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-10 px-4 max-w-6xl mx-auto">
      <motion.div
        className="mb-12"
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
        className="mb-8"
      >
        <div>
          <span className="text-purple-400">function</span>
          <span className="text-yellow-300"> ContactMe</span>
          <span className="text-white">() </span>
          <span className="text-yellow-300">&#123;</span>
        </div>
        <div className="ml-4">
          <span className="text-purple-400">return</span>
          <span className="text-white"> (</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gray-800 rounded-lg p-6 border border-gray-700 ml-8 mb-8"
      >
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
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
          <p className="text-gray-400">
            Ready to collaborate on your next project
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mb-6">
          <h4 className="text-gray-400 mb-4 text-sm">
            # Git config information
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="mb-2 flex">
                <span className="text-green-400 mr-2">user.name</span>
                <span className="text-white">
                  {resumeData.personalInfo.name}
                </span>
              </div>

              <div className="mb-2 flex">
                <span className="text-green-400 mr-2">user.email</span>
                <span className="text-white">
                  {resumeData.personalInfo.email}
                </span>
              </div>
            </div>

            <div>
              <div className="mb-2 flex">
                <span className="text-green-400 mr-2">user.role</span>
                <span className="text-white">
                  {resumeData.personalInfo.title}
                </span>
              </div>

              <div className="mb-2 flex">
                <span className="text-green-400 mr-2">user.location</span>
                <span className="text-white">
                  {resumeData.personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-400 mb-4 text-sm">
            # Preferred communication channels
          </h4>

          <div className="flex space-x-4">
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-md transition-colors flex items-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email
            </a>

            <a
              href="https://github.com/skyCoderAakash"
              target="_blank"
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-md transition-colors flex items-center"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aakashprajapati1001"
              target="_blank"
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-md transition-colors flex items-center"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="ml-4 text-white">);</div>
        <div className="text-yellow-300">&#125;</div>
      </motion.div>
    </section>
  );
};

export default Contact;
