import FilterBar from './FilterBar';
import LoanRow from './LoanRow';
import Pagination from './Pagination';

export default function LoanTable() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-[802px] h-[543px] bg-[#121428] rounded-[16px] border border-[#1C1F3F] p-[16px] gap-[16px]">
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

          <Pagination />
        </div>
      </div>
    </div>
  );
}
