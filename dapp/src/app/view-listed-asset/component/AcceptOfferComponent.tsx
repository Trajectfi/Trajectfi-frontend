"use client"


import { tableDataProps } from "@/utils/interface";
import { X } from "lucide-react";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";






interface AcceptOfferComponentProps {
    setOpenModal: React.Dispatch<SetStateAction<boolean>>;
    selectedNFT: tableDataProps | null;
    setSelectedNFT: React.Dispatch<React.SetStateAction<tableDataProps | null>>
}

export default function AcceptOfferComponent({ setOpenModal, selectedNFT, setSelectedNFT }: AcceptOfferComponentProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [agreed, setAgreed] = useState(false)




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



    const offerSummary = [
        {
            title: "Lender",
            value: selectedNFT?.lender,
        },
        {
            title: "Currency",
            value: "STRK",
        },
        {
            title: "Acceptable Amount",
            value:  selectedNFT?.loanValue.toLocaleString("en-us") + " " + "STRK",
        },
        {
            title: "Loan Duration",
            value: selectedNFT?.duration ,
        },
        {
            title: "APR",
            value: selectedNFT?.apr + "%",
        },
        {
            title: "Repayment",
            value: selectedNFT?.repayment.toLocaleString("en-us"),
        },
    ]


    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreed(e.target.checked);
    };


    const closeModal = () => {
        setOpenModal(false)
        setSelectedNFT(null)
    }



    return (
        <div onClick={closeModal} className=" w-full min-h-screen fixed top-0 left-0 backdrop-blur-md bg-white/10 px-5 py-10" >


            <div className=" w-full h-full  flex items-center justify-center py-7 px-5 overflow-x-hidden  " >




                {/* step 1  */}
                <>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    } }
                     className={`w-full flex-col md:flex-row max-w-[900px] py-3 px-6 bg-[#121428] h-full md:max-h-[512px] flex items-stretch justify-between rounded-2xl gap-6 absolute top-[50%] left-[50%] translate-y-[-50%]  transform transition-all duration-200   ${currentStep === 1 ? "translate-x-[-50%] " : "translate-x-[-500%] "}  `} >
                        <div className="w-full max-w-[464px] h-full flex items-center justify-center rounded-2xl   bg-[url('/images/CryptoPunk.svg')] bg-no-repeat bg-cover bg-center " >
                            <div className="w-full mt-auto flex items-center justify-between gap-10 p-5 " >

                                <div className="flex flex-col gap-1 " >
                                    <h1 className="text-[#F3EEFF] text-[28px] font-semibold " >Cryptopunk #1232</h1>
                                    <h4 className=" text-sm font-normal text-[#B2B3BA] " >Cryptopunk VQ (Wrapped ETH)</h4>
                                </div>



                                <span className="bg-[#182A32] text-[#42CC7E] text-xs px-3 py-1 rounded-full">
                                    Listed
                                </span>
                            </div>
                        </div>



                        <div className="w-full max-w-[376px] flex flex-col gap-3  h-full" >

                            <div className=" w-full flex items-center justify-between gap-10" >
                                <h3 className="text-[#B2B3BA] font-semibold text-lg " >Accept Offer</h3>
                                <button onClick={closeModal} className="w-8 h-8 rounded-full bg-[#080A1F] flex items-center justify-center "><X /></button>
                            </div>


                            <ul className=" w-full flex flex-col gap-4 p-4 bg-[#080A1F] " >

                                {offerSummary.map((item, index) => (
                                    <li key={index} className="w-full flex items-center gap-4 justify-between " ><span className="text-[#B2B3BA] font-medium text-sm " >{item.title} </span>  <span className="text-base font-semibold text-[#F3EEFF] " >{item.value} </span></li>
                                ))}

                            </ul>



                            <label htmlFor="terms" className="flex items-start gap-3 " >
                                <input type="checkbox" id="terms" checked={agreed} onChange={handleCheck} />
                                <span className=" text-[#8D8E98] text-xs font-medium " >
                                    Please check the box on the left to allow Trajectifi to manage this asset from your collection.
                                </span>
                            </label>


                            <div className="w-fit items-center gap-1.2 flex mx-auto  " >
                                {optionButtons.map((button, index) => (
                                    <button key={index} className="w-8 h-8 rounded-full bg-[#080A1F] flex items-center justify-center " >
                                        <Image src={button.imageSrc} alt="icon" width={100} height={100} className=" w-5 h-5 rounded-full " />
                                    </button>
                                ))}
                            </div>



                            <button onClick={() => {
                                if (agreed) {
                                    setCurrentStep(2)
                                }
                                else return
                            }}
                                className="w-full py-3 px-6 text-sm font-bold text-[#FFFFFF] bg-[#8358FF] rounded-xl hover:scale-95 duration-150 ease-in-out transition-all " >
                                Accept Offer
                            </button>

                        </div>
                    </div>
                </>



                {/* step 2 */}
                <>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    } }
                    className={` w-full max-w-[400px] h-full max-h-[512px] bg-[#121428] border-[1px] border-[#1C1F3F] py-5 px-3 rounded-2xl  flex items-center flex-col gap-6 absolute top-[50%] left-[50%] translate-y-[-50%]  transform transition-all duration-200  ${currentStep < 2 ? "translate-x-[500%]  " : "translate-x-[-50%]"} `} >
                        <div className="w-full flex items-center justify-between gap-10" >
                            <h4 className="text-[#B2B3BA] font-semibold text-lg ">Accept Offer</h4>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-[#080A1F] flex items-center justify-center "><X /></button>
                        </div>


                        <div className="flex flex-col gap-4 rounded-xl p-4 bg-[#080A1F] " >
                            <h5 className="text-sm font-medium text-[#B2B3BA] " >Sign Transaction</h5>
                            <h4 className="text-base font-semibold text-[#F3EEFF] " >Please click &apos;Sign&apos; to open your wallet, confirm the transaction, and begin the loan.</h4>
                        </div>



                        <p className="font-medium text-xs text-[#8D8E98] " >By Signing this transaction you Agree to our <span className="text-[#7F64EB] " > Terms of Service</span> and <span className="text-[#7F64EB] "> Terms of Use.</span></p>



                        <div className="flex flex-col w-full gap-3 items-start mt-auto " >

                            <button onClick={() => {
                                closeModal()
                                alert("Offer accepted")
                                }}
                                className="w-full py-3 px-6 text-sm font-bold text-[#FFFFFF] bg-[#8358FF] rounded-xl hover:scale-95 duration-150 ease-in-out transition-all " >
                                Sign
                            </button>
                            <button onClick={() => setCurrentStep(1)} className="w-full py-3 px-6 text-sm font-bold text-[#FFFFFF] bg-transparent border-[#8358FF] border-[1px] rounded-xl hover:scale-95 duration-150 ease-in-out transition-all " >
                                Go Back
                            </button>

                        </div>


                    </div>
                </>


            </div>
        </div>
    )
}