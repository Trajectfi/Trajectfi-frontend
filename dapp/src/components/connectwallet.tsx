import React from "react";

const Connectwallet = () => {
  return (
    <div className="min-h-screen text-white p-4">
      <h1 className="text-xl font-medium mb-6">My Assets</h1>
      <div className="border border-[#1c1f3f] rounded-[10px] h-[600px] relative bg-[#35355033] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/connectwallet_bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply",
            opacity: 1,
          }}
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex justify-center items-center gap-8 flex-col py-4 px-6">
            <h2 className="text-[50px] font-extrabold">Connect Your Wallet</h2>
            <p className="mt-[-20px]">
              To view your assets, please connect your wallet.
            </p>
            <button
              type="button"
              className="hidden lg:flex items-center px-4 py-2 text-sm font-medium text-white bg-[#8358FF]  rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Connect Wallet{" "}
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6075 6.14966C11.801 5.97766 12.0972 5.99509 12.2692 6.18859L15.3804 9.68857C15.5382 9.86619 15.5382 10.1338 15.3804 10.3114L12.2692 13.8114C12.0972 14.0049 11.801 14.0223 11.6075 13.8503C11.414 13.6784 11.3966 13.3821 11.5686 13.1886L13.9862 10.4688H5.96753C5.70864 10.4688 5.49878 10.2589 5.49878 10C5.49878 9.74113 5.70864 9.53126 5.96753 9.53126H13.9862L11.5686 6.81143C11.3966 6.61794 11.414 6.32165 11.6075 6.14966Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connectwallet;
