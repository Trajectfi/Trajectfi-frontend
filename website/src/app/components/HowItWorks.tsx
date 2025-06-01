import { Vault, Wallet, Handshake, Home } from "lucide-react";

const steps = [
  {
    icon: <Vault size={36} className="text-orange-400" />,
    title: "Add Your NFT As Collateral.",
  },
  {
    icon: <Wallet size={36} className="text-orange-400" />,
    title: "Receive Loan Offers From Lenders.",
  },
  {
    icon: <Handshake size={36} className="text-orange-400" />,
    title: "Accept An Offer, NFT Goes To Escrow.",
  },
  {
    icon: <Home size={36} className="text-orange-400" />,
    title: "Repay To Get NFT Back Or Risk Losing It.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 bg-transparent flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent text-center">
        How Trajectifi Works
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center relative">
            <div className="w-20 h-20 rounded-full bg-[#23263a] flex items-center justify-center mb-4 shadow-lg">
              {step.icon}
            </div>
            <p className="text-sm text-center text-white max-w-[160px]">{step.title}</p>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute right-[-60px] top-1/2 -translate-y-1/2 w-16 h-0.5 border-dashed border-t-2 border-gray-400 opacity-50 z-0" />
            )}
            {idx < steps.length - 1 && (
              <div className="md:hidden w-0.5 h-8 border-dashed border-l-2 border-gray-400 opacity-50 z-0 mt-4" />
            )}
          </div>
        ))}
      </div>
      <button className="px-6 py-2 border border-violet-400 rounded-lg text-white hover:bg-violet-500 hover:border-violet-500 transition flex items-center gap-2">
        Learn More <span className="text-lg">→</span>
      </button>
    </section>
  );
} 