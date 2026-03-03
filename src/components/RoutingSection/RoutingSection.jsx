import React from "react";

const RoutingSection = ({ activeTab, handleToggle, purchasedPlayers }) => {
  return (
    <div className="max-w-7xl mx-auto text-center  md:flex justify-between items-center mt-10">
      <h1 className="text-2xl font-bold">
        {activeTab === "available"
          ? "Available Players"
          : `Selected Player (${purchasedPlayers.length}/6)`}
      </h1>
      <div>
        <button
          onClick={() => handleToggle("available")}
          className={`border border-gray-300 mt-4 md:mt-0 py-2 px-5 font-bold rounded-l-2xl border-r-0 cursor-pointer ${activeTab === "available" ? "bg-[#E7FE29]" : "text-gray-500"}`}
        >
          Available
        </button>
        <button
          onClick={() => handleToggle("selected")}
          className={`border border-gray-300 py-2 px-5 font-bold rounded-r-2xl border-l-0 cursor-pointer ${activeTab === "selected" ? "bg-[#E7FE29]" : "text-gray-500"}`}
        >
          Selected <span>({purchasedPlayers.length})</span>
        </button>
      </div>
    </div>
  );
};

export default RoutingSection;
