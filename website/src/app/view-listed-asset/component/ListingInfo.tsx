import Image from "next/image";
import Punk from "@/assets/punk.png";
import Net from "@/assets/net.png";
import Reload from "@/assets/reload.png";
import Angle from "@/assets/angle.png";

export default function ListingInfo() {
  return (
    <div className="bg-[#1a1a2e] rounded-xl p-4 w-full md:flex-1 text-white font-sans flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold">Listing Information</h3>
        <div className="flex gap-2">
          <Image src={Net} alt="network" width={22} height={22} />
          <Image src={Angle} alt="angle" width={22} height={22} />
          <Image src={Reload} alt="reload" width={22} height={22} />
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <Image
          src={Punk}
          alt="CryptoPunk"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-end">
          <div>
            <h2 className="text-base font-semibold">Cryptopunk #1232</h2>
            <p className="text-sm text-gray-300">Cryptopunk VQ (STRK)</p>
          </div>
          <span className="bg-[#182A32] text-[#42CC7E] text-xs px-3 py-1 rounded-full">
            Listed
          </span>
        </div>
      </div>

      <div className="bg-[#1c1c2b] p-3 rounded-lg text-sm space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-400">Currency</span>
          <span className="text-white">All</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Acceptable Amount</span>
          <span className="font-medium">0.001 STRK</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Loan Duration</span>
          <span className="font-medium">14 days</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">APR</span>
          <span className="font-medium">8%</span>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs mt-3">
        You can unlist your item at any time.
      </p>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-[#343456] hover:bg-red-600 transition-all px-4 py-2 rounded-lg text-sm border border-[#8358FF] text-[#8358FF]">
          Remove Listing
        </button>
        <button className="flex-1 bg-[#8a4dff] hover:bg-purple-700 transition-all px-4 py-2 rounded-lg text-sm text-white">
          Update Listing
        </button>
      </div>
    </div>
  );
}
