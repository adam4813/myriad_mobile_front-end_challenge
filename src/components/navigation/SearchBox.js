import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchBox extends Component {
  handleKeyPress = e => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        this.props.history.push("/search/" + e.target.value + "/");
        this.props.setSearchPage(e.target.value);
      } else {
        this.props.setSearchPage("");
        this.props.history.push("/");
      }
    }
  };

  clearSearch = () => {
    document.getElementById("searchTerm").value = "";
    this.props.setSearchPage("");
    this.props.history.push("/");
  };

  handleOnBlur = e => {
    if (e.target.value === "") {
      this.props.setSearchPage("");
      this.props.history.push("/");
    }
  };

  handleOnChange = e => {
    if (e.target.value !== "") {
      document.getElementById("clearSearch").style.display = "inline-block";
    } else {
      document.getElementById("clearSearch").style.display = "none";
    }
  };

  componentDidMount() {
    if (this.props.match) {
      if (this.props.match.params.name !== "") {
        document.getElementById("clearSearch").style.display = "inline-block";
      }
    }
  }

  render() {
    return (
      <div className="searchBar">
        <div className="searchBox">
          <span className="fa fa-search" />
          <input
            id="searchTerm"
            type="text"
            placeholder="Pokedex"
            onKeyUp={this.handleKeyPress}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            defaultValue={this.props.match ? this.props.match.params.name : ""}
          />
          <span
            className="fa fa-times-circle"
            id="clearSearch"
            style={{ display: "none" }}
            onClick={this.clearSearch}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBox);
