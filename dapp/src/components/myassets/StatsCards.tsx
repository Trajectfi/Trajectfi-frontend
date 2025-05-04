// src/app/my_assets/components/StatsCards.tsx
import Image from "next/image";
import React from "react";
import purple from '../../../public/images/purple.png';
import pink from '../../../public/images/pink.png';
import orange from '../../../public/images/orange.png';
import green from '../../../public/images/green.png';

export const StatsCards = () => (
  <div className="grid grid-cols-4 gap-4 mb-8">
    <div className="bg-[#0D0E29] rounded-lg p-4 flex items-center gap-4">
      <div className="bg-[#080a1f] rounded-lg p-2">
        <Image src={purple} width={30} height={30} alt='wallet' />
      </div>
      <div>
        <p className="text-md tracking-wide text-gray-400">Total NFTs Owned</p>
        <p className="text-4xl">5</p>
      </div>
    </div>

    <div className="bg-[#0D0E29] rounded-lg p-4 flex items-center gap-4">
      <div className="bg-[#F81DFB1F] rounded-lg p-2">
        <Image src={pink} width={30} height={30} alt='wallet' />
      </div>
      <div>
        <p className="text-md tracking-wide text-gray-400">Total Interest Earned</p>
        <p className="text-4xl">4.32 STRK</p>
      </div>
    </div>

    <div className="bg-[#0D0E29] rounded-lg p-4 flex items-center gap-4">
      <div className="bg-[#42CC7E1F] rounded-lg p-2">
        <Image src={green} width={30} height={30} alt='wallet' />
      </div>
      <div>
        <p className="text-md tracking-wide text-gray-400">In Escrow</p>
        <p className="text-4xl">0</p>
      </div>
    </div>

    <div className="bg-[#0D0E29] rounded-lg p-4 flex items-center gap-4">
      <div className="bg-[#FB922414] rounded-lg p-2">
        <Image src={orange} width={30} height={30} alt='wallet' />
      </div>
      <div>
        <p className="text-md tracking-wide text-gray-400">Successful Loans</p>
        <p className="text-4xl">0</p>
      </div>
    </div>
  </div>
);