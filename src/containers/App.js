import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";

import "../styles.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/details/:id" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
