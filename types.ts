export interface Education {
  school: string;
  degree: string;
  year: string;
  grade?: string;
  location: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  tech: string[];
  description: string;
  link?: string;
  image: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
}