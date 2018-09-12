import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Card from "./Card";

class CardList extends Component {
  state = {
    pkmnList: [],
    page: this.props.match.params.page ? this.props.match.params.page : 1,
    name: this.props.match.params.name ? this.props.match.params.name : ""
  };

  pageRangeClamp(page, last) {
    if (page > last) {
      return last;
    } else if (page < 1) {
      return 1;
    }
    return page;
  }

  getList = (page, name) => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon", {
        params: { name: name, page: page }
      })
      .then(response => {
        let p = this.pageRangeClamp(page, response.data.meta.last_page);
        if (p !== page) {
          this.getList(p);
          return;
        }
        this.props.setCurrentPage(p);
        this.props.setPrevPage(p - 1 >= 1 ? p - 1 : 1);
        this.props.setNextPage(
          p + 1 <= response.data.meta.last_page
            ? p + 1
            : response.data.meta.last_page
        );
        this.props.setLastPage(response.data.meta.last_page);
        this.setState({
          pkmnList: response.data.data,
          page: p,
          name: name
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getList(this.state.page, this.state.name);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.page !== prevProps.match.params.page ||
      this.props.match.params.name !== prevProps.match.params.name
    ) {
      let page = 1;
      if (this.props.match.params.name === prevProps.match.params.name) {
        page = parseInt(this.props.match.params.page, 10);
        page = this.pageRangeClamp(page, this.props.lastPage);
      }
      if (
        prevState.name === this.state.name ||
        prevState.page !== this.state.page
      ) {
        this.getList(page, this.props.match.params.name);
      }
    }
  }

  render() {
    return (
      <section className="cardList">
        {this.state.pkmnList.map((pkmn, key) => {
          return <Card key={key} {...pkmn} />;
        })}
      </section>
    );
  }
}

export default withRouter(CardList);
