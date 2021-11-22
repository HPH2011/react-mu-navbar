import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Link } from "@mui/material";

const DrawerLinks = ({ title, to }) => {
  const useStyles = makeStyles({
    button: {
      "&.active": {
        color: "#fdc12f",
      },
      color: "white",
      textDecoration: "none",
    },
  });

  const classes = useStyles();

  return (
    <ListItem
      button
      key={title}
      component={NavLink}
      to={to}
      exact
      className={classes.button}
    >
      {title}
    </ListItem>
  );
};

export default DrawerLinks;
