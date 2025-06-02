import { X } from "lucide-react";
import Image from "next/image";




export default function AcceptOfferComponent() {




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
            value: "09b73a42",
        },
        {
            title: "Currency",
            value: "STRK",
        },
        {
            title: "Acceptable Amount",
            value: "0.001 STRK",
        },
        {
            title: "Loan Duration",
            value: "14 days",
        },
        {
            title: "APR",
            value: "8%",
        },
        {
            title: "Repayment",
            value: "0.0001023 STRK",
        },
    ]



    return (
        <div className=" w-full h-screen fixed top-0 left-0 backdrop-blur-md bg-white/10 flex items-center justify-center py-7 px-5 " >
            <div className=" w-full max-w-[900px] py-3 px-6 bg-[#121428] h-full md:max-h-[512px] flex items-stretch justify-between rounded-2xl gap-6  " >
                <div className="w-full max-w-[464px] h-full flex items-center justify-center rounded-2xl bg-red-600  bg-[url('/images/CryptoPunk.svg')] bg-no-repeat bg-cover bg-center " >
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
                        <button className="w-8 h-8 rounded-full bg-[#080A1F] flex items-center justify-center "><X /></button>
                    </div>


                    <ul className=" w-full flex flex-col gap-4 p-4 bg-[#080A1F] " >

                        {offerSummary.map((item, index) => (
                            <li key={index} className="w-full flex items-center gap-4 justify-between " ><span className="text-[#B2B3BA] font-medium text-sm " >{item.title} </span>  <span className="text-base font-semibold text-[#F3EEFF] " >{item.value} </span></li>
                        ))}

                    </ul>



                        <label htmlFor="terms" className="flex items-start gap-3 " >
                            <input type="checkbox" id="terms" />
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



                    <button className="w-full py-3 px-6 text-sm font-bold text-[#FFFFFF] bg-[#8358FF] rounded-xl hover:scale-95 duration-150 ease-in-out transition-all " >
                        Accept Offe
                    </button>

                </div>
            </div>
        </div>
    )
}