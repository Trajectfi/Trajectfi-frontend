"use client";
import { MyAssets, ConnectWallet } from "@/components";
import { useState } from "react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="">
      <button
        onClick={toggleSidebar}
        type="button"
        className="hidden lg:flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-700  rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Toogle
      </button>
      {isSidebarOpen ? <MyAssets /> : <ConnectWallet />}
    </div>
  );
};

export default Home;
