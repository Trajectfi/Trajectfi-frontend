

export default function FilterBar() {
  return (
    <div className="flex flex-wrap  w-[770px] h-[18px] items-center gap-[8px]">
      <p className="w-[35px] h-[15px] font-oxanium font-bold text-[12px] leading-[100%] tracking-[0%] text-center ">filter:</p>
      <button className="flex gap-4 bg-[#080A1F] w-[89px] h-[32px] px-[14px] py-[8px] rounded-[8px] border border-[#1C1F3F] text-sm text-white items-center">
      % <span className='text-[#8080808C] gap-8 '>8 x</span>
      </button>
      <button className="bg-[#080A1F] w-[89px] h-[32px] gap-2 flex items-center px-[14px] py-[8px] rounded-[8px] border border-[#1C1F3F] text-sm text-white">30days  
      <span className='text-[#8080808C]'> x</span>
      </button>
      <button className="bg-[#080A1F] w-[89px] h-[32px]  gap-2 flex items-center px-[14px] py-[8px] rounded-[8px] border border-[#1C1F3F] text-sm text-white">USDC 
      <span className='text-[#8080808C]'>v</span>
      </button>
      <div className="ml-auto flex gap-2">
        <button className="bg-[#191919] px-3 py-1 rounded text-white text-sm">📊 Grid</button>
        <button className="bg-[#0D0D0D] px-3 py-1 rounded text-white text-sm">📋 List</button>
      </div>
    </div>
  );
}
