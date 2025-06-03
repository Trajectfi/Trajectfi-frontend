import React, { useState } from 'react';
import FilterBar from './FilterBar';
import LoanRow from './LoanRow';
import { tableData } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LoanTableProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoanTable({ setOpenModal }: LoanTableProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="bg-[#1a1a2e] rounded-xl p-4 md:px-10 md:py-12 w-full md:flex-1 h-full flex flex-col">
      <FilterBar />

      <div className="overflow-x-auto mt-6 flex-1">
        <table className="min-w-full text-sm text-left text-white">
          <thead className="text-gray-400 border-b border-gray-600">
            <tr className="uppercase text-[10px] md:text-xs text-[#F3EEFF] font-bold">
              <th className="py-8 px-2 md:px-4">Loan value</th>
              <th className="py-8 px-2 md:px-4">Lender</th>
              <th className="py-8 px-2 md:px-4">Interest</th>
              <th className="py-8 px-2 md:px-4">APR</th>
              <th className="py-8 px-2 md:px-4">Duration</th>
              <th className="py-8 px-2 md:px-4">Repayment</th>
              <th className="py-8 px-2 md:px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(startIndex, endIndex).map((loanDetails, i) => (
              <LoanRow
                tableData={loanDetails}
                key={i}
                setOpenModal={setOpenModal}
              />
            ))}
          </tbody>
        </table>

        <div className="text-center text-gray-500 text-xs mt-6 flex items-center flex-col md:flex-row justify-center gap-3">
          <p>
            Showing {startIndex + 1} to{' '}
            {endIndex > tableData.length ? tableData.length : endIndex} of{' '}
            {tableData.length} items
          </p>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              disabled={currentPage <= 1}
              className="p-2 disabled:opacity-30"
            >
              <ChevronLeft />
            </button>

            <ul className="flex items-center gap-1">
              {pages.map((page) => (
                <li
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-2.5 py-1.5 rounded cursor-pointer text-sm ${currentPage === page
                      ? 'bg-[#DEDEDE] text-black'
                      : 'text-[#707070] '
                    }`}
                >
                  {page}
                </li>
              ))}
            </ul>

            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages}
              className="p-2 disabled:opacity-30"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
