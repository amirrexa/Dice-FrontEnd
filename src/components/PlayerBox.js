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
    marginBottom: "10px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: "10px",
  },

textField: {
  backgroundColor: "rgba(132, 0, 255, 0.303)",
  color: "white!important",
  borderRadius: "11px",
  border: "none!important",
  outline:"none!important"
},

  card: {
    backgroundColor: "transparent!important",
    color: "white!important",
  },

  switchButton: {
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

  return (
    <>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <form>
            <CardContent className={classes.card}>
              <ul sx={{listst: 'none'}}>
                <li sx={{listst: 'none'}}>              <b>Player Name: </b><TextField variant="standard" type="text" className={classes.textField} placeholder="Player Name" /><br />
</li>
                <li>              <b>Wallet Address: </b><TextField variant="standard" type="text" className={classes.textField} placeholder="Wallet Address" />
</li>
              </ul>
            </CardContent>
            <center><Button className={classes.switchButton}>Login</Button></center>
          </form>
        </Card>
      </div>
    </>
  );
};

export default PlayerBox;