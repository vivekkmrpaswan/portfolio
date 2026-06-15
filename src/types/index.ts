export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type HeroAction = {
  label: string;
  href: string;
  variant: "default" | "outline" | "secondary";
  external?: boolean;
};

export type AboutContent = {
  imageUrl: string;
  biography: string;
  summary: string;
  learningInterests: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
};

export type SkillCategory = {
  title: "Frontend" | "Backend" | "Database" | "Tools";
  skills: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  heroImage: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  challenges: string[];
  lessons: string[];
  screenshots: string[];
};
