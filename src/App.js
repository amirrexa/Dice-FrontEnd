import "./App.css";
import * as React from "react";
import axios from "axios";

import CustomDataGrid from "./components/CustomDataGrid";
import CustomAppBar from "./components/CustomAppBar";
import CustomInfoBar from "./components/CustomInfoBar";
import CustomSliderBox from "./components/CustomSliderBox";
import PlayerBox from "./components/PlayerBox";

function App() {
  return (
    <>
      <CustomAppBar />
      <body sx={{ color: "white" }}>
        <CustomInfoBar />
        <PlayerBox />
        <CustomSliderBox />
        <CustomDataGrid />
      </body>
    </>
  );
}
export default App;
