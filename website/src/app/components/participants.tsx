"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type StepNumber = 1 | 2 | 3;

const ParticipantsWithBlur = () => {
    const [selectedTab, setSelectedTab] = useState("borrowers");
    const [selectedStep, setSelectedStep] = useState<StepNumber>(1);  

    const BorrowerSteps = () => (
        <div className="space-y-8">
            {/* Step 1 */}
            <div
                className={`flex items-start space-x-4 md:space-x-6 rounded-xl p-6 ${selectedStep === 1 ? 'border bg-slate-800/40 border-[#6c4de8]' : ''}`}
                onClick={() => setSelectedStep(1)}
            >
                <div className="flex-shrink-0 text-5xl font-bold text-white">
                    1
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">List your NFT</h3>
                    <p className="text-slate-300">
                        Choose your NFT, set your loan terms, and make it available for offers.
                    </p>
                </div>
            </div>

            {/* Step 2 */}
            <div
                className={`flex items-start space-x-4 md:space-x-6 rounded-xl p-6 ${selectedStep === 2 ? 'border bg-slate-800/40 border-[#6c4de8]' : ''}`}
                onClick={() => setSelectedStep(2)}
            >
                <div className="flex-shrink-0 text-5xl font-bold text-white">
                    2
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Receive loan offers</h3>
                    <p className="text-slate-300">
                        Lenders submit offers. Accept the one that suits you, and your NFT is held in a secure smart contract.
                    </p>
                </div>
            </div>

            {/* Step 3 */}
            <div
                className={`flex items-start space-x-4 md:space-x-6 rounded-xl p-6 ${selectedStep === 3 ? 'border bg-slate-800/40 border-[#6c4de8]' : ''}`}
                onClick={() => setSelectedStep(3)}
            >
                <div className="flex-shrink-0 text-5xl font-bold text-white">
                    3
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Repay & reclaim</h3>
                    <p className="text-slate-300">
                        Pay back the loan within the agreed period and automatically receive your NFT back.
                    </p>
                </div>
            </div>
        </div>
    );

  
    const stepImages: Record<StepNumber, string> = {
        1: "/form.svg", // Image for Step 1: List NFT
        2: "/form.svg", // Image for Step 2: Receive loan offers
        3: "/form.svg", // Image for Step 3: Repay & reclaim
    };

    // Add lender steps component
    const LenderSteps = () => (
        <div className="space-y-8">
            {/* Step 1 */}
            <div
                className={`flex items-start space-x-4 md:space-x-6 rounded-xl p-6 ${selectedStep === 1 ? 'border bg-slate-800/40 border-[#6c4de8]' : ''}`}
                onClick={() => setSelectedStep(1)}
            >
                <div className="flex-shrink-0 text-5xl font-bold text-white">
                    1
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Browse available NFTs</h3>
                    <p className="text-slate-300">
                        Explore NFTs listed for loans and review their terms and conditions.
                    </p>
                </div>
            </div>

            {/* Step 2 */}
            <div
                className={`flex items-start space-x-4 md:space-x-6 rounded-xl p-6 ${selectedStep === 2 ? 'border bg-slate-800/40 border-[#6c4de8]' : ''}`}
                onClick={() => setSelectedStep(2)}
            >
                <div className="flex-shrink-0 text-5xl font-bold text-white">
                    2
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Make loan offers</h3>
                    <p className="text-slate-300">
                        Submit your loan terms to borrowers with NFTs you're interested in.
                    </p>
                </div>
            </div>

            {/* Step 3 */}
            <div
                className={`flex items-start space-x-4 md:space-x-6 rounded-xl p-6 ${selectedStep === 3 ? 'border bg-slate-800/40 border-[#6c4de8]' : ''}`}
                onClick={() => setSelectedStep(3)}
            >
                <div className="flex-shrink-0 text-5xl font-bold text-white">
                    3
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Collect interest or NFT</h3>
                    <p className="text-slate-300">
                        Receive your principal plus interest, or claim the NFT if the loan defaults.
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-[#080A1F] text-white p-4 flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-6xl relative">
                <div className="relative z-10 bg-[#ffffff0a] backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-[#ffffff10]">
                    <Tabs
                        defaultValue="borrowers"
                        value={selectedTab}
                        onValueChange={setSelectedTab}
                        className="w-full"
                    >
                        <TabsList className="w-full grid grid-cols-2 rounded-full h-14 !bg-[#414352]">
                            <TabsTrigger
                                value="borrowers"
                                className={`rounded-full text-lg font-medium ${selectedTab === "borrowers" ? "!bg-[#6c4de8] !text-white" : "text-white hover:text-white"}`}
                            >
                                Borrowers
                            </TabsTrigger>
                            <TabsTrigger
                                value="lenders"
                                className={`rounded-full text-lg font-medium ${selectedTab === "lenders" ? "!bg-[#6c4de8] !text-white" : "text-white hover:text-white"}`}
                            >
                                Lenders
                            </TabsTrigger>
                        </TabsList>

                        <div className="mt-10">
                          
                            <div className="md:hidden">
                                {selectedTab === "borrowers" ? (
                                    <div className="mb-10">
                                        <BorrowerSteps />
                                    </div>
                                ) : (
                                    <div className="mb-10">
                                        <LenderSteps />
                                    </div>
                                )}

                             
                                <div className="mt-8">
                                    <img
                                        src={stepImages[selectedStep]}
                                        alt={`Step ${selectedStep}`}
                                        className="w-full h-auto rounded-xl mt-4"
                                    />
                                </div>
                            </div>

                            <div className="hidden md:flex flex-row gap-8 w-full">
                            
                                <div className="w-1/2">
                                    {selectedTab === "borrowers" ? <BorrowerSteps /> : <LenderSteps />}
                                </div>

                           
                                <div className="w-1/2">
                                    <img
                                        src={stepImages[selectedStep]}
                                        alt={`Step ${selectedStep}`}
                                        className="w-full h-auto rounded-xl mt-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ParticipantsWithBlur;