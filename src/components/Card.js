import React, { Component } from "react";

class Card extends Component {
  render() {
    return <h1>Card {this.props.match.params.id}</h1>;
  }
}

export default Card;
