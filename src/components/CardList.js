import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";

class CardList extends Component {
  state = { pkmnList: [] };

  getList = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon")
      .then(response => {
        this.setState({ pkmnList: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    return (
      <div className="cardList">
        {this.state.pkmnList.map(pkmn => {
          return <Card {...pkmn} />;
        })}
      </div>
    );
  }
}

export default CardList;
