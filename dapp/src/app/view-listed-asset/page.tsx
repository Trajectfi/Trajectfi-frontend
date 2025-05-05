import React from 'react';
import Image from 'next/image';
import Back from '@/assets/back.png';
import ListingInfo from './component/ListingInfo';
import LoanTable from './component/LoanTable';

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f0f20] text-white font-sans p-4 sm:p-6">
      <div className="max-w-[1136px] mx-auto">
        <button className="w-[104px] h-[24px] flex items-center gap-[12px] text-[#6c63ff] text-sm font-medium mb-6 hover:underline">
          <Image src={Back} alt="" />
          <span className="w-full h-[23px] text-[#F3EEFF] font-oxanium font-semibold text-[18px] leading-[100%] tracking-[0%]">
            Go Back
          </span>
        </button>

        <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto">
          <div className="w-full lg:w-auto">
            <ListingInfo />
          </div>

          <div className="w-full overflow-x-auto lg:w-auto">
            <LoanTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
