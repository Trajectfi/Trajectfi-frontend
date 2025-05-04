"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const location = usePathname();
  const navigation: NavItem[] = [
    { name: "My Assets", icon: <MdDashboard />, path: "/" },
    { name: "Get Loan", icon: <MdDashboard />, path: "/get_loan" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 shadow-lg transform transition-transform lg:transform-none lg:static
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      <div className="flex flex-col h-full border-r border-[#121428]">
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-4  border-gray-200">
          <Link href="/" className="flex items-center">
            <img src="/trajectfilogo.svg" alt="Logo" className="h-8 w-auto" />
          </Link>

          <button
            className="lg:hidden text-gray-500"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <IoIosClose className="w-6 h-6" />
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search to filter"
            className="w-full bg-[#121428] border-none rounded-lg py-2 px-8 text-sm"
          />
          <svg
            className="absolute left-2 top-2.5 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  flex items-center px-2 py-2 mb-3 text-sm font-medium rounded-md transition-colors
                  ${
                    isActive
                      ? "text-blue-600 bg-[#121428]"
                      : "text-white hover:text-gray-900 hover:bg-gray-100"
                  }
                `}
              >
                <span className="material-icons mr-3 flex-shrink-0">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
