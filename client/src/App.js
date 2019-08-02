import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import "./App.scss";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import CV from "./pages/CV";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/portfolio/:id" exact component={Project} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/cv" exact component={CV} />
            <Route path="/" exact component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}
