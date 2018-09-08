import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link
          className="cardLink"
          to={"/pokemon/" + this.props.id}
          style={{ textDecoration: "none" }}
        >
          <header>{this.props.name}</header>
          <div className="imgHolder">
            <img src={this.props.image} alt={this.props.name + " image"} />
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
