import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

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

  setSearchtPage = searchTerm => {
    if (searchTerm !== null) {
      this.setState({ searchTerm: "search/" + searchTerm + "/" });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  renderMainRouteWithPath(path, search) {
    return (
      <Route path={path}>
        <div>
          <BackButton
            prevPage={"/" + this.state.searchTerm + this.state.prevPage}
          />
          <ForwardButton
            nextPage={"/" + this.state.searchTerm + this.state.nextPage}
          />
          <SearchBox setSearchPage={this.setSearchtPage} />
          <CardList
            setNextPage={this.setNextPage}
            setPrevPage={this.setPrevPage}
            setCurrentPage={this.setCurrentPage}
            setLastPage={this.setLastPage}
            getLastPage={this.getLastPage}
            setSearchPage={this.setSearchtPage}
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
              <BackButton
                prevPage={"/" + this.state.searchTerm + this.state.currPage}
                detailsPage={true}
              />
              <Route component={PkmnDetail} xyz={"abc"} />
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
