"use client";
import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
interface HeaderProps {
  toggleSidebar: () => void;
}
const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-transparent border-b border-[#121428] sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Left section: Sidebar toggle and mobile logo */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="text-gray-500"
            onClick={toggleSidebar}
            aria-label="Open sidebar"
          >
            <IoIosMenu />
          </button>
        </div>

        {/* Middle section: Search bar */}
        <div className="flex-1 mx-4 max-w-2xl">
          <form className="relative">
            <input
              type="text"
              //   placeholder="Search to filter"
              className="w-full bg-[#121428] border-none  focus:outline-none  rounded-lg  py-2 px-4 text-sm"
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
          </form>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#121428] rounded-full p-[6px]">
            <CiSearch size={24} className="font-extrabold" />
          </div>
          <div className="bg-[#121428] rounded-full p-[6px]">
            <CiBellOn size={24} className="font-extrabold" />
          </div>
          <div className="bg-[#121428] rounded-full p-[6px]">
            <FaRegQuestionCircle size={24} className="font-extrabold" />
          </div>
          <button
            type="button"
            className="hidden lg:flex items-center px-4 py-2 text-sm font-medium text-white bg-[#121428] rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
