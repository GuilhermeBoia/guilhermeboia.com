"use client";

import { useEffect, useState } from "react";
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
              <span className="text-white">Hey!</span> I&apos;m a Software
              Engineer based in <span className="text-white">Brazil</span>,
              passionate about creating impactful solutions in web development,
              artificial intelligence, and competitive programming. I love
              building innovative tools and sharing knowledge with the tech
              community.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I built this website as a{" "}
              <span className="text-white">personal project</span> to share my
              thoughts, showcase my work, and document my journey in tech. Here
              you&apos;ll find my projects, blog posts about things I&apos;m
              learning. Feel free to explore and reach out if you want to chat!
            </p>
          </div>

        </div>

        {mounted && (
          <div className="lg:flex hidden justify-center items-center">
            <div className="relative w-96 h-96">
              <Image
                src="/images/profile.jpeg"
                alt="Guilherme Boia"
                fill
                className="rounded-2xl object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
