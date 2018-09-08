import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Card from "./components/Card";
import CardList from "./components/CardList";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Router>
          <Switch>
            <Route path="/pokemon/:id" component={Card} />
            <Route path="/" component={CardList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
