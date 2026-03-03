import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayes from "./components/SelectedPlayers/SelectedPlayes";
import HeroSection from "./components/HeroSection/HeroSection";
import RoutingSection from "./components/RoutingSection/RoutingSection";

// Fetch Players Data
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  // Toggleing State
  const [activeTab, setActiveTab] = useState("available");
  // Toggleing Function
  const handleToggle = (tabName) => {
    setActiveTab(tabName);
  };

  // Blance State
  const [availableBalance, setAvailableBalance] = useState(600000000);

  // Purchase Players
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  // Remove Players
  const removedPlayers = (ply) => {
    console.log(ply);
    const removedPlayers = purchasedPlayers.filter(
      (removedPlayer) => removedPlayer.name !== ply.name,
    );
    setPurchasedPlayers(removedPlayers);
    setAvailableBalance(availableBalance + ply.biddingPrice);
  };

  return (
    <div>
      <Navbar availableBalance={availableBalance} />
      <HeroSection />
      <RoutingSection
        purchasedPlayers={purchasedPlayers}
        activeTab={activeTab}
        handleToggle={handleToggle}
      />

      {activeTab === "available" ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-lg"></span>}
        >
          <div className="max-w-7xl my-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <AvailablePlayers
              purchasedPlayers={purchasedPlayers}
              setPurchasedPlayers={setPurchasedPlayers}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              playersPromise={playersPromise}
            />
          </div>
        </Suspense>
      ) : (
        <SelectedPlayes
          removedPlayers={removedPlayers}
          purchasedPlayers={purchasedPlayers}
        />
      )}
    </div>
  );
}

export default App;
