"use client";
import Image from "next/image";
import trajectifylogo from "../../../public/images/trajectifi-logo.png";
import trajectword from "../../../public/images/trajectifi-logo-text.png";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutGrid as AssetsIcon,
  CreditCard as LoanIcon,
  Search as SearchIcon,
} from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true); // Default to collapsed
  const [isHovered, setIsHovered] = useState(false);

  // Auto-collapse on mobile, maintain collapsed state on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar expanded/collapsed state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Determine if sidebar should be expanded
  const expanded = !isCollapsed || isHovered;

  return (
    <aside
      className={`bg-[#080a1f] border-r border-gray-800 transition-all duration-300 flex flex-col ${
        expanded ? "w-60" : "w-16"
      } h-screen sticky top-0`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleSidebar}
    >
      <div className="p-4 flex items-center">
        <Link
          href="/"
          className="flex items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {expanded ? (
            <div className="flex items-center space-x-2">
              <Image
                src={trajectifylogo}
                width={40}
                height={40}
                alt="trajectify-logo"
              />
              <Image
                src={trajectword}
                width={70}
                height={40}
                alt="trajectify-logo-text"
              />
            </div>
          ) : (
            <Image
            src={trajectifylogo}
              width={40}
              height={40}
              alt="trajectify-logo"
            />
          )}
        </Link>
      </div>

      <div className="mt-6 px-3">
        {expanded && (
          <div className="relative mb-4" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search"
            />
          </div>
        )}

        <nav className="space-y-1">
          <SidebarItem
            href="/my_assets"
            icon={<AssetsIcon />}
            text="My Assets"
            expanded={expanded}
            active={true}
          />
          <SidebarItem
            href="/get-loan"
            icon={<LoanIcon />}
            text="Get a Loan"
            expanded={expanded}
          />
          <SidebarItem
            href="/give-loan"
            icon={<LoanIcon />}
            text="Give a Loan"
            expanded={expanded}
          />
        </nav>
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  expanded: boolean;
  active?: boolean;
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  expanded: boolean;
  active?: boolean;
}

function SidebarItem({
  href,
  icon,
  text,
  expanded,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center p-3 rounded-lg ${
        active ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {expanded ? (
        <div className="flex items-center w-full">
          <span className="text-xl">{icon}</span>
          <span className="ml-3">{text}</span>
        </div>
      ) : (
        <span className="text-xl flex justify-center">{icon}</span>
      )}
    </Link>
  );
}