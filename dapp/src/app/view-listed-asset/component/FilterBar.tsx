export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <p>filter:</p>
      <div className="flex gap-1">
        <button className="bg-[#080A1F] w-[89px] h-[32px] px-[14px] py-[8px] rounded-[8px] border border-[#1C1F3F] text-sm text-white "> 8%  ✖</button>
        <button className="bg-[#080A1F] w-[89px] h-[32px] px-[14px] py-[8px] rounded-[8px] border border-[#1C1F3F] text-sm text-white">30days  </button>
        <button className="bg-[#080A1F] w-[89px] h-[32px] px-[14px] py-[8px] rounded-[8px] border border-[#1C1F3F] text-sm text-white">USDC</button>
      </div>
      <div className="ml-auto flex gap-2">
        <button className="bg-[#191919] px-3 py-1 rounded text-white text-sm">📊 Grid</button>
        <button className="bg-[#0D0D0D] px-3 py-1 rounded text-white text-sm">📋 List</button>
      </div>
    </div>
  );
}
