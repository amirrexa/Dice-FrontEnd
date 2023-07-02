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
    padding: "40px",
    borderRadius: "11px",
    color: "white !important",
  },

  sliderContainer: {
    justifyContent: "center",
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
    borderRadius: "17px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    border: "none",
    outline: "none",
    color: "white",
  },

  betButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "bold",
    outline: "none",
    height: "56px",
    width: "20%",
    borderRadius: "17px!important",
    "&:hover": {
      backgroundColor: "#818cf6",
      color: "white",
      fontWeight: "bold",
      borderRadius: "17px",
    },
    "&:active": {
      borderRadius: "17px;",
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

    "&:disabled": {
      opacity: 0.5,
    },
  },

  inputField: {
    backgroundColor: "rgba(53, 53, 53, 0)",
    border: "none",
    outline: "none",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    borderRadius: "17px",
    "& .MuiInputBase-input.MuiOutlinedInput-input": {
      color: "white !important",
    },
  },

  currencySelect: {
    borderRadius: "8px!important",
    fontWeight: "500 !important",
    fontSize: "100%!important",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: "30%!important",
    border: "none",
    outline: "none",
    color: "white!important",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    display: "flex", //enable flex display
    alignItems: "center", // vertically center align the items
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
  const [multiplier, setMultiplier] = React.useState(5);
  const [betAmount, setBetAmount] = React.useState(0);
  const [selectedCurrency, setSelectedCurrency] = React.useState("usdt");
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState(
    sessionStorage.getItem("walletAddress")
  );
  const [walletBalance, setWalletBalance] = React.useState(
    sessionStorage.getItem("walletBalance")
  );

  React.useEffect(() => {
    handleFormOnChange();
  }, [
    walletAddress,
    walletBalance,
    sliderValue,
    selectedCurrency,
    betAmount,
    multiplier,
  ]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    setMultiplier(newValue / 10);
  };

  const handleFormOnChange = () => {
    const isAnyInputEmpty =
      !walletAddress ||
      !walletBalance ||
      // !sliderValue ||
      !selectedCurrency ||
      !betAmount ||
      !multiplier;
    const isBetAmountValid = betAmount !== "" && betAmount > 0;
    setIsFormValid(!isAnyInputEmpty && isBetAmountValid);
  };

  const handleMaxButtonClick = () => {
    setBetAmount(sessionStorage.getItem("walletBalance"));
  };

  const handleCurrencyOnChange = (event) =>
    setSelectedCurrency(event.target.value);

  const handleBetAmountOnChange = (event) => setBetAmount(event.target.value);

  const handleRollButtonClick = async (event) => {
    event.preventDefault();
    try {
      const requestData = {
        walletAddress,
        walletBalance,
        sliderValue,
        selectedCurrency,
        betAmount,
        multiplier,
      };

      await axios
        .post("https://localhost:7163/Dice/Roll", requestData)
        .then((response) => setWalletBalance(response.data.player.Balance));
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <form onSubmit={handleRollButtonClick} onChange={handleFormOnChange}>
      {/* Hidden Inputs From PlayerBox */}
      <input type="hidden" name="walletAddress" value={walletAddress} />
      <input type="hidden" name="walletBalance" value={walletBalance} />

      <div className={classes.contextBox}>
        <div className={classes.sliderContainer}>
          <div className={classes.multiplierValue} name="Multiplier">
            {multiplier}
          </div>
          <Slider
            value={sliderValue}
            name="sliderValue"
            onChange={handleSliderChange}
            min={1}
            max={99}
            color="secondary"
            className={classes.slider}
          />
          <div className={classes.multiplierValue}>{sliderValue}</div>
        </div>
        <div className={classes.inputContainer}>
          <div
            className={classes.betButton}
            onClick={() =>
              console.log("Bet Button Clicked (No actual functionality)")
            }
            variant="standard"
            fullHeight
          >
            BET
          </div>
          <TextField
            type="text"
            name="betAmount"
            value={betAmount}
            className={classes.inputField}
            variant="outlined"
            onChange={handleBetAmountOnChange}
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
            value={selectedCurrency}
            name="selectedCurrency"
            onChange={handleCurrencyOnChange}
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
            disabled={!isFormValid}
          >
            Roll
          </Button>
        </center>
      </div>
    </form>
  );
};

export default CustomSliderBox;
