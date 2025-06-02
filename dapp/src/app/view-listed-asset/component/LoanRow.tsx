import React from "react";


interface LoanRowProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}



export default function LoanRow({setOpenModal}: LoanRowProps) {




  return (
    <tr className="border-b border-gray-700 hover:bg-[#2a2a3d] transition">
      <td className="py-2 px-4">2,856.41</td>
      <td className="py-2 px-4">0D673a4...2</td>
      <td className="py-2 px-4">1.17%</td>
      <td className="py-2 px-4">14.19%</td>
      <td className="py-2 px-4">30 days</td>
      <td className="py-2 px-4">2,891.75</td>
      <td className="py-2 px-4">
        <button onClick={() => setOpenModal(true)} className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-4 py-1 rounded-full text-xs font-medium">
          Accept
        </button>
      </td>
    </tr>
  );
}
