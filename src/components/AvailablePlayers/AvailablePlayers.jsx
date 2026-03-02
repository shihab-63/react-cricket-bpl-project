import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance }) => {
  const playersData = use(playersPromise);
  return (
    <>
      {playersData.map((player, index) => (
        <PlayerCard key={index} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} />
      ))}
    </>
  );
};

export default AvailablePlayers;
