import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PkmnDetail from "./components/PkmnDetail";
import CardList from "./components/CardList";

import NavHeader from "./components/NavHeader";
import NavButton from "./components/navigation/NavButton";

import "./App.css";

class App extends Component {
  state = {
    nextPage: "",
    prevPage: "",
    currPage: "1",
    lastPage: "1",
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
      this.setState({ currPage: current });
    }
  };

  setLastPage = last => {
    if (last !== null) {
      this.setState({ lastPage: last });
    }
  };

  setSearchTerm = searchTerm => {
    if (searchTerm !== null) {
      this.setState({ searchTerm: "search/" + searchTerm + "/" });
    }
    if (searchTerm === "") {
      this.setState({ searchTerm: "" });
    }
  };

  renderCardListFragment = props => {
    return (
      <React.Fragment>
        <NavHeader
          prevPage={"/" + this.state.searchTerm + this.state.prevPage}
          nextPage={"/" + this.state.searchTerm + this.state.nextPage}
          setSearchTerm={this.setSearchTerm}
        />
        <CardList
          setNextPage={this.setNextPage}
          setPrevPage={this.setPrevPage}
          setCurrentPage={this.setCurrentPage}
          setLastPage={this.setLastPage}
          lastPage={this.lastPage}
        />
        <div id="bottomNavBar" />
      </React.Fragment>
    );
  };

  renderDetailsFragment = props => {
    return (
      <React.Fragment>
        <NavButton
          link={"/" + this.state.searchTerm + this.state.currPage}
          id="backButton"
          direction="left"
          classNameExtra="detailsBackButton"
        />
        <PkmnDetail />
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/pokemon/:id" render={this.renderDetailsFragment} />
          <Switch>
            <Route
              path="/search/:name/:page?"
              render={this.renderCardListFragment}
            />
            <Route path="/:page?" render={this.renderCardListFragment} />
          </Switch>
        </Switch>
      </div>
    );
  }
}

export default App;
