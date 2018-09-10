import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Card from "./Card";

class CardList extends Component {
  state = {
    pkmnList: [],
    page: this.props.match.params.page ? this.props.match.params.page : 1,
    searchTerm: this.props.match.params.name
  };

  pageRangeClamp(page, last) {
    if (page > last) {
      return last;
    } else if (page < 1) {
      return 1;
    }
    return page;
  }

  updateState(page, response) {
    this.props.setCurrentPage(page);
    this.props.setPrevPage(page - 1 >= 1 ? page - 1 : 1);
    this.props.setNextPage(
      page + 1 <= response.data.meta.last_page
        ? page + 1
        : response.data.meta.last_page
    );
    this.props.setLastPage(response.data.meta.last_page);
    this.setState({
      pkmnList: response.data.data,
      page: page
    });
  }

  getList = page => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon", {
        params: { page: page }
      })
      .then(response => {
        let validPage = this.pageRangeClamp(page, response.data.meta.last_page);
        if (validPage !== page) {
          this.getList(validPage);
          return;
        }
        this.updateState(validPage, response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getSearch = (page, term) => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon", {
        params: { name: term, page: page }
      })
      .then(response => {
        let validPage = this.pageRangeClamp(page, response.data.meta.last_page);
        if (validPage !== page) {
          this.getSearch(validPage);
          return;
        }
        this.props.setSearchPage(term);
        this.updateState(validPage, response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    let page = parseInt(this.state.page, 10);
    if (this.props.search) {
      this.getSearch(page, this.state.searchTerm);
    } else {
      this.getList(page);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.page !== prevProps.match.params.page ||
      this.props.match.params.name !== prevProps.match.params.name
    ) {
      let page = parseInt(this.props.match.params.page, 10);
      let lastPage = this.props.getLastPage();
      if (page > lastPage) {
        page = lastPage;
      } else if (page < 1) {
        page = 1;
      }
      if (this.props.match.params.name !== prevProps.match.params.name) {
        page = 1;
      }
      if (this.props.search) {
        this.getSearch(page, this.props.match.params.name);
      } else {
        this.getList(page);
      }
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

export default withRouter(CardList);
