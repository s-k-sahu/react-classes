import React, { Component } from "react";

class ChildComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, name } = this.props;
    return (
      <div>
        child component <br />
        {name}
        {children}
      </div>
    );
  }
}

export default ChildComp;
