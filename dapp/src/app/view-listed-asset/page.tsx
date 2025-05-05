import React from 'react';
import ListingInfo from './component/ListingInfo';
import LoanTable from './component/LoanTable';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#0f0f20] text-white font-sans p-6">
      <button className="text-[#6c63ff] text-sm font-medium mb-6 hover:underline">
        {'<'} Go Back
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
          <ListingInfo />

        <div className="w-full lg:w-2/3 bg-[#1a1a2e] rounded-2xl p-5 shadow-lg">
          <LoanTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
