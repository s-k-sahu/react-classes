import React, { Component } from "react";
import PropComp from "./PropComp";


class StateCC extends Component {
  constructor() {
    super();
    this.state = {
      name: "kanha sahu",
      age: 28,
    };
  }
  render() {
    return (
      <div>
        class component {this.state.name} {this.state.age}
      <PropComp propData={'ashok'}/>
      </div>
    );
  }
}

export default StateCC;
