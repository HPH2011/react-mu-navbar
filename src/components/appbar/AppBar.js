import * as React from "react";
import customTheme from "../../assets/customTheme";
import Drawer from "./Drawer";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Layout,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AppBarLinks from "./AppBarLinks";

import { styled } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  //Breakpoints
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: "#094081",
        color: "#fdc12f",
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        ></Typography>

        {isMatch ? (
          <Drawer />
        ) : (
          <>
            <nav>
              <AppBarLinks title="Home" to="/" />
            </nav>

            <Button
              href="#"
              variant="outlined"
              sx={{ my: 1, mx: 1.5, color: "#fdc12f" }}
            >
              Apply
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
