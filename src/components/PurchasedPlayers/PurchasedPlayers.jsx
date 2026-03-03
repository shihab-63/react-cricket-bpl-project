import React from "react";
import deleteImg from "../../assets/Frame.png";
import { toast } from "react-toastify";

const PurchasedPlayers = ({ player, removedPlayers }) => {
  const handlePlayersRemoved = () => {
    removedPlayers(player);
    toast.warning("Deleted")
  };
  return (
    <div>
      <div className="flex my-4 justify-between items-center p-4 border border-gray-200 rounded-xl">
        <div className="flex items-center gap-5">
          <img className="rounded-xl w-18 h-18" src={player.image} alt="" />
          <div>
            <h1 className="text-2xl font-bold">{player.name}</h1>
            <p className="text-gray-500 text-xl">{player.role}</p>
          </div>
        </div>
        <img
          onClick={handlePlayersRemoved}
          className="cursor-pointer select-none active:scale-90"
          src={deleteImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default PurchasedPlayers;
