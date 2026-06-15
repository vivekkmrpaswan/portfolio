import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Watch Together",
    slug: "watch-together",
    summary:
      "A real-time collaborative platform where users join rooms and watch YouTube videos in sync with shared playback controls.",

    category: "Full Stack",

    heroImage: "/images/watch-together.png",

    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Mongoose", "JWT"],

    liveDemoUrl: "https://watch-2-gether.vercel.app/",
    githubUrl: "https://github.com/whyshashi/Video_Sync_App",

    featured: true,

    overview:
      "Watch Together enables multiple users to join a shared room and watch YouTube videos with synchronized playback.",

    problem:
      "Watching videos remotely often results in playback delays and inconsistent viewing experiences between participants.",

    solution:
      "Implemented a Socket.io-based synchronization layer that broadcasts playback state changes to all connected users in real time.",

    architecture:
      "Frontend built with React. Backend built with Node.js and Socket.io. MongoDB stores room and user information while JWT handles authentication.",

    keyFeatures: [
      "Real-time synchronized playback",
      "Room-based collaboration",
      "JWT authentication",
      "YouTube video sharing",
      "Live user participation",
    ],

    challenges: [
      "Keeping playback synchronized across clients",
      "Managing socket reconnections",
      "Handling room state updates reliably",
    ],

    lessons: [
      "Learned real-time communication patterns",
      "Improved understanding of WebSockets",
      "Gained experience designing collaborative applications",
    ],

    screenshots: [],
  },

  {
    title: "Code Visualizer",

    slug: "code-visualizer",

    summary:
      "An interactive algorithm visualization tool that helps users understand sorting and algorithm execution through animations.",

    category: "Frontend",

    heroImage: "/images/code-visualizer.png",

    techStack: ["HTML", "CSS", "JavaScript"],

    liveDemoUrl: "https://incomparable-jalebi-1ecef7.netlify.app/",

    githubUrl: "https://github.com/sayanroy-bash/Code-Visualizer",

    featured: true,

    overview:
      "A browser-based platform that visually demonstrates how algorithms execute step-by-step.",

    problem:
      "Many learners struggle to understand algorithms through static code examples alone.",

    solution:
      "Created interactive visualizations that animate algorithm behavior and execution flow.",

    architecture:
      "Built entirely with HTML, CSS, and JavaScript using DOM manipulation and animation logic.",

    keyFeatures: [
      "Algorithm animations",
      "Interactive controls",
      "Step-by-step execution",
      "Educational visualization",
    ],

    challenges: [
      "Designing smooth animations",
      "Keeping visual state synchronized with algorithm state",
    ],

    lessons: [
      "Improved JavaScript fundamentals",
      "Learned animation-driven UI design",
      "Developed stronger algorithm understanding",
    ],

    screenshots: [],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
