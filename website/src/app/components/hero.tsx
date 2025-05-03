import React from "react";
import Image from "next/image";
import Monkey from "../../../public/images/Monkey.png";

export default function Hero() {
  return (
    <div className="bg-[#080a1f] h-screen flex items-center justify-center relative overflow-hidden">
      {/* Add these gradient elements */}
      <div className="absolute bottom-1 left-1 w-72 h-72 bg-blue-700 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
      <div className="absolute top-60 right-10 w-[40rem] h-[40rem] bg-blue-400 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
      <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 text-white space-y-4 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-[63px] font-semibold tracking-wide leading-tight md:text-left text-center">
              Need Funds?
              <br />
              Use Your NFTs as
              <br />
              Collateral
            </h1>
            <p className="text-gray-300 mt-4 max-w-[30rem] pb-8 md:text-left text-center text-sm md:text-lg">
              Use your NFT as collateral to borrow crypto. Repay the loan and
              reclaim your NFT.
            </p>

            {/* Call to action buttons */}
            <div className="flex md:flex-row gap-4 flex-col mt-8">
              <button className="px-6 py-3 bg-[#8358FF] hover:bg-purple-700 rounded-md text-white font-medium transition-colors">
                Get A Loan
              </button>
              <button className="px-6 py-3 border border-white hover:bg-white hover:bg-opacity-10 rounded-md text-white font-medium transition-colors">
                I Want to Lend
              </button>
            </div>

            {/* Statistics */}
            <div className="flex md:flex-wrap gap-8 mt-12 md:p-0 py-4 ">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">$100M+</span>
                <span className="text-xs w-[70%] md:w-full md:text-sm text-center text-gray-400">Total Loan Volume</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">25K+</span>
                <span className="text-xs w-[70%] md:w-full md:text-sm text-center text-gray-400">
                  Total Number of Loans
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">$5k+</span>
                <span className="text-xs w-[70%] md:w-full md:text-sm text-center text-gray-400">Average Loan Size</span>
              </div>
            </div>
          </div>

          {/* Right side - NFT showcase */}
          <div className="">
            <div className="">
              {/* Main NFT Card */}
              <div className="">
                <Image
                  src={Monkey}
                  width={700}
                  height={700}
                  alt="Cryptopunk NFT"
                  className="rounded-xl z-50  transition-transform duration-300 ease-in-out transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}