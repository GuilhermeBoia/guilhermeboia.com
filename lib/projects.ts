interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  href: string;
  isExternal?: boolean;
}

export const projects: Project[] = [
  {
    title: "SISU Tracker",
    description:
      "Advanced analysis platform that allows Brazilian students to monitor their prospects for approval at universities. With real-time monitoring of SISU cutoff scores in all medical schools at Brazilian Federal Universities, students can analyze day-to-day trends and make a data-based decision about your application, maximizing the chances of securing a place in medical school.",
    technologies: ["React", "TypeScript", "Next.js", "Firebase"],
    icon: "LineChart",
    href: "https://sisumedway.vercel.app",
    isExternal: true,
  },
];

export function getAllProjects() {
  return projects;
}
