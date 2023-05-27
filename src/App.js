import "./App.css";
import background from "./background.png";

import * as React from "react";
//DataGrid Component ↓

//MUI Components ↓
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Container,
  ButtonGroup,
  Input,
  Box,
  Slider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Paper,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/system";
//My Custom Components ↓
import Navbar from "./components/Navbar";
import SplitButton from "./components/SplitButton";
//My Custom Styles ↓
import dataGridStyles from "./styles/dataGridStyles";

function App() {
  //THEME
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });
  //HOOKS
  const [value, setValue] = React.useState(50);
  const [currency, setCurrency] = React.useState("USD");

  //HANDLERS
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 1) {
      setValue(1);
    } else if (value > 99) {
      setValue(99);
    }
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleConfirm = () => {
    // Handle the confirm button click event
    console.log("Confirmed value:", value);
    console.log("Selected currency:", currency);
  };
  //DATA
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
    <Container sx={{ bgcolor: "#101420" }}>
      <div className="App">
        <header>
          <AppBar>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                aligItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  color: "red",
                  bgcolor: "#1c2233",
                  margin: "0 8px",
                  "&:hover": {
                    backgroundColor: "darkblue",
                    color: "white",
                  },
                }}
              >
                $Swap
              </Button>
              <div>
                <SplitButton
                  sx={{
                    margin: "0 8px",
                    borderColor: "black",
                    "&:hover": {
                      backgroundColor: "darkblue",
                      color: "white",
                    },
                  }}
                  options={["PEPE Chain", "BNB SmartChain", "Death Chain"]}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    right: 2,
                    color: "red",
                    bgcolor: "#1c2233",
                    margin: "0 8px",
                    marginLeft: "auto",
                    "&:hover": {
                      backgroundColor: "darkblue",
                      color: "white",
                    },
                  }}
                >
                  Connect Wallet
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </header>

        <body>
            <center>
              <div className="image-container">
                <img src={background} alt="Background" />
              </div>
              <div className="content-box">
                {/* <div className="container"> */}
                <div className="slider-container">
                  <div className="slider-value">{value}</div>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    min={1}
                    max={99}
                    color="secondary"
                    className="slider"
                    sx={{
                      "& .MuiSlider-rail": { color: "green", opacity: 1 },
                      "& .MuiSlider-track": { color: "red" },
                      "& .MuiSlider-thumb": { color: "green" },
                    }}
                  />
                </div>
                <div className="input-container">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="currency-select"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                  <Input
                    value={value}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: 1,
                      max: 99,
                      type: "number",
                    }}
                    className="input-field"
                  />
                  <Button
                    variant="contained"
                    onClick={handleConfirm}
                    className="confirm-button"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
              {/* </div> */}
            </center>
        </body>

        {/* <footer><center><Table headData={headData} rowData={rowData}></Table></center></footer> */}
        <footer>
          <Container sx={{ mt: 2 }}>
            <center>
              <div style={{ height: 300, width: "70%" }}>
                <DataGrid rows={rows} columns={columns} sx={dataGridStyles} />
              </div>
            </center>
          </Container>
        </footer>
      </div>
    </Container>
  );
}

export default App;
