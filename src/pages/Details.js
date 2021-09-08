import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";

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
    color: "white",
  },
}));

const Details = (props) => {
  // console.log("Data", props.location.data);
  const result = props.location.data;
  console.log(result);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar className={classes.navbar} />
      <div className={classes.main}>
        <div className="card">
          <div className="card-details">
            <img className="hero-img" src={result.image.url} alt="" />
            <h1 className="superhero-name">{result.name}</h1>
            <div className="powerstats">
              <h1 className="attribute-title">PowerStats</h1>
              <div className="detail-power">
                <div className="info-title">Combat</div>
                <div id="combat" className="bar">
                  {result.powerstats.combat}%
                </div>
              </div>
              <div className="detail-power">
                <div className="info-title">Durability</div>
                <div id="combat" className="bar">
                  {result.powerstats.durability}%
                </div>
              </div>
              <div className="detail-power">
                <div className="info-title">Intelligence</div>
                <div id="combat" className="bar">
                  {result.powerstats.intelligence}%
                </div>
              </div>
              <div className="detail-power">
                <div className="info-title">Power</div>
                <div id="combat" className="bar">
                  {result.powerstats.power}%
                </div>
              </div>
              <div className="detail-power">
                <div className="info-title">Speed</div>
                <div id="combat" className="bar">
                  {result.powerstats.speed}%
                </div>
              </div>
              <div className="detail-power">
                <div className="info-title">Strength</div>
                <div id="combat" className="bar">
                  {result.powerstats.strength}%
                </div>
              </div>
            </div>
            <div id="appearance" className="superheroInfo">
              <h1>Appearance</h1>
              <div className="detail">
                <div className="info-title">Gender</div>
                <div id="gender" className="info-content">
                  Male
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Race</div>
                <div id="race" className="info-content">
                  Icthyo Sapien
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Height</div>
                <div id="height" className="info-content">
                  6'3,191 cm
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Weight</div>
                <div id="weight" className="info-content">
                  145 lb,65 kg
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Eye color</div>
                <div id="eye-color" className="info-content">
                  Blue
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Hair color</div>
                <div id="hair-color" className="info-content">
                  No Hair
                </div>
              </div>
            </div>
            {/* biography */}
            <div id="biography" className="superheroInfo">
              <h1>Biography</h1>
              <div className="detail">
                <div className="info-title">Full name</div>
                <div id="full-name" className="info-content">
                  {result.biography["full-name"]}
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Place of birth</div>
                <div id="place-of-birth" className="info-content">
                  {result.biography["place-of-birth"]}
                </div>
              </div>
              <div className="detail">
                <div className="info-title">First appearance</div>
                <div
                  style={{ width: "300px" }}
                  id="first-appearance"
                  className="info-content"
                >
                  {result.biography["first-appearance"]}
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Publisher</div>
                <div id="publisher" className="info-content">
                  {result.biography["publisher"]}
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Alignment</div>
                <div id="alignment" className="info-content">
                  {result.biography["alignment"]}
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Alter egos</div>
                <div id="alter-egos" className="info-content">
                  {result.biography["alter-egos"]}
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Aliases</div>
                <div id="aliases" className="info-content">
                  {result.biography["aliases"]}
                </div>
              </div>
            </div>
            {/* work */}
            <div
              style={{ width: "80%", margin: "15px auto" }}
              classname="work-info"
            >
              <h1>Work</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                  margin: "10px 0",
                }}
                classname="detail"
              >
                <div classname="info-title">Occupation</div>
                <div style={{ width: "400px" }} classname="info-content">
                  {result.work.occupation}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                  margin: "10px 0",
                }}
                classname="detail"
              >
                <div classname="info-title">Base</div>
                <div classname="info-content">{result.work.base}</div>
              </div>
            </div>
            <div id="connections" class="superheroInfo">
              <h1>Connections</h1>
              <div className="detail">
                <div className="info-title">Relatives</div>
                <div
                  style={{ width: "300px" }}
                  id="relatives"
                  className="info-content"
                >
                  {result.connections.relatives}
                </div>
              </div>
              <div className="detail">
                <div className="info-title">Group affiliations</div>
                <div id="group-affiliation" className="info-content">
                  {result.connections["group-affiliation"]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
