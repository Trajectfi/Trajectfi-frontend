import LoanHistory from "./components/loanhistory";
import NFTInformation from "./components/nftinformation";
import OwnerInfo from "./components/ownerinfo";

const Page = () => {
    return ( 
        <div className="px-8 bg-[#080a1f]">
            <NFTInformation />
            <div className="flex flex-col md:flex-row gap-4 py-4">
                <div className="w-full md:w-1/3">
                    <OwnerInfo />
                </div>
                <div className="w-full md:w-2/3">
                    <LoanHistory />
                </div>
            </div>
        </div> 
    );
}
 
export default Page;