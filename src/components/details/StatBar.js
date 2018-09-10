import React, { Component } from "react";

class StatBar extends Component {
  render() {
    return (
      <div className="statBarHolder">
        <span className="statName">{this.props.name}</span>
        <div className="statProgressBarHolder">
          <div
            className="statProgressBarValue"
            style={{
              width: this.props.val / 250 * 100 + "%",
              backgroundColor: "rgb(" + this.props.baseColor.toString() + ")"
            }}
          >
            <span>{this.props.val}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default StatBar;
