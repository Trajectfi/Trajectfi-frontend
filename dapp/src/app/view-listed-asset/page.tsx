"use client"



import React, { useEffect, useState } from 'react';
import ListingInfo from './component/ListingInfo';
import LoanTable from './component/LoanTable';
import Image from 'next/image';
import AcceptOfferComponent from './component/AcceptOfferComponent';
import { useRouter } from 'next/navigation';


const Page = () => {
const [openModal, setOpenModal] = useState<boolean>(false)
const router = useRouter()


useEffect(() => {

  document.body.style.overflowY = openModal ? "hidden" : "auto"


}, [openModal])




  return (
    <div className="font-oxanium min-h-screen bg-[#0f0f20] text-white p-6  ">
      <button onClick={() => router.back()} className=" text-sm font-medium mb-6  flex items-center gap-4 ">
        <Image src={"/images/back-icon.svg"} alt='back-icon' height={100} width={100} className=' w-[18px] h-[13px] ' /> Go Back
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
          <ListingInfo />

        <div className="w-full lg:w-2/3 bg-[#1a1a2e] rounded-2xl p-5 shadow-lg">
          <LoanTable setOpenModal={setOpenModal}  />
        </div>
      </div>
    {openModal &&   <AcceptOfferComponent setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Page;
