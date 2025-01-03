"use client";

import React, { useEffect, useState } from "react";
import { GradientTitleBig } from "@/components/Titles";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center lg:mt-8 lg:ml-8">
        <div className="flex flex-col space-y-6 max-w-2xl xl:max-w-none mx-auto">
          <div>
            <GradientTitleBig
              title="Guilherme Boia"
              fromColor="#e5e7eb"
              viaColor="#d1d5db"
              toColor="#9ca3af"
            />
            <h2 className="text-xl font-medium text-gray-50">
              Undergrad Computer Science student at{" "}
              <Link
                href="https://www.computacao.ufcg.edu.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block items-center space-x-2 mt-4"
              >
                UFCG <MapPin className="inline-block -mt-2" />
              </Link>
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed">
              <span className="text-white">Olá!</span> I&apos;m a Software
              Engineer based in <span className="text-white">Brazil</span>,
              focused on creating impactful solutions that make a difference.
              With expertise in{" "}
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

        <div className="hidden xl:flex justify-center mr-8">
          <div className="relative">
            <Image
              src="/images/foto-perfil.jpeg"
              width={360}
              height={360}
              alt="Guilherme Boia"
              className="rounded-2xl object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
