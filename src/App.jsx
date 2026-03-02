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
  const [availableBalance, setAvailableBalance] = useState(6000000);

  return (
    <div>
      <Navbar availableBalance={availableBalance} />
      <HeroSection />
      <RoutingSection activeTab={activeTab} handleToggle={handleToggle} />

      {activeTab === "available" ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-lg"></span>}
        >
          <div className="max-w-7xl my-8 mx-auto grid grid-cols-3 gap-5">
            <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise} />
          </div>
        </Suspense>
      ) : (
        <SelectedPlayes />
      )}
    </div>
  );
}

export default App;
