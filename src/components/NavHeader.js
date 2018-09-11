import React, { Component } from "react";

import SearchBox from "./navigation/SearchBox";
import ForwardButton from "./navigation/ForwardButton";
import BackButton from "./navigation/BackButton";

class NavHeader extends Component {
  render() {
    return (
      <header>
        {this.props.prevPage && <BackButton prevPage={this.props.prevPage} />}
        {this.props.searchBox && (
          <SearchBox setSearchPage={this.props.setSearchPage} />
        )}
        {this.props.nextPage && (
          <ForwardButton nextPage={this.props.nextPage} />
        )}
      </header>
    );
  }
}

export default NavHeader;
