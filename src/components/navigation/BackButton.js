import React, { Component } from "react";

class BackButton extends Component {
  render() {
    return (
      <div className="navButton" id="backButton" onClick={this.props.onClick}>
        <div>
          <span className="fa fa-arrow-left" />
        </div>
      </div>
    );
  }
}

export default BackButton;
