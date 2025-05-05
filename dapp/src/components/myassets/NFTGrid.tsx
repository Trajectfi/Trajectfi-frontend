// src/app/my_assets/components/NFTGrid.tsx
import Image from "next/image";
import React from "react";
import { NFT } from "@/app/types";
import Link from "next/link";
import ViewUnlistedAssetDialog from '@/components/ViewUnlistedAssetDialog';

interface NFTGridProps {
  nfts: NFT[];
}

export const NFTGrid = ({ nfts }: NFTGridProps) => (
  <div className="grid grid-cols-4 gap-3">
    {nfts.map((nft) => {
      // Unlisted assets open the List-as-Collateral dialog
      if (nft.status === 'Unlisted') {
        const imageUrl = typeof nft.image === 'string' ? nft.image : nft.image.src;
        return (
          <ViewUnlistedAssetDialog
            key={nft.id}
            asset={{
              id: nft.id,
              name: nft.name,
              collection: nft.collectionName,
              imageUrl,
              floorPrice: `0.00 ${nft.collectionTag}`,
            }}
          >
            <div className="bg-[#0D0E29] rounded-2xl overflow-hidden w-full max-w-fit px-1 py-1 cursor-pointer">
              <div className="w-full relative">
                <Image
                  src={nft.image}
                  alt={nft.name}
                  width={900}
                  height={900}
                  className="object-fill"
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-medium">{nft.name}</h4>
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-900 text-[#fb9224]">
                    {nft.status}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {nft.collectionName} ({nft.collectionTag})
                </p>
              </div>
            </div>
          </ViewUnlistedAssetDialog>
        );
      }
      // Other statuses navigate to escrow
      return (
        <Link
          href={{
            pathname: "/escrow",
            query: {
              image: typeof nft.image === "string" ? nft.image : nft.image.src,
              name: nft.name,
              status: nft.status,
              collectionName: nft.collectionName,
            },
          }}
          key={nft.id}
        >
          <div className="bg-[#0D0E29] rounded-2xl overflow-hidden w-full max-w-fit px-1 py-1 cursor-pointer">
            <div className="w-full relative">
              <Image
                src={nft.image}
                alt={nft.name}
                width={900}
                height={900}
                className="object-fill"
              />
            </div>
            <div className="p-2">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-medium">{nft.name}</h4>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    nft.status === "Listed"
                      ? "bg-green-900 text-[#42CC7E]"
                      : "bg-purple-900 text-[#b19ee4]"
                  }`}
                >
                  {nft.status}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                {nft.collectionName} ({nft.collectionTag})
              </p>
            </div>
          </div>
        </Link>
      );
    })}
  </div>
);
