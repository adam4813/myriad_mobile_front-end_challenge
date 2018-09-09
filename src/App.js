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
    prevPage: "",
    currentPage: "1"
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

  setCurrentPage = current => {
    if (current !== null) {
      this.setState({ currentPage: current });
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

  returnToList = () => {
    this.props.history.push("/" + this.state.currentPage);
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/pokemon/:id">
              <div>
                <BackButton onClick={this.returnToList} />
                <Route component={PkmnDetail} />
              </div>
            </Route>
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
                      setCurrentPage={this.setCurrentPage}
                    />
                  )}
                />
                <div id="bottomNavBar" />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
