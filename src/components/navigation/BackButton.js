import React, { Component } from "react";

class BackButton extends Component {
  render() {
    let className = "navButton";
    className += this.props.detailsPage ? " detailsBackButton" : "";
    return (
      <div className={className} id="backButton" onClick={this.props.onClick}>
        <div>
          <span className="fa fa-arrow-left" />
        </div>
      </div>
    );
  }
}

export default BackButton;
