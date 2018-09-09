import React, { Component } from "react";

import StatBar from "./StatBar";

class Statistics extends Component {
  render() {
    return (
      <div className="statsBox">
        <StatBar name="HP" val={this.props.stats.hp} />
        <StatBar name="Speed" val={this.props.stats.speed} />
        <StatBar name="Attack" val={this.props.stats.attack} />
        <StatBar name="Defense" val={this.props.stats.defense} />
        <StatBar name="Sp Atk" val={this.props.stats["special-attack"]} />
        <StatBar name="Sp Def" val={this.props.stats["special-defense"]} />
      </div>
    );
  }
}

export default Statistics;
