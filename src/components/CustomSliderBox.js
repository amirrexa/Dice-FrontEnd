import * as React from "react";
import {
  Slider,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
  contextBox: {
    display: "block",
    margin: "auto",
    marginTop: "10px",
    marginRight: "auto",
    position: "static",
    justifyContent: "center",
    top: "30%",
    width: "35%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    /* opacity: 0; */
    padding: "40px",
    borderRadius: "11px",
  },

  sliderContainer: {
    justifyContent: "center",
    /* width: 100%; */
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
    marginBottom: "16px",
    marginRight: "auto",
  },

  multiplierValue: {
    textAlign: "center",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },

  slider: {
    color: "rgb(68, 201, 121)",
    "& .MuiSlider-rail": { color: "green", opacity: 1 },
    "& .MuiSlider-track": { color: "red" },
    "& .MuiSlider-thumb": { color: "green" },
  },

  inputContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(34, 34, 34, 0.5)",
    marginTop: "0%",
    borderEadius: "17px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    border: "none",
    outline: "none",
  },

  betButton: {
    border: "none !important",
    backgroundColor: "transparent !important",
    padding: "0 !important",
    color: "white !important",
    fontWeight: "bold!important",
    boxShadow: "none !important",
    outline: "none !important",
    height: "56px !important",
    width: "20%!important",
    borderRadius: "17px!important",
    "&:hover": {
      backgroundColor: "#818cf6 !important",
      color: "white!important",
      fontWeight: "bold",
      borderRadius: "17px!important",
    },
    "&:active": {
      borderRadius: "17px!important;",
    },
  },

  maxButton: {
    backgroundColor: "#00000000 !important",
    color: "#ffffff !important",
    padding: "50px 50 !important",
    borderRadius: "8px !important",
    textTransform: "uppercase !important",
    fontWeight: "bold !important",
    marginTop: "0px !important",
    "&:hover": {
      backgroundColor: "#ffffff !important",
      color: "black !important",
    },
  },

  rollButton: {
    border: "none !important",
    backgroundColor: "blue!important",
    padding: "0 !important",
    color: "white !important",
    fontWeight: "bold!important",
    boxShadow: "none !important",
    outline: "none !important",
    height: "56px !important",
    width: "20%!important",
    borderRadius: "17px!important",
    "&:hover": {
      backgroundColor: "darkblue !important",
      color: "white!important",
      fontWeight: "bold",
      borderRadius: "17px!important",
    },
    "&:active": {
      borderRadius: "17px!important;",
    },
  },

  inputField: {
    color: "#fff !important",
    backgroundColor: "rgba(53, 53, 53, 0)",
    border: "none",
    outline: "none",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    /* margin-right: 16px; */
    borderRadius: "17px",
    // justifyContent: "center",
    // padding: "20.5px 14px",
  },

  currencySelect: {
    borderRadius: "8px!important",
    fontWeight: "500 !important",
    fontSize: "100%!important",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    /* margin-left: auto; */
    /* margin-top: auto; */
    width: "30%!important",
    /* display: flex!important; */
    border: "none",
    outline: "none",
    color: "white",
    /* align-items: center!important; */
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    display: "flex", //enable flex display
    alignItems: "center", // vertically center align the items

    // '&:.MuiMenuItem-root': {
    //   display: flex;
    //   align-items: center;
    // }

    // .currency-select .menu-item-container {
    //   display: flex;
    //   align-items: center;
    // }
  },

  menuItem: {
    justifyContent: "left!important",
    alignItems: "center!important",
    textAlign: "center!important",
    margin: "auto!important",
    padding: "10%!important",
    paddingBottom: "0%",
  },
}));

const CustomSliderBox = () => {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = React.useState(50);
  const [betAmount, setBetAmount] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [multiplier, setMultiplier] = React.useState(1.94);

  // *** I don't remember why I created this ***
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // *** I don't remember why I created this ***
  // const handleBlur = () => {
  //   if (value < 1) {
  //     setValue(1);
  //   } else if (value > 99) {
  //     setValue(99);
  //   }
  // };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);

    // Calculate the multiplier based on the slider value
    let multiplier;











    if (newValue === 99) {
      multiplier = 97;
    } else if (newValue === 1) {
      multiplier = 0.98;
    } else {
      // Calculate the multiplier based on a linear interpolation between 97 and 0.98
      const range = 99 - 1; // Range of slider values (98)
      const multiplierRange = 97 - 0.98; // Range of multipliers (96.02)
      const percentage = (newValue - 1) / range; // Percentage of slider value in the range (0 to 1)

      // Interpolate the multiplier value
      multiplier = multiplierRange * percentage + 0.98;
    }

    // Format the multiplier with 'x' symbol and set it in the state
    setMultiplier(multiplier.toFixed(2) + "x");
  };


  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleBetChange = (event) => {
    // setBetAmount(event.target.value === "" ? "" : Number(event.target.value));
    setBetAmount(event.target.value);
    console.log("Death")
  };

  const handleMaxButtonClick = () => {};

  const handleRollButtonClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://localhost:7163/Dice/Roll", {
        // player: {
        //   name, 
        //   wallet:{
        //     address,
        //     balance
        //   }
        // },
        sliderValue,
        multiplier,
        currency,
        betAmount,
      });

      // Handle the response from the backend
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleRollButtonClick}>
      <div className={classes.contextBox}>
        <div className={classes.sliderContainer}>
          <div className={classes.multiplierValue}>{multiplier}</div>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            min={1}
            max={99}
            color="secondary"
            className={classes.slider}
          />
          <div className={classes.multiplierValue}>{sliderValue}</div>
        </div>
        <div className={classes.inputContainer}>
          <Button
            className={classes.betButton}
            onClick={() =>
              console.log("Bet Button Clicked (No actual functionality)")
            }
            fullHeight
          >
            BET
          </Button>
          <TextField
            type="text"
            className={classes.inputField}
            variant="outlined"
            // value
            // fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Button
                    className={classes.maxButton}
                    onClick={handleMaxButtonClick}
                  >
                    Max
                  </Button>
                </InputAdornment>
              ),
            }}
          />

          <Select
            defaultValue="Choose"
            value={currency}
            onChange={handleCurrencyChange}
            variant="outlined"
            className={classes.currencySelect}
          >
            <MenuItem value="usdt" className={classes.menuItem}>
              <img width="24" height="24" src={"/icons/usdt.png"} alt="usdt" />
              &nbsp;USDT
            </MenuItem>

            <MenuItem value="eth" className={classes.menuItem}>
              <img width="24" height="24" src={"/icons/eth.png"} alt="eth" />
              &nbsp;ETH
            </MenuItem>
            <MenuItem value="bnb" className={classes.menuItem}>
              <img width="24" height="24" src={"/icons/bnb.png"} alt="bnb" />
              &nbsp;BNB
            </MenuItem>
          </Select>
        </div>
        <center>
          <Button
            className={classes.rollButton}
            sx={{ marginTop: "10px" }}
            type="submit"
          >
            Roll
          </Button>
        </center>
      </div>
    </form>
  );
};

export default CustomSliderBox;
