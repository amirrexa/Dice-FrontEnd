import "./App.css";
import * as React from "react";
import axios from "axios";

import CustomDataGrid from "./components/CustomDataGrid";
import CustomAppBar from "./components/CustomAppBar";
import CustomInfoBar from "./components/CustomInfoBar";
import CustomSliderBox from "./components/CustomSliderBox";
import PlayerBox from "./components/PlayerBox";

function App() {
  const [playerData, setPlayerData] = React.useState({playerName:'', walletAddress:'', walletBalance:''});

  const handlePlayerDataUpdate = (data) => {
    setPlayerData(data);
  };

  return (
    
    <>
      <CustomAppBar />
      <body>
        <CustomInfoBar />
        <PlayerBox onPlayerDataUpdate={handlePlayerDataUpdate}/>
        <CustomSliderBox playerData={playerData}/>
        <CustomDataGrid />
      </body>
    </>
  );
}
export default App;
