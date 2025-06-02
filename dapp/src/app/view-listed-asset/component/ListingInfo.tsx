import Image from "next/image";


export default function ListingInfo() {


  const optionButtons = [
    {
      imageSrc: "/images/world.svg",
      path: "#"
    },
    {
      imageSrc: "/images/triangle.svg",
      path: "#"
    },
    {
      imageSrc: "/images/undo.svg",
      path: "#"
    },
  ]





  return (
    <div className="bg-[#1a1a2e] rounded-xl p-4 w-full md:flex-1 text-white font-sans flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-[#B2B3BA] ">Listing Information</h3>
        <div className="flex gap-2">

          {optionButtons.map((button, index) => (
            <button key={index} className="w-5 h-5 rounded-full bg-[#080A1F] flex items-center justify-center " >
              <Image src={button.imageSrc} alt="icon" width={100} height={100} className=" w-[12.5px] h-[12.5px] rounded-full " />
            </button>
          ))

          }

        </div>
      </div>

      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <Image
          src={"/images/CryptoPunk.svg"}
          alt="CryptoPunk"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-end">
          <div>
            <h2 className="text-base font-semibold">Cryptopunk #1232</h2>
            <p className="text-sm text-gray-300">Cryptopunk VQ (STRK)</p>
          </div>
          <span className="bg-[#182A32] text-[#42CC7E] text-xs font-semibold px-3 py-2 rounded-full">
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
