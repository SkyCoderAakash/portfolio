import { Github, Linkedin, Mail } from "lucide-react";
import resumeData from "../data/resumeData";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-800 text-center text-gray-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href={resumeData.personalInfo.github}
            className="hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={resumeData.personalInfo.linkedid}
            className="hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            className="hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p>
          ❤️ Built by {resumeData.personalInfo.name} © 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
