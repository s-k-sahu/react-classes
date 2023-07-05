import React, { Component } from "react";
import { Child } from ".";
class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentData: "parent data",
    };
  }

  render() {
    const { parentData } = this.state;
    const { gData } = this.props;
    return (
      <div>
        parent : {parentData}
        <br />
        grandParentData : {gData}
        <hr />
        <Child pData={parentData} gpData={gData} />
      </div>
    );
  }
}
export default Parent;
