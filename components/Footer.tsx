"use client";
import React, { useState } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [hovered, setHovered] = useState("");

  const socialIcons = [
    {
      name: "email",
      icon: Mail,
      link: "/contact",
      isInternal: true,
    },
    {
      name: "linkedin",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/guilhermeboia/",
      isInternal: false,
    },
    {
      name: "github",
      icon: Github,
      link: "https://github.com/GuilhermeBoia",
      isInternal: false,
    },
    {
      name: "instagram",
      icon: Instagram,
      link: "https://www.instagram.com/guilhermeboia",
      isInternal: false,
    },
  ];

  const IconComponent = ({ item }) => (
    <item.icon
      size={24}
      className={`transition-colors duration-200 ease-in-out ${
        hovered === item.name ? "text-white" : "text-gray-400"
      }`}
    />
  );

  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          {socialIcons.map((item) => (
            <li key={item.name} className="relative">
              {item.isInternal ? (
                <Link
                  href={item.link}
                  className="inline-block p-2 transition-colors duration-200 ease-in-out"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered("")}
                >
                  <IconComponent item={item} />
                </Link>
              ) : (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 transition-colors duration-200 ease-in-out"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered("")}
                >
                  <IconComponent item={item} />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
