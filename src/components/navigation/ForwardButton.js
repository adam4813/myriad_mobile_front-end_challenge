import React, { Component } from "react";

class ForwardButton extends Component {
  render() {
    return (
      <div
        className="navButton"
        id="forwardButton"
        onClick={this.props.onClick}
      >
        <div>
          <span className="fa fa-arrow-right" />
        </div>
      </div>
    );
  }
}

export default ForwardButton;
