import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import PkmnDetail from "./components/PkmnDetail";
import CardList from "./components/CardList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/pokemon/:id" component={PkmnDetail} />
            <Route path="/" component={CardList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
