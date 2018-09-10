import React, { Component } from "react";
import { Link } from "react-router-dom";

class ForwardButton extends Component {
  render() {
    return (
      <Link to={this.props.nextPage} style={{ textDecoration: "none" }}>
        <div
          className="navButton"
          id="forwardButton"
        >
          <div>
            <span className="fa fa-arrow-right" />
          </div>
        </div>
      </Link>
    );
  }
}

export default ForwardButton;
