// src/app/my_assets/page.tsx
"use client";
import React, { useState } from 'react';
import NFT1 from '../../public/images/NFT1.png';
import NFT2 from '../../public/images/NFT2.png';
import NFT3 from '../../public/images/NFT3.png';
import NFT4 from '../../public/images/NFT4.png';
import NFT5 from '../../public/images/NFT5.png';
import Avatar1 from '../../public/images/Avatar1.png';
import Avatar2 from '../../public/images/Avatar2.png';
import Avatar3 from '../../public/images/Avatar3.png';
import Avatar4 from '../../public/images/Avatar4.png';
import Avatar5 from '../../public/images/Avatar5.png';
import Avatar6 from '../../public/images/Avatar6.png';
import { Collection, NFT } from './types';
import { StatsCards } from '../app/my_assets/components/StatsCards';
import { CollectionsSidebar } from '../app/my_assets/components/CollectionSidebar';
import { ViewToggle } from '../app/my_assets/components/ViewToggle';
import { NFTGrid } from '../app/my_assets/components/NFTGrid';
import { NFTList } from '../app/my_assets/components/NFTList';

export default function NFTMarketplace() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [collections, setCollections] = useState<Collection[]>([
    { id: '1', name: 'Cryptopunk VQ (Wrapped)', selected: true, icon: Avatar1 },
    { id: '2', name: 'CLONE X-X', selected: true, icon: Avatar2 },
    { id: '3', name: 'KOLLABEAR', selected: true, icon: Avatar3 },
    { id: '4', name: 'NFT Locked Bundle', selected: true, icon: Avatar4 },
    { id: '5', name: 'FLUF', selected: true, icon: Avatar5 },
    { id: '6', name: 'RANGA', selected: true, icon: Avatar6 },
  ]);

  const nfts: NFT[] = [
    {
      id: '1',
      name: 'Cryptopunk #1232',
      collectionName: 'Cryptopunk VQ (Wrapped)',
      status: 'Escrow',
      image: NFT1,
      collectionTag: 'STRK'
    },
    {
      id: '2',
      name: 'Cryptopunk #1232',
      collectionName: 'Cryptopunk VQ (Wrapped)',
      status: 'Listed',
      image: NFT2,
      collectionTag: 'STRK'
    },
    {
      id: '3',
      name: 'CLONE X #456',
      collectionName: 'CLONE X-X',
      status: 'Unlisted',
      image: NFT3,
      collectionTag: 'ETH'
    },
    {
      id: '4',
      name: 'KOLLABEAR #789',
      collectionName: 'KOLLABEAR',
      status: 'Unlisted',
      image: NFT4,
      collectionTag: 'SOL'
    },
    {
      id: '5',
      name: 'FLUF #101',
      collectionName: 'FLUF',
      status: 'Unlisted',
      image: NFT5,
      collectionTag: 'ETH'
    }
  ];

  const toggleCollection = (id: string) => {
    setCollections(collections.map(collection =>
      collection.id === id
        ? { ...collection, selected: !collection.selected }
        : collection
    ));
  };

  const filteredNfts = nfts.filter(nft => {
    const statusMatch = activeTab === 'All' ||
      (activeTab === 'In Escrow' ? nft.status === 'Escrow' : nft.status === activeTab);

    const collectionMatch = collections.some(
      collection => collection.selected && nft.collectionName.includes(collection.name.split(' ')[0])
    );

    const searchMatch = searchQuery === '' ||
      nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.collectionName.toLowerCase().includes(searchQuery.toLowerCase());

    return statusMatch && collectionMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-[#06071B] text-white p-4">
      <h1 className="text-xl font-medium mb-6">My Assets</h1>

      <StatsCards />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">NFTs Owned</h2>

        <div className="flex gap-2 py-2 px-2 items-center bg-[#0D0E29] rounded-full p-1">
          {['All', 'Listed', 'Unlisted', 'In Escrow'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 text-sm rounded-full ${activeTab === tab ? 'bg-purple-600' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 p-10 border border-[#1c1f3f] bg-[#121428] rounded-2xl">
        <CollectionsSidebar
          collections={collections}
          searchQuery={searchQuery}
          toggleCollection={toggleCollection}
          setSearchQuery={setSearchQuery}
        />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Search Results ({filteredNfts.length})</h3>
            <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
          </div>

          {filteredNfts.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-400">No NFTs match your filters</p>
            </div>
          ) : viewMode === 'grid' ? (
            <NFTGrid nfts={filteredNfts} />
          ) : (
            <NFTList nfts={filteredNfts} />
          )}
        </div>
      </div>
    </div>
  );
}