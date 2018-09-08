import React, { Component } from "react";

class PkmnDetail extends Component {
  render() {
    return <h1>Detailed info for #{this.props.match.params.id}</h1>;
  }
}

export default PkmnDetail;
