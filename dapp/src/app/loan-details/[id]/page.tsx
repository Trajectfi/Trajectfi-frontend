"use client";
import { useParams } from "next/navigation";
import LoanHistory from "../../escrow/components/loanhistory";
import NFTInformation from "../../escrow/components/nftinformation";
import OwnerInfo from "../../escrow/components/ownerinfo";

const Page = () => {
    const params = useParams();
    const id = params.id as string;

    return ( 
        <div className="px-8 bg-[#080a1f] min-h-screen">
            <NFTInformation id={id} />
            <div className="flex flex-col md:flex-row gap-4 py-4">
                <div className="w-full md:w-1/3">
                    <OwnerInfo id={id} />
                </div>
                <div className="w-full md:w-2/3">
                    <LoanHistory id={id} />
                </div>
            </div>
        </div> 
    );
}
 
export default Page; 