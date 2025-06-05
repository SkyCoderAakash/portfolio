import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textToType = resumeData.objective || "";

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, textToType]);

  return (
    <section id="home" className="pt-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 lg:mb-12"
      >
        <span className="text-green-400 text-2xl">
          // Frontend Web Developer
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-6 md:mb-12 text-base"
      >
        <div className="">
          <span className="text-blue-400">const developer</span>
          <span className="text-white"> = </span>
          <span className="text-yellow-300">&#123;</span>
        </div>
        <div className="ml-2 sm:ml-4">
          <span className="text-blue-400">name:</span>
          <span className="text-green-300">
            {" "}
            &#39;{resumeData.personalInfo.name}&#39;
          </span>
          <span className="text-yellow-300">,</span>
        </div>
        <div className="ml-2 sm:ml-4">
          <span className="text-blue-400">role:</span>
          <span className="text-green-300">
            {" "}
            &#39;{resumeData.personalInfo.title}&#39;
          </span>
        </div>
        <div className="text-yellow-300">&#125;</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6 md:mb-12 text-base"
      >
        <div>
          <span className="text-purple-400">function</span>
          <span className="text-yellow-300"> transformIdeas</span>
          <span className="text-white">() </span>
          <span className="text-yellow-300">&#123;</span>
        </div>
        <div className="ml-2 sm:ml-4">
          <span className="text-purple-400">return</span>
          <span className="text-green-300">
            {" "}
            &#39;Scalable applications with clean, efficient code and modern
            technologies&#39;
          </span>
          <span className="text-white">;</span>
        </div>
        <div className="text-yellow-300">&#125;</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mb-6 md:mb-12 text-gray-300 text-base"
      >
        <div className="mb-2 text-lg sm:text-xl text-white">/* About me */</div>
        <div>
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <a
          href="#experience"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center text-sm sm:text-base"
        >
          [] View Experience
        </a>
        <a
          href="#contact"
          className="border border-gray-700 hover:border-gray-500 px-4 py-2 rounded flex items-center justify-center text-sm sm:text-base"
        >
          # Contact Me <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
