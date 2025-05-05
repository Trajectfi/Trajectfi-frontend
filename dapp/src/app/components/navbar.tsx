"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search as SearchIcon, 
  Bell as BellIcon, 
  HelpCircle as HelpIcon 
} from "lucide-react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <div className="flex-1"></div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-800">
          <BellIcon className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-800">
          <HelpIcon className="w-6 h-6" />
        </button>
        <Link href="#" className="ml-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
            Connect Wallet
          </button>
        </Link>
      </div>
    </nav>
  );
}