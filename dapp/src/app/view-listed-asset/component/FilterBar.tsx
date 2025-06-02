import { LayoutGrid, List } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <p>Filter:</p>
      <div className="flex gap-1">
        <button className="bg-[#080A1F]  px-[14px] py-2 rounded-[8px] border border-[#1C1F3F] text-sm font-medium text-[#F3EEFF] flex items-center justify-center gap-3 "><span>%</span>  <span className="text-[#8080808C] " >8</span>  <span>✖</span></button>
        <button className="bg-[#080A1F]  px-[14px] py-2 rounded-[8px] border border-[#1C1F3F] text-sm font-medium text-[#F3EEFF] flex items-center justify-center">30days  </button>
        <button className="bg-[#080A1F]  px-[14px] py-2 rounded-[8px] border border-[#1C1F3F] text-sm font-medium text-[#F3EEFF] flex items-center justify-center">USDC</button>
      </div>
      <div className="ml-auto flex gap-2">
        <button className="bg-[#191919] px-3 py-1 rounded text-[#F3EEFF] text-xs font-medium flex items-center gap-1"><LayoutGrid /> Grid</button>
        <button className="bg-[#0D0D0D] px-3 py-1 rounded text-[#667185] text-xs font-medium flex items-center gap-"><List/> List</button>
      </div>
    </div>
  );
}
