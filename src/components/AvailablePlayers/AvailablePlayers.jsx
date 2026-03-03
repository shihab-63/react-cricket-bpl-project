import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const playersData = use(playersPromise);
  return (
    <>
      {playersData.map((player, index) => (
        <PlayerCard
          key={index}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        />
      ))}
    </>
  );
};

export default AvailablePlayers;
