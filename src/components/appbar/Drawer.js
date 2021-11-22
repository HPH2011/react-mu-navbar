import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import DrawerLinks from "./DrawerLinks";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const useStyles = makeStyles({
    paper: {
      background: "#094081",
      color: "white",
    },
    root: {
      color: "white",
    },
  });

  const styles = useStyles();

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <DrawerLinks to="/" title="Home" />
      </List>
      <Divider />
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button
          href="#"
          variant="outlined"
          sx={{ my: 1, mx: 1.5, width: 1 / 2, color: "#fdc12f" }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );

  return (
    <React.Fragment key="right">
      <Button onClick={toggleDrawer("right", true)}>
        <MenuIcon classes={{ root: styles.root }} />
      </Button>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        classes={{ paper: styles.paper }}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
}
