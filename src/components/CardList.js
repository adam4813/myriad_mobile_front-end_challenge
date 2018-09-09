import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";

class CardList extends Component {
  state = { pkmnList: [], page: this.props.match.params.page ? this.props.match.params.page : 1 };

  getList = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon", { params: { page: this.state.page } })
      .then(response => {
        this.props.setPrevPage(this.state.page - 1 >= 1 ? this.state.page - 1 : 1);
        this.props.setNextPage(parseInt(this.state.page, 10) + 1 <= response.data.meta.last_page ? parseInt(this.state.page, 10) + 1 : response.data.meta.last_page);
        this.setState({
          pkmnList: response.data.data,
          nextPage: response.data.links.next,
          prevPage: response.data.links.prev
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    return (
      <div className="cardList">
        {this.state.pkmnList.map((pkmn, key) => {
          return <Card key={key} {...pkmn} />;
        })}
      </div>
    );
  }
}

export default CardList;
