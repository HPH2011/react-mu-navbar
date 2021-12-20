import * as React from "react";
import Drawer from "./Drawer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";

import AppBarLinks from "./AppBarLinks";
import Banner from "../../assets/images/OakleyMag.svg";

export default function ButtonAppBar() {
  const [pageLocation, setPageLocation] = useState("/");
  const [appBarBackgroundColor, setAppBarBackgroundColor] =
    useState("transparent");
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleHomePageBackgroundTransparent = () => {
    setAppBarBackgroundColor("transparent");
  };

  const handleOtherPageBackgrounds = () => {
    setAppBarBackgroundColor("#1D4280");
  };

  if (pageLocation != location.pathname) {
    setPageLocation(location.pathname);
  }

  const handleScroll = () => {
    var y = document.querySelector(".body_container").scrollTop;

    pageCheck(y);
  };

  const pageCheck = (y) => {
    if (pageLocation == "/") {
      if (y && y > 204) {
        handleOtherPageBackgrounds();
      } else {
        handleHomePageBackgroundTransparent();
      }
    } else {
      handleOtherPageBackgrounds();

      if (document.querySelector(".body_container") != null) {
        document
          .querySelector(".body_container")
          .removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    pageCheck();

    if (document.querySelector(".body_container") != null) {
      document
        .querySelector(".body_container")
        .addEventListener("scroll", handleScroll);
    }

    // cleanup this component

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageLocation]);

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        className="Appbar"
        sx={{
          position: "sticky",
          zIndex: 5,
          top: 0,
          background: appBarBackgroundColor,
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, marginTop: "5px" }}
          >
            <img src={Banner} style={{ width: "250px" }} />
          </Typography>

          {isMatch ? (
            <Drawer />
          ) : (
            <>
              <>
                <AppBarLinks title="Home" to="/" />
                <AppBarLinks title="About" to="About" />
                <AppBarLinks title="Divisions" to="Divisions" />
                <AppBarLinks title="Fuel Discounts" to="Fuel Discounts" />
                <AppBarLinks title="Orientation" to="Orientation" />
                <AppBarLinks title="Contact" to="Contact" />
                <AppBarLinks title="Wash Facilities" to="Wash Facilities" />

                <Button
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  onMouseOver={handleClick}
                  sx={{ color: "white" }}
                >
                  Media
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem disabled>Media</MenuItem>

                  <Divider />

                  <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="https://podcast.bruceoakley.com/"
                    target="_blank"
                  >
                    Podcast
                  </MenuItem>

                  <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="https://www.facebook.com/OakleyTruckingInc/"
                    target="_blank"
                  >
                    Facebook
                  </MenuItem>

                  <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="https://www.youtube.com/user/OakleyTruckingInc/featured"
                    target="_blank"
                  >
                    Youtube
                  </MenuItem>
                </Menu>
              </>

              <Button
                href="https://ebe.bruceoakley.com/swd/mobile/m.Login.asp"
                target="_blank"
                variant="outlined"
                sx={{ my: 1, mx: 1.5, color: "#fdc12f" }}
              >
                Login
              </Button>

              <Button
                href="https://ebe.bruceoakley.com/mobilewebapprecruiting/"
                target="_blank"
                variant="outlined"
                sx={{ my: 1, mx: 1.5, color: "#fdc12f" }}
              >
                Apply
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
