import type { ContactLink, HeroAction, SocialLink } from "@/types";

export const siteConfig = {
  name: "Vivek Kumar",
  role: "Frontend Developer",
  description:
    "A modern, recruiter-friendly frontend developer portfolio built with Next.js.",
  introduction:
    "Results-driven Frontend Developer with 1 year of professional experience in MERN stack development and startup-based product development. Proficient in React, Next.js, TypeScript, JavaScript, and Supabase. Experienced in delivering solo and team-based projects with a focus on performance, usability, and maintainable code. Strong collaboration, problem-solving, and communication skills.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  resumeUrl: "/resume/Vivek_Kumar_Resume2026.pdf",
  profileImage: "/images/hero1.webp",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/vivekkmrpaswan",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivekkmrpaswan",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "vivekkmrpaswan@gmail.com",
    href: "mailto:vivekkmrpaswan@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/vivekkmrpaswan",
    href: "https://github.com/vivekkmrpaswan",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vivekkmrpaswan",
    href: "https://www.linkedin.com/in/vivekkmrpaswan",
  },
];

export const heroActions: HeroAction[] = [
  {
    label: "Resume",
    href: siteConfig.resumeUrl,
    variant: "default",
    external: true,
  },
  {
    label: "GitHub",
    href: socialLinks[0].href,
    variant: "secondary",
    external: true,
  },
  {
    label: "LinkedIn",
    href: socialLinks[1].href,
    variant: "secondary",
    external: true,
  },
];
