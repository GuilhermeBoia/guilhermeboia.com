import React, { useState } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  href: string;
  isExternal?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  icon: Icon,
  href,
  isExternal = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = () => (
    <article
      className="relative flex flex-col overflow-hidden rounded-2xl bg-[#08070b] border border-gray-800 p-6 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 bg-gray-800 rounded-lg">
          <Icon size={24} className="text-gray-300" />
        </div>
        <h3 className="text-lg font-medium text-white transition-colors duration-200">
          {title}
        </h3>
      </div>

      <p className="text-sm text-gray-400 transition-colors duration-200 mb-4">
        {description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <span
        className={`absolute -inset-4 bg-gray-400 rounded-4xl transition-all duration-300 ease-in-out transform 
          ${isHovered ? "scale-100 opacity-10" : "scale-90 opacity-0"}`}
      />
    </article>
  );

  if (isExternal) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <Link href={href} className="block w-full">
      <CardContent />
    </Link>
  );
};

export default ProjectCard;
