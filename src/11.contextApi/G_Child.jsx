import React, { Component } from "react";
import GparentContext from "./pContext";

class Gchild extends Component {
  static contextType = GparentContext;
  constructor(props) {
    super(props);

    this.state = {
      grandChild: "grandchild data",
    };
  }

  render() {
    const { grandChild } = this.state;
    const { gpData, pData, cData } = this.props;
    return (
      <div>
        grandchildData : {grandChild}
        <br />
        grandparent data : {this.context}
      </div>
    );
  }
}
export default Gchild;
