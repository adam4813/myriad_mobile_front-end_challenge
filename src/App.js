import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import PkmnDetail from "./components/PkmnDetail";
import CardList from "./components/CardList";

import SearchBox from "./components/navigation/SearchBox";
import ForwardButton from "./components/navigation/ForwardButton";
import BackButton from "./components/navigation/BackButton";

import "./App.css";

class App extends Component {
  state = {
    nextPage: "",
    prevPage: ""
  };

  setNextPage = next => {
    if (next !== null) {
      this.setState({ nextPage: next });
    }
  };

  setPrevPage = prev => {
    if (prev !== null) {
      this.setState({ prevPage: prev });
    }
  };

  moveListBack = () => {
    this.props.history.push("/" + this.state.prevPage);
    window.location.reload();
  };
  moveListForward = () => {
    this.props.history.push("/" + this.state.nextPage);
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/pokemon/:id" component={PkmnDetail} />
            <Route>
              <div>
                <BackButton onClick={this.moveListBack} />
                <SearchBox />
                <ForwardButton onClick={this.moveListForward} />
                <Route
                  path="/:page?"
                  render={props => (
                    <CardList
                      {...props}
                      setNextPage={this.setNextPage}
                      setPrevPage={this.setPrevPage}
                    />
                  )}
                />
              </div>
            </Route>
          </Switch>
        </Router>
        <div id="bottomNavBar" />
      </div>
    );
  }
}

export default withRouter(App);
