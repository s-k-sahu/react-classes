import React, { Component } from "react";
import { ChildComponent } from ".";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentData: "ashok",
      childData: "sahu",
    };
    this.handleOnChildClick = this.handleOnChildClick.bind(this);
  }

  handleOnParentClick() {
    this.setState({
      ...this.state,
      childData: "kanha",
    });
  }

  handleOnChildClick(data) {
    this.setState({
      ...this.state,
      parentData: data.childData,
    });
  }

  render() {
    const { parentData, childData } = this.state;
    return (
      <div>
        parent Component
        <div>parent Data: {parentData}</div>
        <div>child Data: {childData}</div>
        <br />
        <br />
        <button onClick={() => this.handleOnParentClick()}>
          {" "}
          click in parent{" "}
        </button>
        <hr />
        child Component
        <ChildComponent
          handleOnChildClick={this.handleOnChildClick}
          pData={parentData}
          cData={childData}
        />
      </div>
    );
  }
}

export default ParentComponent;
