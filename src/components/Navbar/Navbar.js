import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className="logo">
              <img className="nav-logo" src="/images/logo.png" alt="logo" />
            </div>

            <Typography variant="h6" className={classes.title}>
              SuperHero Search
            </Typography>
            <Link
              style={{
                color: "white",
                padding: "10px",
                textDecoration: "none",
                fontWeight: "500",
              }}
              to="/"
            >
              HOME
            </Link>
            <Button color="inherit">Favourites</Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
