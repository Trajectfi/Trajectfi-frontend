"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Backbutton from "../../../../public/images/backward.png";
import nfticon1 from "../../../../public/images/nft-icon1.png";
import nfticon2 from "../../../../public/images/nft-icon2.png";
import nfticon3 from "../../../../public/images/nft-icon3.png";
import question from "../../../../public/images/question-icon.png";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const NFTInformation = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Extract parameters
  const image = searchParams?.get("image") || "/default-image.png";
  const name = searchParams?.get("name") || "Unknown NFT";
  const status = searchParams?.get("status");
  const collectionName = searchParams?.get("collectionName") || "Unknown Collection";

  useEffect(() => {
    // This will run only on the client side
    setIsClient(true);
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  // Don't render anything during server-side rendering
  if (!isClient) {
    return null;
  }

  return (
    <div>
      {/* Back-Button */}
      <div
        className="flex items-center gap-1 p-8 cursor-pointer"
        onClick={handleGoBack}
      >
        <Image src={Backbutton} width={25} height={25} alt="backbutton" />
        <p>Go Back</p>
      </div>

      {/* NFT Information */}
      <div className="flex justify-between border border-[#1C1F3F] rounded-3xl p-4 bg-[#121428]">
        <Image
          src={image}
          width={500}
          height={700}
          alt={name}
          style={{ objectFit: "cover", width: "700px", height: "900px" }}
          className="rounded-3xl"
        />

        {/* NFT Information */}
        <div className="w-[60%] p-6 flex flex-col">
          {/* NFT Information Header */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-300 text-lg">NFT Information</span>
            <div className="flex gap-2">
              <button className="bg-[#080A1F] p-2 rounded-full">
                <Image src={nfticon1} alt="" className="w-5 h-5" />
              </button>
              <button className="bg-[#080A1F] p-2 rounded-full">
                <Image src={nfticon2} alt="" className="w-4 h-4" />
              </button>
              <button className="bg-[#080A1F] p-2 rounded-full">
                <Image src={nfticon3} alt="" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* NFT Title */}
          <h1 className="text-4xl font-bold text-white mb-2">
            {collectionName}
          </h1>
          <p className="text-gray-400 mb-6">Cryptopunk VQ (STRK)</p>

          {/* Status Tags */}
          <div className="flex gap-3 mb-8">
            {status && (
              <span
                className={`flex justify-center items-center px-4 text-xs rounded-full ${
                  status === "Listed"
                    ? "bg-green-900 text-[#42CC7E]"
                    : status === "Unlisted"
                    ? "bg-amber-900 text-[#fb9224]"
                    : "bg-purple-900 text-[#b19ee4]"
                }`}
              >
                {status}
              </span>
            )}
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
              Ongoing
            </span>
          </div>

          {/* Price Information */}
          <div className="mb-6">
            <h2 className="text-xl text-white mb-4">Price Information</h2>

            <div className="flex gap-4">
              <div className="bg-[#080A1F] p-4 rounded-xl flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={question}
                    width={25}
                    height={25}
                    alt="question mark"
                  />
                  <span className="text-gray-300 text-sm">NFT Floor</span>
                </div>
                <p className="text-white">n/a</p>
              </div>

              <div className="bg-[#080A1F] p-4 rounded-xl flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={question}
                    width={25}
                    height={25}
                    alt="question mark"
                  />
                  <span className="text-gray-300 text-sm">Previous Price</span>
                </div>
                <p className="text-white">n/a</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-400 text-lg">
            The above price data is for information purpose only and should not
            be used for any investment decisions. Please do your own research
            regarding NFT Valuation.
          </p>
        </div>

        {/* Right section - Loan Details */}
        <div className="w-1/3 p-6 bg-[#080a1f] flex flex-col rounded-2xl">
          {/* Loan Information */}
          <div className="flex justify-between mb-6">
            <div className="text-gray-400">
              <p className="mb-2">Repayment Amount</p>
              <p>APR</p>
            </div>
            <div className="text-right text-white font-medium">
              <p className="mb-2">STRK</p>
              <p>8%</p>
            </div>
          </div>

          {/* Time Remaining */}
          <div className="mb-4 p-6 bg-[#121428] rounded-2xl">
            <div className="flex justify-between mb-2">
              <p className="text-gray-400">Time Until Loan Expires</p>
              <p className="text-white">7/14 Days</p>
            </div>

            {/* Progress bar */}
            <div className="h-4 bg-white rounded-full overflow-hidden my-5">
              <div className="h-full bg-[#8358FF] w-1/2 rounded-full"></div>
            </div>
          </div>

          {/* Loan details */}
          <div className="mb-auto">
            <p className="text-gray-400 text-sm mt-8">
              Cryptopunk #1232 is currently held in escrow in a Trijectifi
              contract and will be released back to the borrower if a repayment
              amount of 0.001013 wETH is made on or before 11:59 PM, 21 April,
              2024 (GMT +2)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-4">
            <button className="bg-[#8358FF] hover:bg-purple-600 text-white py-4 rounded-xl font-medium">
              Repay Loan
            </button>
            <button className="border border-[#8358FF] text-[#8358FF] hover:bg-purple-900 hover:bg-opacity-10 py-4 rounded-xl font-medium">
              Renegotiate Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTInformation;