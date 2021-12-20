import * as React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function ButtonAppBar() {
  //Breakpoints
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const backgroundImage = isSM
    ? "linear-gradient(to right, #084081 75%, black)"
    : "linear-gradient(to right, #084081 15%, black)";

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        color: "white",
        backgroundColor: { backgroundImage },
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="body2"
          color="inherit"
          sx={{ flexGrow: 1, marginTop: "5px", textAlign: "center" }}
        >
          Bruce Oakley, Inc. | 3400 GRIBBLE STREET, NORTH LITTLE ROCK, AR 72114
          |{" "}
          <a
            href="tel: 501-945-0875"
            style={{ color: "white", textDecoration: "none" }}
          >
            501-945-0875
          </a>{" "}
          |{" "}
          <a
            href="tel: 800-662-0875"
            style={{ color: "white", textDecoration: "none" }}
          >
            800-662-0875
          </a>{" "}
          |{" "}
          <a
            href="tel: 501-945-5722"
            style={{ color: "white", textDecoration: "none" }}
          >
            Fax 501-945-5722
          </a>{" "}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
