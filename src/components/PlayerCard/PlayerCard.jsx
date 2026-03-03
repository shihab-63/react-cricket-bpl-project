import React, { useState } from "react";
import groupImg from "../../assets/Group.png";
import flagImg from "../../assets/flag.png";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  // Handle Selected
  const handleSelected = (playerData) => {
    if (availableBalance < playerData.biddingPrice) {
      return alert("Ja Vag Sala😁");
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerData.biddingPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData]);
  };
  return (
    <div className="border border-gray-200 mx-3 md:mx-0 shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-xl p-5">
      <figure>
        <img
          className="bg-cover w-full bg-center h-72 rounded-xl"
          src={player.image}
          alt="Shoes"
        />
      </figure>
      <div className="pt-5">
        <div className="flex items-center gap-4">
          <img className="w-5" src={groupImg} alt="" />
          <h2 className="card-title text-xl font-bold">{player.name}</h2>
        </div>

        {/* Country */}
        <div className="flex justify-between items-center border-b-2 mb-3 border-gray-100 text-green-900 py-3">
          <div className="flex items-center gap-2">
            <img
              className="w-4 h-4 object-contain grayscale opacity-50"
              src={flagImg}
              alt=""
            />
            <p className="font-bold">{player.country}</p>
          </div>
          <div className="">
            <p className="bg-green-100 text-sm p-1 px-3 rounded-xl text-black">
              {player.role}
            </p>
          </div>
        </div>

        {/* rating */}
        <div className="flex justify-between items-center">
          <p className="font-bold">Rating</p>
          <span className="text-gray-500 font-semibold">
            {player.rating} ⭐⭐⭐
          </span>
        </div>
        {/* Style */}
        <div className="flex my-2 justify-between items-center">
          <p className="font-bold">{player.battingType}</p>
          <span className="text-gray-500 text-sm font-semibold">
            {player.bowlingType}
          </span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="text-lg font-bold">$ {player.biddingPrice}</p>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className={
              isSelected
                ? "bg-gray-300 font-semibold text-black border border-gray-300 cursor-not-allowed p-1 px-3 rounded-lg"
                : "border border-green-500 text-sm active:scale-95 transition-all duration-200 p-1 px-3 rounded-lg text-black cursor-pointer"
            }
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
