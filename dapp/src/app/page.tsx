import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Assets</h1>
      
      <div className="border border-gray-800 rounded-xl overflow-hidden">
        <div 
          className="relative flex items-center justify-center py-20"
          style={{
            backgroundImage: "url('/nft-collage-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center z-10 px-4 bg-page-bg bg-cover bg-no-repeat rounded-lg h-[700px] w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="text-gray-300 mb-8">To view your assets, please connect your wallet.</p>
            <Link href="#">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center mx-auto">
                Connect Wallet
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
          
          {/* Dark overlay */}
          <div className="absolute"></div>
        </div>
      </div>
    </div>
  );
}