import React, { Component } from "react";

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
      </div>
    );
  }
}

export default StateCC;
