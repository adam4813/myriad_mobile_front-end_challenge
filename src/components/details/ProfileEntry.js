import React, { Component } from "react";

class ProfileEntry extends Component {
  render() {
    let value = "";
    if (Array.isArray(this.props.val)) {
      for (let i = 0; i < this.props.val.length; i++) {
        value += this.props.val[i];
        if (i + 1 < this.props.val.length) {
          value += ",\r\n";
        }
      }
    } else {
      value = this.props.val;
    }

    return (
      <div className="profileEntry">
        <span className="entryName">{this.props.name}:</span>
        <div className="entryValueHolder">
          <span className="entryValue">{value}</span> {this.props.postfix}
        </div>
      </div>
    );
  }
}

export default ProfileEntry;
