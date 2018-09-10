import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackButton extends Component {
  render() {
    let className = "navButton";
    className += this.props.detailsPage ? " detailsBackButton" : "";
    return (
      <Link to={this.props.prevPage} style={{ textDecoration: "none" }}>
        <div className={className} id="backButton">
          <div>
            <span className="fa fa-arrow-left" />
          </div>
        </div>
      </Link>
    );
  }
}

export default BackButton;
