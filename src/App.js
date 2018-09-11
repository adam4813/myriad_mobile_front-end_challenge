import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PkmnDetail from "./components/PkmnDetail";
import CardList from "./components/CardList";

import NavHeader from "./components/NavHeader";

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

  getLastPage = () => {
    return this.state.lastPage;
  };

  setSearchPage = searchTerm => {
    if (searchTerm !== null) {
      this.setState({ searchTerm: "search/" + searchTerm + "/" });
    }
    if (searchTerm === "") {
      this.setState({ searchTerm: "" });
    }
  };

  renderMainRouteWithPath(path, search) {
    return (
      <Route path={path}>
        <div>
          <NavHeader
            prevPage={"/" + this.state.searchTerm + this.state.prevPage}
            nextPage={"/" + this.state.searchTerm + this.state.nextPage}
            setSearchPage={this.setSearchPage}
            searchBox={true}
          />
          <CardList
            setNextPage={this.setNextPage}
            setPrevPage={this.setPrevPage}
            setCurrentPage={this.setCurrentPage}
            setLastPage={this.setLastPage}
            getLastPage={this.getLastPage}
            setSearchPage={this.setSearchPage}
            search={search}
          />
          <div id="bottomNavBar" />
        </div>
      </Route>
    );
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/pokemon/:id">
            <div>
              <NavHeader
                prevPage={"/" + this.state.searchTerm + this.state.currPage}
                searchBox={false}
              />
              <Route component={PkmnDetail} />
            </div>
          </Route>
          {this.renderMainRouteWithPath("/search/:name/:page?", true)}
          {this.renderMainRouteWithPath("/:page?", false)}
        </Switch>
      </div>
    );
  }
}

export default App;
