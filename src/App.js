import "./App.css";
import * as React from "react";
//DataGrid Component ↓
import { DataGrid } from "@mui/x-data-grid";
//MUI Components ↓
import {
  Button,
  Slider,
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
  Input,
} from "@mui/material";
import {
  InfoOutlined,
  DescriptionOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  VolumeOffOutlined,
  VolumeUpOutlined,
} from "@mui/icons-material/";
//CryptoCurrencyIcons ↓

//My Custom Components ↓
import SplitButton from "./components/SplitButton";
//My Custom Styles ↓
import dataGridStyles from "./styles/dataGridStyles";
import { hover } from "@testing-library/user-event/dist/hover";

function App() {
  //HOOKS
  const [value, setValue] = React.useState(50);
  const [currency, setCurrency] = React.useState("USDT");
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  //HANDLERS

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prevScreen) => !prevScreen);
  };

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
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "#818cf6",
              bgcolor: "#1c2233",
              margin: "0 8px",
              fontWeight: 700,
              textTransform: "none",
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
                padding: "7px 16px",
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
                // right: 2,
                color: "white",
                textTransform: "none",
                bgcolor: "#1c2233",
                // margin: "0 8px",
                fontWeight: 700,
                marginLeft: "8px",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <body>
        <div className="info-bar">
          <Toolbar>
            <b
              style={{
                color: "white",
                fontSize: 18,
                // backgroundColor: "#818cf6",
                // outline: "4px solid #818cf6",
                borderRadius: "8px",
                marginInline: "2px",
              }}
            >
              Dice
            </b>
            <Tooltip title="Keep Losing Your Money 🤑💸" placement="bottom">
              <IconButton sx={{ color: "white", marginInline: "2px" }}>
                <InfoOutlined />
              </IconButton>
            </Tooltip>
            <IconButton sx={{ color: "white", marginInline: "2px" }}>
              <DescriptionOutlined />
            </IconButton>
            <IconButton
              onClick={toggleFullscreen}
              sx={{ color: "white", marginInline: "2px" }}
            >
              {isFullscreen ? (
                <FullscreenExitOutlined />
              ) : (
                <FullscreenOutlined />
              )}
            </IconButton>
            <IconButton
              onClick={toggleMute}
              sx={{ color: "white", marginInline: "2px" }}
            >
              {isMuted ? <VolumeOffOutlined /> : <VolumeUpOutlined />}
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: "#818cf6",
                bgcolor: "#1c2233",
                marginLeft: "auto",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "darkblue",
                  color: "white",
                },
              }}
            >
              Analytics
            </Button>
          </Toolbar>
        </div>
        <div className="content-box">
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
            {/* <div className="button-container"> */}
            <Button className="bet-button" onClick={handleConfirm} fullHeight>
              BET
            </Button>
            {/* </div> */}

            {/* <Input
              value={value}
              onChange={handleInputChange}
              // onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 1,
                max: 99,
                type: "text",
              }}
              className="input-field"
            /> */}
            <TextField
              type="text"
              className="input-field"
              variant="outlined"
              // fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Button className="max-button">Max</Button>
                  </InputAdornment>
                ),
              }}
            />

            <Select
              defaultValue="boogh"
              value={currency}
              onChange={handleCurrencyChange}
              variant="outlined"
              className="currency-select"
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                color: "white",
                display: "flex", //enable flex display
                alignItems: "center", // vertically center align the items
              }}
            >
              <MenuItem value="usdt" className={"menu-item"}>
                <img
                  width="24"
                  height="24"
                  src={"/icons/usdt.png"}
                  alt="usdt"
                />
                &nbsp;USDT
              </MenuItem>

              <MenuItem value="eth" className={"menu-item"}>
                <img width="24" height="24" src={"/icons/eth.png"} alt="eth" />
                &nbsp;ETH
              </MenuItem>
              <MenuItem value="bnb" className={"menu-item"}>
                <img width="24" height="24" src={"/icons/bnb.png"} alt="bnb" />
                &nbsp;BNB
              </MenuItem>
            </Select>
          </div>
        </div>

        <div
          style={{
            height: 300,
            width: "60%",
            margin: "auto",
            marginTop: "24px",
          }}
        >
          <DataGrid rows={rows} columns={columns} sx={dataGridStyles} />
        </div>
      </body>
    </>
  );
}

export default App;
