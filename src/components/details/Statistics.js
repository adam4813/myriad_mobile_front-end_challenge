import React, { Component } from "react";

import StatBar from "./StatBar";

class Statistics extends Component {
  render() {
    return (
      <section className="statsBox">
        <StatBar
          baseColor={this.props.baseColor}
          name="HP"
          val={this.props.stats.hp}
        />
        <StatBar
          baseColor={this.props.baseColor}
          name="Speed"
          val={this.props.stats.speed}
        />
        <StatBar
          baseColor={this.props.baseColor}
          name="Attack"
          val={this.props.stats.attack}
        />
        <StatBar
          baseColor={this.props.baseColor}
          name="Defense"
          val={this.props.stats.defense}
        />
        <StatBar
          baseColor={this.props.baseColor}
          name="Sp Atk"
          val={this.props.stats["special-attack"]}
        />
        <StatBar
          baseColor={this.props.baseColor}
          name="Sp Def"
          val={this.props.stats["special-defense"]}
        />
      </section>
    );
  }
}

export default Statistics;
