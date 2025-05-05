import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

export interface Attribute {
  trait_type: string;
  value: string;
}

export interface AssetMetadata {
  id: string;
  name: string;
  description: string;
  image: StaticImageData | string;
  externalUrl?: string;
  attributes: Attribute[];
  collectionName: string;
  floorPrice: string;
  ownerAddress: string;
}

export interface ViewAssetProps {
  asset: AssetMetadata;
  children: React.ReactNode;
}

export const ViewAsset = ({ asset, children }: ViewAssetProps) => {
  // derive image src for Next/Image or fallback
  const imageSrc = typeof asset.image === "string" ? asset.image : asset.image.src;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-2xl bg-[#0D0E29] p-6 z-50">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-white">{asset.name}</h3>
            <Dialog.Close asChild>
              <button className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <Image
                src={imageSrc}
                alt={asset.name}
                width={600}
                height={600}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2 text-sm text-white">
              <p>
                <span className="font-medium">Token ID:</span> {asset.id}
              </p>
              <p>
                <span className="font-medium">Name:</span> {asset.name}
              </p>
              <p>
                <span className="font-medium">Description:</span> {asset.description}
              </p>
              {asset.externalUrl && (
                <p>
                  <span className="font-medium">External URL:</span>{" "}
                  <a
                    href={asset.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    {asset.externalUrl}
                  </a>
                </p>
              )}
              <p>
                <span className="font-medium">Collection Name:</span> {asset.collectionName}
              </p>
              <p>
                <span className="font-medium">Floor Price:</span> {asset.floorPrice}
              </p>
              <p>
                <span className="font-medium">Owner Address:</span> {asset.ownerAddress}
              </p>
              <div>
                <p className="font-medium">Attributes:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {asset.attributes.map((attr) => (
                    <span
                      key={attr.trait_type}
                      className="px-2 py-1 bg-[#1c1f3f] rounded-md text-xs"
                    >
                      {attr.trait_type}: {attr.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-[#1c1f3f] rounded-md text-sm font-medium hover:bg-[#2a2d51]">
                Close
              </button>
            </Dialog.Close>
            <button className="px-4 py-2 bg-purple-600 rounded-md text-sm font-medium hover:bg-purple-700">
              List as Collateral
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}; 