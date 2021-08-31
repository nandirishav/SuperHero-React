import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Navbar from "../components/Navbar/Navbar";
import "../app.css";
import SearchResult from "../components/SearchResult/SearchResult";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    overflow: "auto",
    width: "100%",
    height: "100%",
    minHeight: "100%",
  },
  navbar: {
    position: "fixed",
  },
  main: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background:
      "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) , url(/images/bg1.webp) center center",
    backgroundSize: "fit",
    overflowY: "scroll",
  },
  textField: {
    width: "60%",
    maxWidth: "500px",
    position: "absolute",
    backgroundColor: "#6F63CD",
    color: "white",
    borderRadius: "30px",
    top: "40%",
    left: "35%",
    zIndex: "3",
  },
  input: {
    color: "white",
  },
  noBorder: {
    border: "none",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [superhero, setSuperhero] = useState("");
  const [superheroData, setSuperheroData] = useState([]);
  // const [length, setLength] = useState(0);

  async function getSuperHeroes() {
    const response = await fetch(
      `https://superheroapi.com/api.php/829469487718011/search/${superhero}`
    );
    const data = await response.json();
    setSuperheroData(data.results);
    // console.log(superheroData);
  }

  function handleChange(e) {
    const searchTerm = e.target.value;
    setSuperhero(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      getSuperHeroes();
    }
  }

  return (
    <div className={classes.container}>
      <Navbar className={classes.navbar} />
      <div className={classes.main}>
        <div className="input-field">
          <TextField
            className={classes.textField}
            id="outlined-basic"
            placeholder="Search for SuperHeroes"
            value={superhero}
            variant="outlined"
            autoComplete="off"
            onChange={handleChange}
            InputProps={{
              className: classes.input,
              classes: { notchedOutline: classes.noBorder },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </div>
        <div id="results">
          <SearchResult superheroData={superheroData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
