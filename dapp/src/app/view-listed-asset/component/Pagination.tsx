import React from "react";

const Pagination = () => {
  return (
    <div className=" text-gray-400 px-4 py-3 rounded flex items-center gap-4 ml-[150px] w-fit">
      <span className="text-sm">
        Showing <span className="text-white">1 to 06</span> of{" "}
        <span className="text-white">3</span> items
      </span>
      <div className="flex items-center gap-2">
        <button className="text-white text-sm px-2">&lt;</button>

        <button className="bg-white text-black font-semibold rounded-xl px-2.5 py-1 text-sm">
          1
        </button>
        <button className="text-white text-sm px-2.5 py-1">2</button>
        <button className="text-white text-sm px-2.5 py-1">3</button>

        <button className="text-white text-sm px-2">&gt;</button>
      </div>
    </div>
  );
};

export default Pagination;
