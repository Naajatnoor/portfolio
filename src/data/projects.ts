
export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
  challenges: string;
  learning: string;
};

export const projects: Project[] = [
  {
    slug: "workout-log",
    title: "Workout Log",
    category: "Web Application",
    description:
      "A workout logging application designed to help users record and manage their workout activities.",
    image: "/projects/workout.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://workout-log-liard.vercel.app/",
    githubUrl: "https://github.com/Naajatnoor/workout-log",
    features: [
      "Organized workout tracking interface",
      "Responsive user interface",
      "Reusable React components",
    ],
    challenges:
      "Designing a clear interface and organizing components for a maintainable application.",
    learning:
      "Improved my understanding of React components, TypeScript, responsive layouts, and UI design.",
  },
  {
    slug: "devstack-builder",
    title: "DevStack Builder",
    category: "Frontend Development",
    description:
      "An interactive technology stack builder where users can explore development technologies and create their own stack.",
    image: "/projects/devconf.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://devstack-sooty-gamma.vercel.app/",
    githubUrl: "https://github.com/Naajatnoor/A05-DevStack",
    features: [
      "Browse technology cards",
      "Build a personalized tech stack",
      "Add and remove technologies",
      "Responsive card layout",
    ],
    challenges:
      "Managing selected technologies in React state and keeping the stack synchronized with user interactions.",
    learning:
      "Practiced state management, props, TypeScript interfaces, array methods, and component composition.",
  },
  {
    slug: "devconf-2026",
    title: "DevConf 2026",
    category: "Conference Website",
    description:
      "A conference landing page presenting event information through a structured and engaging web interface.",
    image: "/projects/Screenshot_1.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://naajatnoor.github.io/A01-DevConf2026/",
    githubUrl: "https://github.com/Naajatnoor/A01-DevConf2026",
    features: [
      "Event-focused landing page",
      "Structured content sections",
      "Responsive visual layout",
    ],
    challenges:
      "Organizing page sections and maintaining a consistent visual hierarchy.",
    learning:
      "Strengthened my HTML structure, CSS styling, and JavaScript fundamentals.",
  },
  {
    slug: "fifa-world-cup",
    title: "FIFA World Cup",
    category: "Frontend Practice",
    description:
      "A football-themed frontend project focused on page layouts, styling, and an engaging visual experience.",
    image: "/projects/fifaworld.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://naajatnoor.github.io/Practice-2/",
    githubUrl: "",
    features: [
      "Football-inspired design",
      "Organized content layout",
      "Frontend styling practice",
    ],
    challenges:
      "Creating a balanced page layout and presenting content clearly.",
    learning:
      "Practiced CSS layout techniques and foundational frontend development.",
  },
  {
    slug: "brew-coffee",
    title: "Brew Coffee",
    category: "Frontend Practice",
    description:
      "A coffee-themed website created to practice frontend fundamentals and clean, visually appealing web layouts.",
    image: "/projects/breqcorner.png",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://naajatnoor.github.io/Practice-1/",
    githubUrl: "",
    features: [
      "Coffee-inspired visual design",
      "Clean content layout",
      "CSS styling and spacing",
    ],
    challenges:
      "Building a consistent visual style using foundational web technologies.",
    learning:
      "Improved my understanding of HTML structure, CSS styling, and spacing.",
  },
];
