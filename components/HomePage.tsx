"use client";

import React, { useEffect, useState } from "react";
import { GradientTitleBig } from "@/components/Titles";
import Image from "next/image";
import { MapPin } from "lucide-react";

const Homepage = () => {
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
              title="Guilherme Boia"
              fromColor="#e5e7eb"
              viaColor="#d1d5db"
              toColor="#9ca3af"
            />
            <h2 className="text-xl font-medium text-gray-50">
              Undergrad Computer Science student
            </h2>
            <div className="text-sm text-gray-400 mt-2 flex items-center gap-1">
              <MapPin size={16} className="inline-block" />
              Universidade Federal de Campina Grande, UFCG
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed">
              I&apos;m a Software Engineer based in{" "}
              <span className="text-white">Brazil</span>, focused on creating
              impactful solutions that make a difference. With expertise in{" "}
              <span className="text-white">web development</span> and a keen eye
              for user experience, I bring ideas to life through clean,
              efficient and scalable code.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently, I&apos;m working on innovative projects using modern
              technologies like <span className="text-white">React</span>,{" "}
              <span className="text-white">Next.js</span>, and{" "}
              <span className="text-white">TypeScript</span>. I&apos;m
              passionate about creating performant and accessible web
              applications that provide great user experiences.
            </p>
          </div>
        </div>

        {mounted && (
          <div className="lg:flex hidden justify-center">
            <div className="relative">
              <Image
                src="/images/foto-perfil.jpeg"
                width={320}
                height={320}
                alt="Guilherme Boia"
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
