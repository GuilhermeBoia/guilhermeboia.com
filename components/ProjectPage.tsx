"use client";

import { useEffect, useState } from "react";
import { GradientTitleBig } from "@/components/Titles";
import ProjectCard from "./ProjectCard";
import { Code, Layout, Github, FileCode, LineChart } from "lucide-react";
import { projects } from "@/lib/projects";

const iconMap = {
  Code: Code,
  Layout: Layout,
  Github: Github,
  FileCode: FileCode,
  LineChart: LineChart,
};

const ProjectPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#34D399");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-12">
        {/* Header Section */}
        <div>
          <GradientTitleBig
            title="projects & work"
            fromColor="#34D399"
            viaColor="#2DD4BF"
            toColor="#22D3EE"
          />
          <p className="text-gray-400 mt-6 text-lg">
            What i have been working on lately
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              icon={iconMap[project.icon as keyof typeof iconMap]}
              href={project.href}
              isExternal={project.isExternal}
            />
          ))}
        </div>
        <p className="text-gray-400 align-middle text-lg">more to come...</p>
      </div>
    </div>
  );
};

export default ProjectPage;
