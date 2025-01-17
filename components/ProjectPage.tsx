"use client";

import { useEffect, useState } from "react";
import { GradientTitleBig } from "@/components/Titles";

const ProjectPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#FFFFFF");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center lg:mt-8">
        <div className="flex flex-col space-y-6 max-w-xl lg:max-w-none mx-auto">
          <div>
            <GradientTitleBig
              title="in construction..."
              fromColor="#e5e7eb"
              viaColor="#d1d5db"
              toColor="#9ca3af"
            />
            <p className="text-gray-400 mt-6 text-lg">
              This page is currently under construction. Soon it will showcase
              various projects and their detailed descriptions. Stay tuned for
              updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
