import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavButton extends Component {
  render() {
    return (
      <Link
        className={
          "navButton" + (this.props.classNameExtra
            ? (" " + this.props.classNameExtra)
            : "")
        }
        id={this.props.id}
        to={this.props.link}
        style={{ textDecoration: "none" }}
      >
          <span className={"fa fa-arrow-" + this.props.direction} />
      </Link>
    );
  }
}

export default NavButton;
