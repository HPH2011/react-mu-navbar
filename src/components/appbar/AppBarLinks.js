import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const AppBarLinks = ({ title, to }) => {
  const useStyles = makeStyles({
    button: {
      "&.active": {
        color: "#fdc12f",
      },
    },
  });

  const classes = useStyles();

  return (
    <Link
      variant="button"
      color="text.primary"
      className={classes.button}
      sx={{ my: 1, mx: 1.5, color: "white" }}
      underline="none"
      component={NavLink}
      to={to}
      exact
    >
      {title}
    </Link>
  );
};

export default AppBarLinks;
