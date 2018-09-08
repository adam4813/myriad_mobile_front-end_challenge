import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardList extends Component {
  render() {
    return (
      <div>
        <h1>Card List</h1>
        <Link to="/pokemon/1">Bulbasaur</Link>
      </div>
    );
  }
}

export default CardList;
