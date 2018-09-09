import React, { Component } from "react";
import axios from "axios";

import PkmnType from "./PkmnType";
import Statistics from "./details/Statistics";

class PkmnDetail extends Component {
  state = {
    id: this.props.match.params.id ? this.props.match.params.id : 1,
    loading: true
  };

  getDetails = () => {
    axios
      .get(
        "https://intern-pokedex.myriadapps.com/api/v1/pokemon/" + this.state.id
      )
      .then(response => {
        this.setState({
          ...response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getDetails();
  }

  render() {
    if (this.state.loading) {
      return null;
    } else {
      return (
        <div className="details">
          <header>
            <div className="detailsHeader">
              <span className="nameDetail">{this.state.name}</span>
              <span className="idDetail">#{this.state.id}</span>
            </div>
            <div className="pkmnTypesHolder">
              <PkmnType type={this.state.types[1]} />
              <PkmnType type={this.state.types[0]} />
            </div>
          </header>
          <div>
            <img
              className="detailsImg"
              src={this.state.image}
              alt={this.state.name + " image"}
            />
            <Statistics stats={this.state.stats} />
          </div>
        </div>
      );
    }
  }
}

export default PkmnDetail;
