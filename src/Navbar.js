// Navbar.js
import React from "react";
import { AppBar, Toolbar } from "@mui/material";

function Navbar({ children }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <ul>
        {children}
        </ul>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;