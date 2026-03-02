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
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <RoutingSection />
      <Suspense
        fallback={<span className="loading loading-dots loading-lg"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise} />
      </Suspense>

      <SelectedPlayes />
    </div>
  );
}

export default App;
