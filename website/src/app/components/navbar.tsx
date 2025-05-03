"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../../public/images/trajectifi-logo.png";
import Logotext from "../../../public/images/trajectifi-logo-text.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={` py-2 fixed w-full z-50 transition-all duration-300 border-b border-[#003162] ${scrolled ? 'bg-opacity-90 backdrop-blur-sm' : 'bg-opacity-0'} bg-gray-900`}>
      <div className="sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <Image src={Logo} width={40} height={40} alt="logo" />
              <Image src={Logotext} width={80} height={40} alt="logo" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between gap-16 w-full md:w-auto">
          <a href="#" className="text-white hover:text-purple-300 py-2 text-sm font-medium">Home</a>
            <a href="#" className="text-white hover:text-purple-300 py-2 text-sm font-medium">How It Works</a>
            <a href="#" className="text-white hover:text-purple-300 py-2 text-sm font-medium">Get a Loan</a>
            <a href="#" className="text-white hover:text-purple-300 py-2 text-sm font-medium">Give a Loan</a>
            <a href="#" className="text-white hover:text-purple-300 py-2 text-sm font-medium">Rewards</a>
            <a href="#" className="text-white hover:text-purple-300 py-2 text-sm font-medium">Community</a>
            <a href="#" className="text-white hover:text-purple-300 py-2 text-sm font-medium">Resources</a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex">
            <a href="#" className="ml-4 px-4 py-2 rounded-md text-white bg-[#8358FF] hover:bg-purple-700 transition-colors">Open DApp</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-[#080a1f] shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="px-4 pt-6 pb-4 flex justify-end">
          <button 
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
          <a href="#" className="text-white hover:text-purple-300 px-3 py-2 text-base font-medium">Home</a>
          <a href="#" className="text-white hover:text-purple-300 px-3 py-2 text-base font-medium">How It Works</a>
          <a href="#" className="text-white hover:text-purple-300 px-3 py-2 text-base font-medium">Get a Loan</a>
          <a href="#" className="text-white hover:text-purple-300 px-3 py-2 text-base font-medium">Give a Loan</a>
          <a href="#" className="text-white hover:text-purple-300 px-3 py-2 text-base font-medium">Rewards</a>
          <a href="#" className="text-white hover:text-purple-300 px-3 py-2 text-base font-medium">Community</a>
          <a href="#" className="text-white hover:text-purple-300 px-3 py-2 text-base font-medium">Resources</a>
          <a href="#" className="mt-4 mx-3 px-4 py-2 flex justify-center rounded-md text-white bg-[#8358FF] hover:bg-purple-700 transition-colors">Open DApp</a>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-[#080A1F] bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}