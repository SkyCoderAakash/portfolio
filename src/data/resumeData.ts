export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  details: string[];
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    other: string[];
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  objective?: string;
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "AAKASH PRAJAPATI",
    title: "Frontend Web Developer",
    location: "Ghaziabad, Uttar Pradesh",
    phone: "9310574997",
    email: "aakashprajapati3003@gmail.com",
  },
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Redux",
      "TypeScript",
      "Responsive Design",
      "REST API Integration",
      "React Query",
      "Framer Motion",
      "React Router",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "API Development",
      "JWT Authentication",
      "Multer for file uploads",
    ],
    database: ["MongoDB", "SQL", "Mongoose"],
    other: [
      "Git & GitHub",
      "Vercel",
      "Postman",
      "Figma (for UI handoff)",
      "VS Code",
      "Agile Methodology",
    ],
  },
  objective:
    "A passionate Frontend Web Developer with a strong foundation in modern JavaScript frameworks like React and Next.js. Experienced in crafting responsive, user-centric web applications with optimized performance and clean UI/UX. Skilled in collaborating with designers and backend teams to deliver robust, scalable solutions. Also experienced in full-stack development for building complete web applications.",
  education: [
    {
      degree: "Diploma in Full Stack Web Development",
      institution: "Technicla Academy",
      period: "2022 - 2023",
    },
    {
      degree: "Diploma in Engineering",
      institution: "G.B. Pant Institute of Technology",
      period: "2018 - 2021",
    },
    {
      degree: "Higher Secondary",
      institution: "D.P. Modern Public School",
      period: "2017 - 2018",
    },
  ],
  experience: [
    {
      position: "Frontend Web Developer (React.js)",
      company: "Codebrain Info Tech",
      location: "Surat",
      period: "June 2024 - Present",
      responsibilities: [
        "Developing scalable and reusable React components using Tailwind CSS and modern JavaScript practices.",
        "Translating UI/UX wireframes into high-quality responsive web interfaces.",
        "Integrating REST APIs using async/await and managing state using Redux and React Context.",
        "Optimizing web performance, improving loading times, and ensuring cross-browser compatibility.",
        "Working closely with designers and backend teams to maintain design consistency and functionality.",
      ],
    },
    {
      position: "Frontend Developer",
      company: "Orangus India Pvt. Ltd.",
      location: "New Delhi",
      period: "Aug 2023 - April 2024",
      responsibilities: [
        "Worked as a core frontend contributor on a MERN stack team, focusing primarily on React-based UI development.",
        "Built interactive frontend modules, implemented route-based navigation, and ensured responsive design across devices.",
        "Integrated backend REST APIs with frontend using Axios and Fetch.",
      ],
    },
  ],
  projects: [
    {
      name: "ERP System with POS Integration",
      description:
        "A retail management system designed to handle daily store operations, sales, and inventory through an integrated POS setup.",
      details: [
        "Developed key frontend modules using React and Tailwind CSS for managing users, products, departments, categories, billing, sales, discounts, and inventory.",
        "Built reusable components like forms, modals, and data tables with access control based on user roles.",
        "Improved user experience by applying performance optimizations such as lazy loading and reducing unnecessary re-renders.",
        "Worked closely with the backend team to integrate REST APIs and ensure smooth data handling between different modules.",
      ],
    },
    {
      name: "Banking Portal",
      description:
        "A commercial banking application focused on handling account opening requests and card transactions with access-based workflows.",
      details: [
        "Created UI screens for account opening, including both single entry and bulk upload through Excel files.",
        "Integrated backend APIs for managing card transactions and request flows related to account operations.",
        "Implemented validation logic, proper error handling, and conditionally rendered elements to keep the interface user-friendly.",
        "Handled role-based workflows in the UI—supporting Maker (request initiator), Checker (approver), and Super Admin (full access).",
        "Worked on a microservices-based setup, coordinating with different services to ensure consistent data flow.",
        "Focused on building clean, maintainable, and responsive UIs for a smoother user experience.",
      ],
    },
    {
      name: "Gaming and Sports Betting Platform",
      description:
        "An online platform offering casino games and sports betting features with cryptocurrency integration.",
      details: [
        "Contributed to frontend development using React and Tailwind CSS, improving the overall layout and usability of the site.",
        "Connected APIs for real-time game data, sports odds, and wallet transactions, handling both success and error states cleanly.",
        "Built interactive components like betting slips, game filters, and transaction histories to make the experience more dynamic.",
        "Ensured the interface was responsive and accessible, adapting well across different screen sizes and devices.",
      ],
    },
    {
      name: "Designer UI",
      description:
        "A portfolio-building platform where designers can showcase their work with flexible content blocks.",
      details: [
        "Built a responsive frontend using Next.js and Tailwind CSS that allowed users to customize their portfolios with sections like headings, images, and videos.",
        "Implemented dynamic form fields so users could easily structure and update content without code.",
        "Integrated JWT-based authentication and set up role-based access for managing content visibility.",
        "Focused on making API communication smooth, with proper error boundaries and loading states.",
      ],
    },
  ],
};

export default resumeData;
