import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <>
      {playersData.map((player) => (
        <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} />
      ))}
    </>
  );
};

export default AvailablePlayers;
