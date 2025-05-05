// src/app/my_assets/components/CollectionsSidebar.tsx
import Image from "next/image";
import React from "react";
import { Collection } from "../../types";

interface CollectionsSidebarProps {
  collections: Collection[];
  searchQuery: string;
  toggleCollection: (id: string) => void;
  setSearchQuery: (query: string) => void;
}

export const CollectionsSidebar = ({
  collections,
  searchQuery,
  toggleCollection,
  setSearchQuery,
}: CollectionsSidebarProps) => (
  <div className="w-56 bg-[#080a1f] rounded-lg p-4">
    <h3 className="text-lg font-medium mb-4">Collections</h3>

    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search to filter"
        className="w-full bg-[#121428] border-none rounded-lg py-2 px-8 text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <svg className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>

    <div className="space-y-5">
      {collections.map(collection => (
        <div key={collection.id} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={collection.selected}
            onChange={() => toggleCollection(collection.id)}
            className="w-4 h-4 rounded accent-purple-600"
          />
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <Image src={collection.icon} alt={collection.name} width={32} height={32} className="rounded-full" />
            </div>
            <span className="text-sm">{collection.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);