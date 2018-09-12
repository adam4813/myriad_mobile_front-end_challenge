import React, { Component } from "react";

import SearchBox from "./navigation/SearchBox";
import NavButton from "./navigation/NavButton";

class NavHeader extends Component {
  render() {
    return (
      <header>
        {this.props.prevPage && (
          <NavButton
            link={this.props.prevPage}
            id="backButton"
            direction="left"
            classNameExtra={this.props.classNameExtra}
          />
        )}
        {this.props.searchBox && (
          <SearchBox setSearchPage={this.props.setSearchPage} />
        )}
        {this.props.nextPage && (
          <NavButton
            link={this.props.nextPage}
            id="forwardButton"
            direction="right"
            classNameExtra={this.props.classNameExtra}
          />
        )}
      </header>
    );
  }
}

export default NavHeader;
