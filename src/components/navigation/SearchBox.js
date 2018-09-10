import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchBox extends Component {
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.history.push("/search/" + e.target.value + "/");
      this.props.setSearchPage(e.target.value);
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

export default withRouter(SearchBox);
