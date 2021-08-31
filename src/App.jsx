//app.js
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Details from "./pages/Details";
import Favourites from "./pages/Favourites";
// import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/favourites" component={Favourites} />
      </Switch>
    </div>
  );
};

export default App;
