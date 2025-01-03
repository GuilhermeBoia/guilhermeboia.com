"use client";

import { useEffect, useState } from "react";
import { GradientTitleBig } from "@/components/Titles";

const ProjectPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#FF69B4");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white">
      <div className="max-w-3xl w-full space-y-12">
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <div>
            <GradientTitleBig
              title="Guilherme Boia"
              fromColor="#FF69B4"
              viaColor="#DA70D6"
              toColor="#9370DB"
            />
            <p className="text-gray-400 mt-4 text-lg">
              Software Engineer passionate about building great products and
              sharing knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
