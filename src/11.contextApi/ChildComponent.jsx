import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleOnChlClick() {
    const { pData, cData } = this.props;
    const obj = {
      parentData: pData,
      childData: cData,
    };
    this.props.handleOnChildClick(obj);
  }
  render() {
    const { pData, cData } = this.props;
    return (
      <div>
        <div>parent Data: {pData}</div>
        <div>child Data: {cData}</div>
        <br />
        <br />
        <button onClick={() => this.handleOnChlClick()}>click in child</button>
      </div>
    );
  }
}
