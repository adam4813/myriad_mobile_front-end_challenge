import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div className="searchBar">
        <div className="searchBox">
          <span className="fa fa-search" />
          <input type="text" placeholder="Pokedex" />
        </div>
      </div>
    );
  }
}

export default SearchBox;
