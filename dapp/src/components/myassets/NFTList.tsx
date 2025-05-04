// src/app/my_assets/components/NFTList.tsx
import Image from "next/image";
import React from "react";
import { NFT } from "@/app/types";
import Link from "next/link";

interface NFTListProps {
  nfts: NFT[];
}

export const NFTList = ({ nfts }: NFTListProps) => (
  <div className="space-y-3">
    {nfts.map((nft) => (
      <Link href={{ pathname: "/escrow", query: {image: typeof nft.image === "string" ? nft.image : nft.image.src,name: nft.name,status: nft.status, collectionName: nft.collectionName,},
        }}
        key={nft.id}
        className="bg-[#0D0E29] rounded-lg overflow-hidden flex"
      >
        <div className="w-24 h-24 relative">
          <Image src={nft.image} alt={nft.name} fill className="object-cover" />
        </div>
        <div className="p-3 flex-1 flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">{nft.name}</h4>
            <p className="text-xs text-gray-400">
              {nft.collectionName} ({nft.collectionTag})
            </p>
          </div>
          <span
            className={`px-3 py-1 text-xs rounded-full ${
              nft.status === "Listed"
                ? "bg-green-900"
                : nft.status === "Unlisted"
                ? "bg-amber-900"
                : "bg-purple-900"
            }`}
          >
            {nft.status}
          </span>
        </div>
      </Link>
    ))}
  </div>
);
