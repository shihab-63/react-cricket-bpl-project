import React from "react";

const RoutingSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center mt-10">
      <h1 className="text-2xl font-bold">Available Players</h1>
      <div>
        <button className="border border-gray-300 py-2 px-5 font-bold rounded-l-2xl border-r-0 bg-[#E7FE29] cursor-pointer">
          Available
        </button>
        <button className="border border-gray-300 py-2 px-5 font-bold rounded-r-2xl border-l-0 cursor-pointer">
          Selected <span>(0)</span>
        </button>
      </div>
    </div>
  );
};

export default RoutingSection;
