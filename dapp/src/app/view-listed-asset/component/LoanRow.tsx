import { tableDataProps } from "@/utils/interface";
import React from "react";


interface LoanRowProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  tableData: tableDataProps
  setSelectedNFT: React.Dispatch<React.SetStateAction<tableDataProps | null>>

}



export default function LoanRow({setOpenModal, tableData, setSelectedNFT}: LoanRowProps) {



  const handleClick  = (tableData: tableDataProps) => {
    setOpenModal(true)
    setSelectedNFT(tableData)
  }



  return (
    <tr className="border-b text-[10px] md:text-sm border-gray-700 hover:bg-[#2a2a3d] transition">
      <td className="py-2 px-2 md:px-4"> {tableData.loanValue.toLocaleString("en-us")} </td>
      <td className="py-2 px-2 md:px-4"> {tableData.lender} </td>
      <td className="py-2 px-2 md:px-4">{tableData.interest}%</td>
      <td className="py-2 px-2 md:px-4">{tableData.apr}%</td>
      <td className="py-2 px-2 md:px-4">{tableData.duration} </td>
      <td className="py-2 px-2 md:px-4">{tableData.repayment.toLocaleString("en-us")} </td>
      <td className="py-2 px-2 md:px-4">
        <button onClick={() => handleClick(tableData) } className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-4 py-1 rounded-full text-xs font-medium">
          Accept
        </button>
      </td>
    </tr>
  );
}
