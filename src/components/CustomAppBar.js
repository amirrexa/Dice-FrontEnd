import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import SplitButton from "./SplitButton";

const useStyles = makeStyles(() => ({

  appBar: {
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  swapButton: {
    color: '#818cf6!important',
    backgroundColor: '#1c2233!important',
    margin: '0 8px!important',
    fontWeight: '700!important',
    textTransform: 'none!important',
    '&:hover': {
        backgroundColor: 'darkblue!important',
        color: 'white!important'}
  },

  connectWalletButton: {
    color: 'white!important',
    textTransform: 'none!important',
    backgroundColor: '#1c2233!important',
  /* margin: 0 8px; */
    fontWeight: '700!important',
    marginLeft: '8px!important',
    '&:hover': {
        backgroundColor: 'darkblue!important'
    }
  },

  transparentToolbar:{
    color: "white",
    fontSize: 18,
    // backgroundColor: "#818cf6",
    // outline: "4px solid #818cf6",
    borderRadius: "8px",
    marginInline: "2px",
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
      <Button className={classes.swapButton}>Swap</Button>
        <div> { /* For putting the buttons next to each other */}
          <SplitButton
            options={["Binance SmartChain", "Ethereum Chain", "TRON Chain"]}
          />
          <Button className={classes.connectWalletButton}>Connect Wallet</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;