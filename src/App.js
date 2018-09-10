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
    currentPage: "1",
    searchTerm: ""
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

  setSearchtPage = searchTerm => {
    if (searchTerm !== null) {
      this.setState({ searchTerm: "search/" + searchTerm + "/" });
    }
  };

  startSearch = searchTerm => {
    if (searchTerm !== null) {
      this.props.history.push("/search/" + searchTerm + "/");
      window.location.reload();
    }
  };

  moveListBack = () => {
    this.props.history.push("/" + this.state.searchTerm + this.state.prevPage);
    window.location.reload();
  };

  moveListForward = () => {
    this.props.history.push("/" + this.state.searchTerm + this.state.nextPage);
    window.location.reload();
  };

  returnToList = () => {
    this.props.history.push(
      "/" + this.state.searchTerm + this.state.currentPage
    );
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/pokemon/:id">
              <div>
                <BackButton onClick={this.returnToList} detailsPage={true}/>
                <Route component={PkmnDetail} />
              </div>
            </Route>
            <Route path="/search/:name?/:page?">
              <div>
                <BackButton onClick={this.moveListBack} />
                <ForwardButton onClick={this.moveListForward} />
                <Route
                  render={props => (
                    <SearchBox {...props} onStartSearch={this.startSearch} />
                  )}
                />
                <Route
                  render={props => (
                    <CardList
                      {...props}
                      setNextPage={this.setNextPage}
                      setPrevPage={this.setPrevPage}
                      setCurrentPage={this.setCurrentPage}
                      setSearchPage={this.setSearchtPage}
                      search={true}
                    />
                  )}
                />
                <div id="bottomNavBar" />
              </div>
            </Route>
            <Route path="/">
              <div>
                <BackButton onClick={this.moveListBack} />
                <ForwardButton onClick={this.moveListForward} />
                <Route
                  render={props => (
                    <SearchBox {...props} onStartSearch={this.startSearch} />
                  )}
                />
                <Route
                  exact
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
