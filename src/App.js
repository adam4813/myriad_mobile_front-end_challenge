import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import PkmnDetail from "./components/PkmnDetail";
import CardList from "./components/CardList";

import SearchBox from "./components/navigation/SearchBox";
import ForwardButton from "./components/navigation/ForwardButton";
import BackButton from "./components/navigation/BackButton";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/pokemon/:id" component={PkmnDetail} />
            <Route>
              <div>
                <BackButton />
                <SearchBox />
                <ForwardButton />
                <Route path="/" component={CardList} />
              </div>
            </Route>
          </Switch>
        </Router>
        <div id="bottomNavBar"/>
      </div>
    );
  }
}

export default App;
