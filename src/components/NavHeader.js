import React, { Component } from "react";

import SearchBox from "./navigation/SearchBox";
import NavButton from "./navigation/NavButton";

class NavHeader extends Component {
  render() {
    return (
      <header className="navHeader">
        {this.props.prevPage && (
          <NavButton
            link={this.props.prevPage}
            id="backButton"
            direction="left"
          />
        )}
        <SearchBox setSearchTerm={this.props.setSearchTerm} />
        {this.props.nextPage && (
          <NavButton
            link={this.props.nextPage}
            id="forwardButton"
            direction="right"
          />
        )}
      </header>
    );
  }
}

export default NavHeader;
