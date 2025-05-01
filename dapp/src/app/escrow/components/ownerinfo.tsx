import React from 'react';
import Image from 'next/image';
import OwnerAvatar from '../../../../public/images/AvataOwnerAvatar.png';

// Define types for our owner data
interface OwnerStats {
  label: string;
  value: string;
}

// Props are now optional since we're using default data
interface OwnerInfoProps {
  ownerAddress?: string;
  ownerAvatar?: string;
  borrowStats?: OwnerStats[];
  lendStats?: OwnerStats[];
}

const OwnerInfo: React.FC<OwnerInfoProps> = ({
  ownerAddress,
  ownerAvatar,
  borrowStats,
  lendStats
}) => {
  // Default data to use if props aren't provided
  const defaultOwnerAddress = "09b73a43";
  const defaultOwnerAvatar = "/path/to/avatar.png"; // Replace with your actual avatar path
  
  const defaultBorrowStats = [
    { label: "Total Borrowed", value: "2,000.00 STRK" },
    { label: "Avg. Borrowed", value: "500 STRK" },
    { label: "Avg. Borrow Duration", value: "14 days" },
  ];
  
  const defaultLendStats = [
    { label: "Total Lent", value: "2,000.00 STRK" },
    { label: "Avg. Loan Size", value: "500 STRK" },
    { label: "Avg. Duration", value: "14 days" },
  ];

  // Use provided props or fall back to defaults
  const displayOwnerAddress = ownerAddress || defaultOwnerAddress;
  const displayOwnerAvatar = ownerAvatar || defaultOwnerAvatar;
  const displayBorrowStats = borrowStats || defaultBorrowStats;
  const displayLendStats = lendStats || defaultLendStats;

  return (
    <div className="bg-[#121428] border-[1px] border-[#1C1F3F] rounded-2xl p-6 flex flex-col gap-6">
      <h2 className="text-xl text-gray-300 font-medium">Owner Information</h2>
      
      {/* Owner Address */}
      <div className="flex items-center gap-3">
        <p className="text-gray-400">Owner</p>
        <div className="flex items-center gap-2 ml-auto">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-purple-500">
            {displayOwnerAvatar && (
              <Image 
                src={OwnerAvatar} 
                alt="Owner Avatar" 
                width={32} 
                height={32}
                className="object-cover"
              />
            )}
          </div>
          <span className="text-[#FC97FD]">{displayOwnerAddress}</span>
        </div>
      </div>
      
      {/* Borrowing Stats */}
      <div className="bg-[#070918] rounded-xl p-4 flex flex-col gap-3">
        {displayBorrowStats.map((stat, index) => (
          <div key={`borrow-${index}`} className="flex justify-between">
            <p className="text-gray-400">{stat.label}</p>
            <p className="text-white">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* Lending Stats */}
      <div className="bg-[#070918] rounded-xl p-4 flex flex-col gap-3">
        {displayLendStats.map((stat, index) => (
          <div key={`lend-${index}`} className="flex justify-between">
            <p className="text-gray-400">{stat.label}</p>
            <p className="text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerInfo;