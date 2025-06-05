import React from "react";

// Define types for our loan history data
interface LoanRecord {
  borrower: string;
  lender: string;
  loanValue: string;
  startDate: string;
  apr: string;
  duration: string;
  repayment: string;
  status: string;
}

// Props are now optional since we're using default data
interface LoanHistoryProps {
  id: string;
}

const loanHistoryData: Record<string, LoanRecord[]> = {
  "1": [
    {
      borrower: "You",
      lender: "09b73a42",
      loanValue: "2,754",
      startDate: "4/4/18",
      apr: "14.19%",
      duration: "30 days",
      repayment: "2,891.75",
      status: "Escrow",
    },
    {
      borrower: "You",
      lender: "09b73a42",
      loanValue: "2,754",
      startDate: "8/16/13",
      apr: "14.19%",
      duration: "30 days",
      repayment: "2,891.75",
      status: "Escrow",
    },
  ],
  "2": [
    {
      borrower: "You",
      lender: "09b73a45",
      loanValue: "1,500",
      startDate: "2/2/20",
      apr: "12.00%",
      duration: "20 days",
      repayment: "1,650.00",
      status: "Closed",
    },
  ],
  // Puedes agregar más ids y datos mock aquí
};

const LoanHistory: React.FC<LoanHistoryProps> = ({ id }) => {
  const displayLoanRecords = loanHistoryData[id] || loanHistoryData["1"];

  return (
    <div className="bg-[#121428] rounded-2xl p-6 h-full flex flex-col border border-[#1C1F3F]">
      <h2 className="text-xl text-gray-300 font-medium mb-4">
        Previous Loan on Asset
      </h2>

      <div className="flex flex-col flex-grow">
        {/* Table Header */}
        <div className="bg-[#070918] rounded-t-xl grid grid-cols-8 gap-4 p-4 text-sm">
          <div className="text-gray-400">Borrower</div>
          <div className="text-gray-400">Lender</div>
          <div className="text-gray-400">Loan Value</div>
          <div className="text-gray-400">Start</div>
          <div className="text-gray-400">APR</div>
          <div className="text-gray-400">Duration</div>
          <div className="text-gray-400">Repayment</div>
          <div className="text-gray-400">Status</div>
        </div>

        {/* Table Rows */}
        {displayLoanRecords.map((record, index) => (
          <div
            key={`loan-${index}`}
            className={`grid grid-cols-8 gap-4 p-4 border-t border-[#1A1E3B] text-sm bg-[#121428]`}
          >
            <div className="text-yellow-400">{record.borrower}</div>
            <div className="text-[#FC97FD]">{record.lender}</div>
            <div className="text-white">{record.loanValue}</div>
            <div className="text-white">{record.startDate}</div>
            <div className="text-white">{record.apr}</div>
            <div className="text-white">{record.duration}</div>
            <div className="text-white">{record.repayment}</div>
            <div className="text-gray-400">{record.status}</div>
          </div>
        ))}

        {/* Additional space to fill height if needed */}
        <div className="flex-grow bg-[#121428] rounded-b-xl mt-0"></div>
      </div>
    </div>
  );
};

export default LoanHistory;
