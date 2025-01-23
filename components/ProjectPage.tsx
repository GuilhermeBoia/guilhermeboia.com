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
      <div className="gap-6 lg:gap-8 items-center lg:mt-8">
        <div className="flex flex-col space-y-6 max-w-xl lg:max-w-none mx-auto">
          <div className="space-y-8 sm:space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <GradientTitleBig
                title="projects & work."
                fromColor="#34D399"
                viaColor="#2DD4BF"
                toColor="#22D3EE"
              />
              <p className="text-gray-400 text-lg">
                Here are some of the projects I&apos;ve worked on recently.
                Click on the cards to learn more.
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

              <div className="flex justify-center border-t border-gray-800 pt-6">
                <p className="text-gray-400 text-lg italic">
                  more projects coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
