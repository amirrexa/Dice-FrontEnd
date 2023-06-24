import * as React from "react";
import { Card, CardContent, Button, TextField } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
  cardContainer: {
    borderRadius: "11px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    margin: "auto",
    width: "40%",
    height: "100%",
    marginBottom: "10px",
    alignItems: "center!important",
    justifyContent: "center!important",
    display: "flex",
    padding: "10px",
  },

  textField: {
    backgroundColor: "rgba(132, 0, 255, 0.303)",
    color: "white!important",
    borderRadius: "11px",
    border: "none!important",
    outline: "none!important",
    width: "100%!important",
    height: "100%!important",
    marginLeft: "auto",
  },

  card: {
    backgroundColor: "transparent!important",
    color: "white!important",
    marginRight: "auto",
    margin: "auto",
    height: "!important",
  },

  loginButton: {
    border: "none !important",
    backgroundColor: "rgba(132, 0, 255, 0.303)!important",
    color: "white !important",
    fontWeight: "bold !important",
    boxShadow: "none !important",
    outline: "none !important",
    height: "56px !important",
    width: "20%!important",
    borderRadius: "17px!important",
    "&:hover": {
      backgroundColor: "rgba(0, 255, 221, 0.3)!important",
      color: "white!important",
      fontWeight: "bold",
      borderRadius: "17px!important",
    },
    "&:active": {
      borderRadius: "17px!important;",
    },
  },
}));

const PlayerBox = () => {
  const classes = useStyles();
  const walletAddressRef = React.useRef();
  
  React.useEffect(() => {
    sessionStorage.removeItem("walletAddress")
    sessionStorage.removeItem("walletBalance");
  }, []);

  const [walletAddress, setWalletAddress] = React.useState(
    sessionStorage.getItem("walletAddress") || ""
  );
  const [walletBalance, setWalletBalance] = React.useState(
    sessionStorage.getItem("walletBalance") || null
  );

  React.useEffect(() => {
    const storedWalletAddress = sessionStorage.getItem("walletAddress");
    const storedWalletBalance = sessionStorage.getItem("walletBalance");

    setWalletAddress(storedWalletAddress || "");
    setWalletBalance(storedWalletBalance || null);
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7163/Dice/LoadPlayer",
        {
          params: {
            walletAddress: walletAddress,
          },
        }
      );
  
      const newWalletBalance = response.data.balance;
      sessionStorage.setItem("walletBalance", newWalletBalance);
      setWalletBalance(newWalletBalance); // update wallet balance state immediately
  
    } catch (error) {
      console.error("Error loading player:", error);
    }
  };
  

  const handleWalletAddressOnChange = (event) => {
    const newWalletAddress = event.target.value;
    setWalletAddress(newWalletAddress);
    sessionStorage.setItem("walletAddress", newWalletAddress);
  };
  

  return (
    <>
      <div className={classes.cardContainer}>
        <Card className={classes.card} sx={{textAlign: 'center'}}>
            <CardContent className={classes.card}>
              <b>Wallet Address: </b>
              <TextField
                inputRef={walletAddressRef}
                variant="standard"
                type="text"
                onChange={handleWalletAddressOnChange}
                className={classes.textField}
                placeholder="Wallet Address"              />
              <br />
                <b>Wallet Balance: </b>
                <TextField
  value={walletBalance !== null ? walletBalance : ""}
  className={classes.textField}
                  variant="standard"
                  InputProps={{
                    readOnly: true,
                    onClick: (event) => event.preventDefault(),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                ></TextField>
              </CardContent>
              <Button className={classes.loginButton} onClick={handleLogin} >
                Login
              </Button>
        </Card>
      </div>
    </>
  );
};
export default PlayerBox;
