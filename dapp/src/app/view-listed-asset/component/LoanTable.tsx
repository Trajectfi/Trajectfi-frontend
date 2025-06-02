import React, { useState } from 'react';
import FilterBar from './FilterBar';
import LoanRow from './LoanRow';
import { tableData } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';




interface LoanTableProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}


export default function LoanTable({ setOpenModal }: LoanTableProps) {
  const [sliceValue, setSliceValue] = useState<number>(6);
  const startValue: number = sliceValue - 5;

const handlePrev = () => {
  if (startValue > 1) {
    setSliceValue((prev) => Math.max(prev - 6, 6));
  }
};



 const handleNext = () => {
  if (sliceValue < tableData.length) {
    setSliceValue((prev) => Math.min(prev + 6, tableData.length));
  }
};


  return (
    <div className="bg-[#1a1a2e] rounded-xl px-10 py-12 w-full md:flex-1 h-full flex flex-col">
      <FilterBar />
      <div className="overflow-x-auto mt-6 flex-1">
        <table className="min-w-full text-sm text-left text-white">
          <thead className="text-gray-400 border-b border-gray-600">
            <tr className="uppercase text-xs text-[#F3EEFF] font-bold  ">
              <th className="py-8 px-4">Loan value</th>
              <th className="py-8 px-4">Lender</th>
              <th className="py-8 px-4">Interest</th>
              <th className="py-8 px-4">APR</th>
              <th className="py-8 px-4">Duration</th>
              <th className="py-8 px-4">Repayment</th>
              <th className="py-8 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(startValue - 1, sliceValue).map((loanDetails, i) => (
              <LoanRow tableData={loanDetails} key={i} setOpenModal={setOpenModal} />
            ))}
          </tbody>
        </table>
        <div className="text-center text-gray-500 text-xs mt-6 flex items-center justify-center gap-3 ">
          <button onClick={handlePrev} disabled={startValue <= 1} ><ChevronLeft /></button>
        <p>  Showing {startValue} to {sliceValue} of {tableData.length} items</p>
          <button onClick={handleNext} disabled={sliceValue >= tableData.length} ><ChevronRight /></button>
        </div>
      </div>
    </div>
  );
}
