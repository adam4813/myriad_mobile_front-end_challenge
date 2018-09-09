import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";

class CardList extends Component {
  state = {
    pkmnList: [],
    page: this.props.match.params.page ? this.props.match.params.page : 1,
    searchTerm: this.props.match.params.name
  };

  getList = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon", {
        params: { page: this.state.page }
      })
      .then(response => {
        let currPage = parseInt(this.state.page, 10);
        if (currPage > response.data.meta.last_page) {
          currPage = response.data.meta.last_page;
        }
        this.props.setCurrentPage(currPage);
        this.props.setPrevPage(
          currPage - 1 >= 1 ? currPage - 1 : 1
        );
        this.props.setNextPage(
          currPage + 1 <= response.data.meta.last_page
            ? currPage + 1
            : response.data.meta.last_page
        );
        this.setState({
          pkmnList: response.data.data,
          page: currPage
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getSearch = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon", {
        params: { name: this.state.searchTerm, page: this.state.page }
      })
      .then(response => {
        console.log(response.data);
        this.props.setSearchPage(this.state.searchTerm);
        let currPage = parseInt(this.state.page, 10);
        if (currPage > response.data.meta.last_page) {
          currPage = response.data.meta.last_page;
        }
        this.props.setCurrentPage(currPage);
        this.props.setPrevPage(
          currPage - 1 >= 1 ? currPage - 1 : 1
        );
        this.props.setNextPage(
          currPage + 1 <= response.data.meta.last_page
            ? currPage + 1
            : response.data.meta.last_page
        );
        this.setState({
          pkmnList: response.data.data,
          page: currPage
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (this.props.search) {
      this.getSearch();
    }
    else {
      this.getList();
    }
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
