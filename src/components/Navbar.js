import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = ({ children }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Noobish Clone of BetSwirl
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;