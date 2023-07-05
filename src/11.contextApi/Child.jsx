import React, { Component } from "react";
import { GrandChild } from ".";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childData: "child data",
    };
  }

  render() {
    const { childData } = this.state;
    const { pData, gpData } = this.props;
    return (
      <div>
        child : {childData}
        <br />
        parentData : {pData}
        <br />
        grandparentData : {gpData}
        <hr />
        <GrandChild cData={childData} pData={pData} gpData={gpData} />
      </div>
    );
  }
}

export default Child;
