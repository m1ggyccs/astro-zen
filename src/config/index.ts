import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Andrei Miguel David — Work Portfolio",
  author: "Andrei Miguel David",
  description:
    "A Software Engineer based in Manila, Philippines. I specialize in production-ready software systems that integrate AI and data to solve real-world problems.",
  lang: "en",
  siteLogo: "/miggy-small.jpg",
  navLinks: [
    { text: "Education", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/amigsdavid/" },
    { text: "Github", href: "https://github.com/m1ggyccs" },
    { text: "Kaggle", href: "https://www.kaggle.com/andreimigueldavid" }
  ],
  socialImage: "/og-image.png",
  canonicalURL: "https://m1ggyccs.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Andrei Miguel David",
    specialty: "Software Engineer | AI & Data-Focused",
    summary:
      "Software Engineer based in Manila, Philippines. I specialize in production-ready software systems that integrate AI and data to solve real-world problems.",
    email: "amigsdavid@gmail.com",
  },
  experience: [
    // Example: Replace with your education, courses, or certifications
    {
       company: "Technological Institute of the Philippines",
       position: "Bachelor of Science in Computer Science",
       startDate: "2022",
       endDate: "2026",
       summary: [
         "Relevant coursework: Data Structures, Algorithms, Software Engineering, Machine Learning, Advance OOP.",
         "GPA: 1.75",
         "Vice President's Lister: 2022, Dean's Lister: 2023, 2024, 2025",
       ],
     },
     {
      company: "iACADEMY",
      position: "Senior High School – Software Development Track",
      startDate: "2019",
      endDate: "2021",
      summary: [
        "Focused on software development fundamentals including programming, basic system design, and application development.",
      ],
     },
  ],
  certifications: [
    {
      name: "Python Data Associate",
      issuer: "DataCamp",
      issuerLogo: "/datacamp.svg",
      year: "September2025",
      credentialId: "PDA0016746029284",
      link: "https://www.datacamp.com/certificate/PDA0016746029284",
    },
    {
      name: "Business Analysis & Process Management",
      issuer: "Coursera",
      issuerLogo: "/coursera.png",
      year: "June 2025",
      credentialId: "GBGZUROFZEKA",
      link: "https://www.coursera.org/account/accomplishments/verify/GBGZUROFZEKA",
    },
    {
      name: "Microsoft Artificial Intelligence Course (Azure AI Fundamentals)",
      issuer: "TESDA",
      issuerLogo: "/tesda.png",
      year: "June 2025",
      credentialId: "GBGZUROFZEKA",
      link: "https://www.linkedin.com/in/amigsdavid/details/certifications/1749368988702/single-media-viewer/?profileId=ACoAAFG-XRYBEa4IOaSVSg2AQCmRzPQZ3o0Mn2o",
    },
    
  ],
  projects: [
    {
      name: "Smart Budget Tracker",
      summary: "An AI-powered budget forecasting dashboard with multi-model analysis (Moving Average, Holt-Winters, LSTM).",
      linkPreview: "https://github.com/m1ggyccs/Smart-Budget-Tracking",
      linkSource: "https://github.com/m1ggyccs/Smart-Budget-Tracking",
      image: "/SBTHome.png",
    },
    {
      name: "Volley Vision",
      summary: "An AI-powered gesture recognition and scoring system for volleyball matches.",
      linkPreview: "https://volleyball-gesture-system.vercel.app",
      linkSource: "https://github.com/m1ggyccs/Volleyball-Gesture-System",
      image: "/VVHome.png",
    },
    {
      name: "Medical Certificate Issuance System",
      summary: "Simulated workflow optimization for clinic certificate processing using database-backed automation.",
      linkPreview: "https://github.com/m1ggyccs/Medical_Certificate_Issuance_System/",
      linkSource: "https://github.com/m1ggyccs/Medical_Certificate_Issuance_System",
      image: "/MCISHome.png",
    },
    {
      name: "M1G Laundry Tracker",
      summary: "Laundry management system with real-time order tracking and staff scheduling.",
      linkPreview: "https://m1g-laundry-tracker.vercel.app",
      linkSource: "https://github.com/m1ggyccs/M1G-Laundry-Tracker",
      image: "/LTHome.png",
    },
  ],
  skills: {
    categories: [
      {
        name: "Programming Languages",
        items: [
          "Python",
          "JavaScript",
          "Java",
          "C++",
          "SQL",
          "HTML",
          "CSS",
        ],
      },
      {
        name: "Tools and Frameworks",
        items: [
          "Next.js",
          "React.js",
          "Node.js",
          "Express.js",
          "Prisma ORM",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "NumPy",
          "Pandas",
          "Scikit-learn",
          "OpenCV",
          "Jupyter Notebook",
          "Git",
          "GitHub",
          "Vercel",
          "pnpm",
          "npm",
          "REST APIs",
        ],
      },
      {
        name: "Soft Skills",
        items: [
          "Analytical Thinking",
          "Critical Thinking",
          "Problem Solving",
          "Clear Communication",
          "Attention to Detail",
          "Adaptability",
          "Team Collaboration",
          "Ownership & Accountability",
          "Continuous Learning",
        ],
      },
    ],
  },
  about: {
    description: `
      Hi, I'm Andrei Miguel David, A Graduating Computer Science Student with a strong software engineering background 
      and a focus on building AI- and data-driven applications. I enjoy developing end-to-end systems that combine solid engineering 
      principles with intelligent, data-informed features to solve real-world problems.
    `,
    image: "/miggy-big.jpg",
  },
};

// #5755ff
