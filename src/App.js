import "./App.css";
import * as React from "react";
import axios from "axios";

import CustomDataGrid from "./components/CustomDataGrid";
import CustomAppBar from "./components/CustomAppBar";
import CustomInfoBar from "./components/CustomInfoBar";
import CustomSliderBox from "./components/CustomSliderBox";

function App() {
  const columns = [
    { field: "col1", headerName: "Player", width: 150 },
    { field: "col2", headerName: "Target", width: 150 },
    { field: "col3", headerName: "Rolled", width: 150 },
    { field: "col4", headerName: "Payout", width: 150 },
  ];

  const rows = [
    { id: 1, col1: "Amirreza", col2: "22x", col3: 70, col4: 20 },
    { id: 2, col1: "Hamidreza", col2: "16x", col3: 32, col4: 59 },
    { id: 3, col1: "Alireza", col2: "62x", col3: 64, col4: 67 },
    { id: 4, col1: "Mohammadreza", col2: "43x", col3: 12, col4: 25 },
    { id: 5, col1: "Ahmadreza", col2: "77x", col3: 63, col4: 16 },
    { id: 6, col1: "Mobinreza", col2: "72x", col3: 87, col4: 73 },
    { id: 7, col1: "Emadreza", col2: "69x", col3: 26, col4: 92 },
    { id: 8, col1: "Navidreza", col2: "73x", col3: 37, col4: 62 },
    { id: 9, col1: "Aminreza", col2: "91x", col3: 84, col4: 72 },
    { id: 10, col1: "Naeimreza", col2: "46x", col3: 36, col4: 31 },
    { id: 11, col1: "Yoosefreza", col2: "52x", col3: 49, col4: 75 },
  ];
  return (
    <>
      <CustomAppBar />
      <body>
        <CustomInfoBar />
        <CustomSliderBox />
        <CustomDataGrid rows={rows} columns={columns} />
      </body>
    </>
  );
}
export default App;
