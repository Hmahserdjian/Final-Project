import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import Nav from "./Components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Signup" component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;

