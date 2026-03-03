import React from "react";
import PurchasedPlayers from "../PurchasedPlayers/PurchasedPlayers";

const SelectedPlayes = ({ purchasedPlayers, removedPlayers }) => {
  return (
    <div className="max-w-7xl my-5 mx-auto">
      {purchasedPlayers.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-20 p-10 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-300">
          <img
            className="w-40 mb-6 opacity-60"
            src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
            alt="Empty List"
          />
          <h2 className="text-3xl font-bold text-gray-500">
            No Players Selected Yet!
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Please go to the 'Available' section and choose players for your
            Dream 11 team.
          </p>
        </div>
      ) : (
        purchasedPlayers.map((player, index) => (
          <PurchasedPlayers
            removedPlayers={removedPlayers}
            key={index}
            player={player}
          />
        ))
      )}
    </div>
  );
};

export default SelectedPlayes;
