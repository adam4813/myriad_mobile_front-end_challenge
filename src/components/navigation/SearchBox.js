import React, { Component } from "react";

class SearchBox extends Component {
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.onStartSearch(e.target.value);
    }
  };
  render() {
    return (
      <div className="searchBar">
        <div className="searchBox">
          <span className="fa fa-search" />
          <input
            type="text"
            placeholder="Pokedex"
            onKeyPress={this.handleKeyPress}
            defaultValue={
              this.props.match ? this.props.match.params.name : ""
            }
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;
