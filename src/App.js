import Home from "./views/Home";
import Divisions from "./views/Divisions";
import About from "./views/About";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppBar from "./components/appbar/AppBar";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <div
          className="container body_container"
          style={{ overflowX: "hidden" }}
        >
          <AppBar />

          <Switch>
            <Router path="/" exact>
              <Home />
            </Router>
            <Router path="/Divisions">
              <Divisions />
            </Router>
            <Router path="/About">
              <About />
            </Router>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
