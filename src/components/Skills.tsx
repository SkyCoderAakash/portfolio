import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import { Code, Terminal, Database, Settings } from "lucide-react";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
  textColor: string;
  bgColor: string;
  delay: number;
}

const SkillCard = ({
  title,
  icon,
  skills,
  color,
  textColor,
  bgColor,
  delay,
}: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="lg:pl-6 sm:mb:8"
  >
    <div
      className={`border-l-4 ${color} bg-gray-800/50 rounded-r-lg p-4 sm:p-6`}
    >
      <div className="mb-3 sm:mb-4 flex items-center">
        <div className={`mr-3 ${textColor}`}>{icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + delay }}
            className={`inline-flex px-3 py-1 rounded-full text-xs sm:text-sm ${bgColor}/10 ${textColor} border ${color}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="pt-12 sm:pt-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="mb-6 lg:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-green-400 text-2xl">// Skills & Expertise</span>
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
          <span className="text-yellow-300"> SkillsExpertise</span>
          <span className="text-white">() </span>
          <span className="text-yellow-300">&#123;</span>
        </div>
        <div className="ml-2 sm:ml-4">
          <span className="text-purple-400">return</span>
          <span className="text-white"> (</span>
        </div>
      </motion.div>

      <div className="ml-4 sm:ml-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <SkillCard
            title="Frontend Development"
            icon={<Code className="h-5 w-5 sm:h-6 sm:w-6" />}
            skills={resumeData.skills.frontend}
            color="border-blue-500"
            textColor="text-blue-500"
            bgColor="bg-blue-500"
            delay={0.3}
          />

          <SkillCard
            title="Backend Development"
            icon={<Terminal className="h-5 w-5 sm:h-6 sm:w-6" />}
            skills={resumeData.skills.backend}
            color="border-green-500"
            textColor="text-green-500"
            bgColor="bg-green-500"
            delay={0.4}
          />

          <SkillCard
            title="Tools & Others"
            icon={<Settings className="h-5 w-5 sm:h-6 sm:w-6" />}
            skills={resumeData.skills.other}
            color="border-purple-500"
            textColor="text-purple-500"
            bgColor="bg-purple-500"
            delay={0.6}
          />

          <SkillCard
            title="Database"
            icon={<Database className="h-5 w-5 sm:h-6 sm:w-6" />}
            skills={resumeData.skills.database}
            color="border-yellow-500"
            textColor="text-yellow-500"
            bgColor="bg-yellow-500"
            delay={0.5}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-base"
      >
        <div className="ml-2 sm:ml-4 text-white">);</div>
        <div className="text-yellow-300">&#125;</div>
      </motion.div>
    </section>
  );
};

export default Skills;
