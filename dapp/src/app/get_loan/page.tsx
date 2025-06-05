"use client";
import React, { useState } from "react";
import NFT1 from "../../../public/images/NFT1.png";
import NFT2 from "../../../public/images/NFT2.png";
import NFT4 from "../../../public/images/NFT4.png";
import NFT5 from "../../../public/images/NFT5.png";
import { useRouter } from "next/navigation";

const loansReceived = {
  active: [
    {
      id: "1",
      name: "Cryptopunk #1232",
      collection: "Cryptopunk VQ (STARK)",
      image: NFT4,
      status: "Ongoing",
      escrow: true,
    },
  ],
  previous: [
    {
      id: "2",
      name: "Cryptopunk #1232",
      collection: "Cryptopunk VQ (STARK)",
      image: NFT2,
      status: "Closed",
      escrow: false,
    },
    {
      id: "3",
      name: "Cryptopunk #1232",
      collection: "Cryptopunk VQ (STARK)",
      image: NFT1,
      status: "Closed",
      escrow: false,
    },
    {
      id: "4",
      name: "Cryptopunk #1232",
      collection: "Cryptopunk VQ (STARK)",
      image: NFT5,
      status: "Closed",
      escrow: false,
    },
  ],
};

export default function LoansReceivedPage() {
  const [subTab, setSubTab] = useState<"active" | "previous">("active");
  const router = useRouter();

  const loans = loansReceived[subTab];

  return (
    <div className="min-h-screen bg-[#06071B] text-white p-4">
      <h1 className="text-xl font-medium mb-6">Get a Loan</h1>

      {/* Tabs de navegación superior */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 rounded-full bg-[#19192B] text-gray-400">Assets (3)</button>
        <button className="px-4 py-2 rounded-full bg-[#19192B] text-gray-400">Offers Received (2)</button>
        <button className="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold shadow">
          Loans Received ({loansReceived.active.length})
        </button>
      </div>

      <div className="flex gap-4 p-10 border border-[#1c1f3f] bg-[#121428] rounded-2xl">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">
              {subTab === "active" ? "Current Loans As Borrower" : "Previous Loans As Borrower"}
            </h3>
            <div className="flex gap-2 bg-[#19192B] rounded-full p-1">
              <button
                onClick={() => setSubTab("active")}
                className={`px-4 py-1 text-sm rounded-full transition ${
                  subTab === "active" ? "bg-white text-black font-semibold" : "text-gray-400"
                }`}
              >
                Active ({loansReceived.active.length})
              </button>
              <button
                onClick={() => setSubTab("previous")}
                className={`px-4 py-1 text-sm rounded-full transition ${
                  subTab === "previous" ? "bg-white text-black font-semibold" : "text-gray-400"
                }`}
              >
                Previous ({loansReceived.previous.length})
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, 264px)" }}>
            {loans.map((loan) => (
              <div
                key={loan.id}
                className="bg-[#080A1F] rounded-[12px] border border-[#232347] flex flex-col items-center relative"
                style={{
                  width: "264px",
                  minHeight: "397px",
                  padding: "8px 8px 16px 8px"
                }}
              >
                {/* Badge de estado */}
                {subTab === "previous" && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-[#FF3B30] text-white z-10">
                    Closed
                  </span>
                )}
                {subTab === "active" && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white z-10">
                    Ongoing
                  </span>
                )}
                <img
                  src={loan.image.src}
                  alt={loan.name}
                  className="rounded-lg"
                  style={{
                    width: "248px",
                    height: "280px",
                    borderRadius: "8px",
                    border: "0.81px solid #232347",
                    objectFit: "cover",
                    marginBottom: "16px"
                  }}
                />
                <div className="w-full mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-bold">{loan.name}</span>
                    {subTab === "active" && loan.escrow && (
                      <span
                        className="text-purple-300 text-xs font-medium flex items-center justify-center"
                        style={{
                          background: "#231940",
                          borderRadius: "81.63px",
                          minWidth: "59px",
                          minHeight: "29px",
                          padding: "8px 12px",
                          gap: "8px",
                          display: "inline-flex"
                        }}
                      >
                        Escrow
                      </span>
                    )}
                    {subTab === "previous" && (
                      <span className="bg-[#7A4F13] text-[#FFB86B] text-xs px-3 py-1 rounded-full">Unlisted</span>
                    )}
                  </div>
                  <div className="text-gray-400 text-xs mb-2">{loan.collection}</div>
                  <button
                    className="text-white text-xs font-medium flex items-center justify-center"
                    style={{
                      width: "148px",
                      minHeight: "29px",
                      background: "#8358FF",
                      borderRadius: "81.63px",
                      padding: "8px 12px",
                      gap: "2px",
                      marginTop: "16px"
                    }}
                    onClick={() => router.push(`/loan-details/${loan.id}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}