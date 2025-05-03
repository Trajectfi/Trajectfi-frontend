import FilterBar from './FilterBar';
import LoanRow from './LoanRow';

export default function LoanTable() {
  return (
    <div className="bg-[#1a1a2e] rounded-xl px-10 py-12 w-full md:flex-1 h-full flex flex-col">
      <FilterBar />
      <div className="overflow-x-auto mt-6 flex-1">
        <table className="min-w-full text-sm text-left text-white">
          <thead className="text-gray-400 border-b border-gray-600">
            <tr className="uppercase text-xs">
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
            {[...Array(6)].map((_, i) => (
              <LoanRow key={i} />
            ))}
          </tbody>
        </table>
        <div className="text-center text-gray-500 text-xs mt-6">
          Showing 1 to 6 of 13 items
        </div>
      </div>
    </div>
  );
}
