import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Terminal } from "lucide-react";

interface TabProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ name, isActive, onClick }: TabProps) => (
  <div
    onClick={onClick}
    className={`flex items-center px-4 py-2 cursor-pointer border-t-2 ${
      isActive
        ? "border-t-blue-500 bg-gray-900"
        : "border-t-transparent hover:bg-gray-800"
    }`}
  >
    {name.endsWith(".tsx") ? (
      <Code className="h-4 w-4 mr-2 text-blue-400" />
    ) : (
      <Terminal className="h-4 w-4 mr-2 text-blue-400" />
    )}
    <span className={`text-sm ${isActive ? "text-gray-100" : "text-gray-400"}`}>
      {name}
    </span>
  </div>
);

const FileExplorer = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabs = [
    "intro.tsx",
    "experience.tsx",
    "skills.tsx",
    "certifications.tsx",
    "contact.tsx",
  ];

  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center px-4 text-gray-600 dark:text-gray-400">
        <Terminal className="h-4 w-4 mr-2" />
        <span className="text-sm">Portfolio</span>
      </div>
      <div className="flex">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            name={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
    </div>
  );
};

const LineNumbers = ({ count }: { count: number }) => (
  <div className="flex flex-col items-end pr-4 text-gray-400 dark:text-gray-500 text-sm select-none">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="h-6 leading-6">
        {index + 1}
      </div>
    ))}
  </div>
);

interface CodeEditorLayoutProps {
  children: React.ReactNode;
  lineCount?: number;
}

const CodeEditorLayout = ({
  children,
  lineCount = 205,
}: CodeEditorLayoutProps) => {
  const [activeTab, setActiveTab] = useState("intro.tsx");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono">
      {/* <FileExplorer activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      <div className="flex">
        {/* <LineNumbers count={lineCount} /> */}
        <motion.div
          className="py-4 flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default CodeEditorLayout;
