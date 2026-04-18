import { Achievement, Education, Experience, Project, SkillCategory } from './types';

export const RESUME_DATA = {
  name: "Sneha Bilala", // Placeholder from resume
  role: "Full Stack & Flutter Developer",
  contact: {
    phone: "+91 9098003353",
    email: "bilalasneha20@gmail.com",
    linkedin: "https://www.linkedin.com/in/sneha-bilala/",
    github: "https://github.com/Sneha-Jain-Bilala"
  },
  summary: "I am Sneha Bilala, Innovative technology enthusiast with a strong foundation in Full Stack Web Development and Flutter. Proven track record in building real-time IoT solutions and responsive web platforms. Winner of multiple hackathons and competitions.",
};

export const EDUCATION: Education[] = [
  {
    school: "Shri Govindram Seksaria Institute of Technology and Science",
    degree: "B.Sc in Information Technology",
    year: "Exp. Aug 2027",
    grade: "GPA: 8.33 / 10.00",
    location: "Indore, Madhya Pradesh"
  },
  {
    school: "St. Thomas Higher Secondary School",
    degree: "Class 12",
    year: "2022",
    grade: "91.25%",
    location: "Barnagar, Ujjain"
  },
  {
    school: "St. Thomas Higher Secondary School",
    degree: "Class 10",
    year: "2020",
    grade: "92.6%",
    location: "Barnagar, Ujjain"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "GroOth",
    role: "Flutter Developer",
    period: "June 2025 – December 2025",
    description: [
      "Delivered real-time soil health insights to farmers by building a plug-and-play IoT soil sensor mobile app; implemented Bluetooth/device pairing, streaming telemetry, and alerting to enable personalized crop and fertilizer recommendations."
    ]
  },
  {
    company: "E-Notebook",
    role: "Web Developer",
    period: "June 2025 – July 2025",
    description: [
      "Collaborated in a 10-member team to design and ship a browser-based e-notebook for students, resulting in digitized experiment logs with templates, version control, and secure access, targeting future rollout to PhD workflows."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "SereniSpa",
    tech: ["Flutter", "Rest API", "Supabase", "Firebase Auth"],
    description: "Built a responsive salon-booking marketplace enabling users to discover services, compare prices across parlours, and complete checkout with integrated payments and email confirmations, reducing friction in offline booking.",
    link: "https://github.com/Sneha-Jain-Bilala/SereniSpa",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    name: "1Password",
    tech: ["Flutter", "Rest API", "Supabase"],
    description: "Built a secure password manager using Flutter with biometric authentication for protected access. Integrated Supabase for secure storage and real-time data handling. The app supports storing credentials, notes, ATM cards, and addresses with structured data models and secure client-server communication.",
    link: "https://github.com/Sneha-Jain-Bilala/1Password",
    image: "https://picsum.photos/600/400?random=2"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "C", "JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    category: "Technologies",
    skills: ["ReactJS", "Next.js", "Flutter", "Bootstrap", "Git"]
  },
  {
    category: "Concepts",
    skills: ["Data Structures", "DBMS", "OS", "Agile", "Linux Shell"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Selected for Round 2 in Google Big Code Challenge 2026",
    description: "Ranked among the top 15,000 participants nationwide to qualify for the second round, which involved solving rigorous algorithmic challenges testing core Data Structure & Algorithms."
  },
  {
    title: "100 Days Badge on LeetCode",
    description: "Earned the 100 Days Badge on LeetCode, showcasing consistent daily practice and strong problem-solving ability."
  },
  {
    title: "Shortlisted for Smart India Hackathon",
    description: "Among the top selected teams of our college for proposing an innovative tech-based solution to a real-world problem."
  },
  {
    title: "1st Position in War of Words",
    description: "Secured first place in a competitive debate competition, showcasing strong critical thinking."
  }
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];