import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavButton extends Component {
  render() {
    return (
      <Link to={this.props.link} style={{ textDecoration: "none" }}>
        <div
          className={"navButton " + this.props.classNameExtra}
          id={this.props.id}
        >
          <div>
            <span className={"fa fa-arrow-" + this.props.direction} />
          </div>
        </div>
      </Link>
    );
  }
}

export default NavButton;
