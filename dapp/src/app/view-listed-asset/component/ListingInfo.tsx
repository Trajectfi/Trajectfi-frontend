import Image from "next/image";
import Punk from "@/assets/punk.png";
import Net from "@/assets/net.png";
import Reload from "@/assets/reload.png";
import Angle from "@/assets/angle.png";

export default function ListingInfo() {
  return (
    <div className="bg-[##121428] border border-[#1C1F3F] rounded-[16px] p-[16px] w-[310px] h-[543px] gap-[24px] text-white font-sans flex flex-col">
      <div className="flex justify-between items-center w-[278px] h-[20px] mr-[12px] mb-4">
        <h3 className="w-[195.33px] h-[20px] font-[Oxanium] font-semibold text-base leading-none tracking-normal bg [#B2B3BA] ">Listing Information</h3>
        <div className="flex gap-[5.33px] w-[70.67px] h-[20px] ">
          <Image src={Net} alt="network" width={20} height={20} />
          <Image src={Angle} alt="angle" width={20} height={20} />
          <Image src={Reload} alt="reload" width={20} height={20} />
        </div>
      </div>

      <div className="relative w-[277px] h-[1432px] aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <Image
          src={Punk}
          alt="CryptoPunk"
          fill
          className="w-[277px] h-[240px] object-cover rounded-[9.55px]"
        />
        <div className="absolute bottom-0 left-0 w-[278px] h[219px] gap-[20px] bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-end">
          <div>
            <h2 className="text-base font-semibold">Cryptopunk #1232</h2>
            <p className="text-sm text-gray-300">Cryptopunk VQ (STRK)</p>
          </div>
          <span className="bg-[#182A32] text-[#42CC7E] text-xs px-3 py-1 rounded-full">
            Listed
          </span>
        </div>
      </div>

      <div className="w-[278px] h-[219px] gap-[20px] bg-[#1c1c2b] ">
        <div className="w-[278px] h-[159px] gap-[16px] ">
          <div className="w-[278px] h-[128px] bg-[#080A1F] text-[12px] rounded-[12px] p-[16px] gap-[12px]">
          <div className="flex justify-between">
            <span className="text-gray-300">Currency</span>
            <span className="text-white">All</span>
          </div>
          <div className="flex justify-between ">
            <span className="text-gray-300">Acceptable Amount</span>
            <span className="font-medium">0.001 STRK</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Loan Duration</span>
            <span className="font-medium">14 days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">APR</span>
            <span className="font-medium">8%</span>
          </div>
          </div>
          
          <p className="flex w-[203px] h-[15px] text-[#8D8E98] font-oxanium font-medium text-[12px] leading-[100%] tracking-[0%] items-center mt-2 ml-8">
          You can unlist your item at any time.
          </p>
        </div>
          <div className="w-[278px] h-[40px] flex gap-[12px]">
          <button className="flex-1 items-center w-[133px] h-[40px] rounded-[12px] border border-[#8358FF] text-[#8358FF] py-[12px] px-[24px] font-satoshi font-medium text-[11px] leading-[100%] tracking-[0%]">
            Remove Listing
          </button>
          <button className="flex-1 items-center w-[133px] h-[40px] rounded-[12px] border border-[#8358FF] bg-[#8358FF] text-[#FFFFFF] py-[12px] px-[24px] font-satoshi font-medium text-[11px] leading-[100%] tracking-[0%]">
            Update Listing
          </button>
        </div>
      </div>

      
    </div>
  );
}
