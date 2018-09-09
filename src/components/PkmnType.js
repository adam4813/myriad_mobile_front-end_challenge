import React, { Component } from "react";

class PkmnType extends Component {
  types = {
    normal: {
      name: "NORMAL",
      color: "#A8A878"
    },
    fire: {
      name: "FIRE",
      color: "#F08030"
    },
    water: {
      name: "WATER",
      color: "#6890F0"
    },
    grass: {
      name: "GRASS",
      color: "#78C850"
    },
    electric: {
      name: "ELECTRIC",
      color: "#F8D030"
    },
    ice: {
      name: "ICE",
      color: "#98D8D8"
    },
    ground: {
      name: "GROUND",
      color: "#E0C068"
    },
    flying: {
      name: "FLYING",
      color: "#A890F0"
    },
    poison: {
      name: "POISON",
      color: "#A040A0"
    },
    fighting: {
      name: "FIGHTING",
      color: "#C03028"
    },
    psychic: {
      name: "PSYCHIIC",
      color: "#F85888"
    },
    dark: {
      name: "DARK",
      color: "#705848"
    },
    rock: {
      name: "ROCK",
      color: "#B8A038"
    },
    bug: {
      name: "BUG",
      color: "#A8B820"
    },
    ghost: {
      name: "GHOST",
      color: "#705898"
    },
    steel: {
      name: "STEEL",
      color: "#B8B8D0"
    },
    dragon: {
      name: "DRAGON",
      color: "#7038F8"
    },
    fairy: {
      name: "FAIRY",
      color: "#FFDEF5"
    },
    error: {
      name: "ERROR",
      color: "#FFC0CB"
    }
  };

  render() {
    if (!this.props.type) {
      return null;
    }
    let typeMeta;
    if (this.types.hasOwnProperty(this.props.type)) {
      typeMeta = this.types[this.props.type];
    } else {
      typeMeta = this.types.error;
    }
    return (
      <span
        className="pkmnType"
        style={{
          borderColor: typeMeta.color,
          backgroundColor: typeMeta.color + "11",
          color: typeMeta.color
        }}
      >
        {typeMeta.name}
      </span>
    );
  }
}

export default PkmnType;
