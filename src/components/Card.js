import React, { Component } from "react";
import { Link } from "react-router-dom";

import PkmnType from "./PkmnType";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link
          to={"/pokemon/" + this.props.id}
          style={{ textDecoration: "none" }}
        >
          <header className="cardHeader">{this.props.name}</header>
          <div className="imgHolder">
            <img src={this.props.image} alt={this.props.name + " image"} />
          </div>
          <div className="pkmnTypesHolder">
            <PkmnType type={this.props.types[1]} />
            <PkmnType type={this.props.types[0]} />
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
