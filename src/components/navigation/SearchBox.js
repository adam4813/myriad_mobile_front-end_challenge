import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchBox extends Component {
  clearSearchRef = React.createRef();
  searchNameRef = React.createRef();

  state = {
    name: this.props.match.params.name ? this.props.match.params.name : ""
  };

  handleKeyUp = e => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        this.props.history.push("/search/" + e.target.value + "/");
        this.props.setSearchPage(e.target.value);
      } else {
        this.clearSearch();
      }
    }
  };

  clearSearch = () => {
    this.searchNameRef.current.value = "";
    this.props.setSearchPage("");
    this.props.history.push("/");
  };

  handleOnBlur = e => {
    if (e.target.value === "") {
      this.clearSearch();
    }
  };

  handleOnChange = e => {
    if (e.target.value !== "") {
      this.setClearSearch("inline-block");
    } else {
      this.setClearSearch("none");
    }
  };

  componentDidMount() {
    if (this.state.name !== "") {
      this.setClearSearch("inline-block");
    }
  }

  setClearSearch = state => {
    this.clearSearchRef.current.style.display = state;
  };

  render() {
    return (
      <div className="searchBar">
        <div className="searchBox">
          <span className="fa fa-search" />
          <input
            id="searchTerm"
            type="text"
            placeholder="Pokedex"
            onKeyUp={this.handleKeyUp}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            defaultValue={this.state.name}
            ref={this.searchNameRef}
          />
          <span
            className="fa fa-times-circle"
            id="clearSearch"
            style={{ display: "none" }}
            onClick={this.clearSearch}
            ref={this.clearSearchRef}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBox);
