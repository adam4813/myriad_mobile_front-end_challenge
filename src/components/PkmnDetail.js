import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import PkmnType from "./PkmnType";
import Statistics from "./details/Statistics";
import ProfileEntry from "./details/ProfileEntry";

class PkmnDetail extends Component {
  state = {
    id: this.props.match.params.id ? this.props.match.params.id : 1,
    loading: true,
    baseColor: [85, 166, 156]
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
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "rgb(" + this.state.baseColor.toString() + ")";
      return (
        <section className="details">
          <span className="detailsNameJumbo">{this.state.name}</span>
          <header>
            <div className="detailsName">
              <span className="nameDetail">{this.state.name}</span>
              <span className="idDetail">#{this.state.id}</span>
            </div>
            <div className="pkmnTypesHolder">
              <PkmnType type={this.state.types[1]} />
              <PkmnType type={this.state.types[0]} />
            </div>
          </header>
          <section className="detailsContainer">
            <section>
              <img
                id={this.state.name + "imageID"}
                className="detailsImg"
                src={this.state.image}
                alt={this.state.name + " image"}
              />
              <Statistics
                baseColor={this.state.baseColor}
                stats={this.state.stats}
              />
            </section>
            <section className="detailsBio">
              <div className="detailsGenus">{this.state.genus}</div>
              <div className="detailsDescription">{this.state.description}</div>
            </section>
            <section id="profile" className="detailsSection">
              <header
                className="detailsSectionHeader"
                style={{
                  backgroundColor:
                    "rgb(" + this.state.baseColor.toString() + ")"
                }}
              >
                <span>Profile</span>
              </header>
              <ProfileEntry name="Height" val={this.state.height} postfix="m" />
              <ProfileEntry
                name="Weight"
                val={this.state.weight}
                postfix="kg"
              />
              <ProfileEntry name="Catch Rate" val="0%" />
              <ProfileEntry name="Gender Ratio" val="M-50% F-50%" />
              <ProfileEntry name="Egg Groups" val={this.state["egg_groups"]} />
              <ProfileEntry name="Hatch Steps" val="5100" />
              <ProfileEntry name="Abilities" val={this.state.abilities} />
              <ProfileEntry name="EVs" val="2" postfix="HP" />
            </section>
            <section id="whenAttacked" className="detailsSection">
              <header
                className="detailsSectionHeader"
                style={{
                  backgroundColor:
                    "rgb(" + this.state.baseColor.toString() + ")"
                }}
              >
                <span>Damage When Attacked</span>
              </header>
            </section>
          </section>
        </section>
      );
    }
  }
}

export default withRouter(PkmnDetail);
