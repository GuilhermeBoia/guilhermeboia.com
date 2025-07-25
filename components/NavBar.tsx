"use client";

import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ScrollContextType {
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollPosition: 0,
  setScrollPosition: () => {},
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <ScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};

interface NavItem {
  name: string;
  path: string;
  isExternal?: boolean;
}

interface NavLinkProps {
  item: NavItem;
}

const NavBar = () => {
  const [hovered, setHovered] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const pathname = usePathname();
  const { scrollPosition, setScrollPosition } = useContext(ScrollContext);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    {
      name: "Resume",
      path: "/docs/guilhermeboia-resume.pdf",
      isExternal: true,
    },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  };

  const setScrollLeft = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft = scrollPosition;
    }
  };

  const isCurrentPage = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  const NavLink = ({ item }: NavLinkProps) => {
    const isActive = isCurrentPage(item.path);
    const baseClasses = `relative text-sm uppercase tracking-wider px-4 py-2 inline-block transition-colors duration-200 ease-in-out whitespace-nowrap
      ${
        isActive
          ? 'text-white after:content-"" after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-0 after:w-5 after:h-px after:bg-white after:opacity-100'
          : "text-gray-400 hover:text-white"
      }`;

    const hoverEffect = !isTouchDevice
      ? {
          onMouseEnter: () => setHovered(item.name),
          onMouseLeave: () => setHovered(""),
        }
      : {};

    if (item.isExternal) {
      return (
        <Link
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...hoverEffect}
        >
          {!isTouchDevice && (
            <span
              className={`absolute inset-0 bg-gray-400 rounded-lg transition-all duration-300 ease-in-out transform 
                ${
                  hovered === item.name
                    ? "scale-100 opacity-10"
                    : "scale-90 opacity-0"
                }`}
            />
          )}
          {item.name}
        </Link>
      );
    }

    return (
      <Link href={item.path} className={baseClasses} {...hoverEffect}>
        {!isTouchDevice && (
          <span
            className={`absolute inset-0 bg-gray-400 rounded-lg transition-all duration-300 ease-in-out transform 
              ${
                hovered === item.name
                  ? "scale-100 opacity-10"
                  : "scale-90 opacity-0"
              }`}
          />
        )}
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="w-full py-2">
      <div className="flex justify-center">
        <div
          ref={setScrollLeft}
          onScroll={handleScroll}
          className="flex overflow-x-auto no-scrollbar max-w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <ul className="flex space-x-4 md:space-x-8 mx-auto px-4">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
