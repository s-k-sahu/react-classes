import React, { Component } from "react";
import { ErrComp1 } from ".";
import ErrorBoundry from "./errComponent";
class ErComp extends Component {
  render() {
    return (
      <div className="container">
        <ErrorBoundry>
          <ErrComp1 title="first" />
        </ErrorBoundry>
        <ErrorBoundry>
          <ErrComp1 title="second" />
        </ErrorBoundry>
      </div>
    );
  }
}

export default ErComp;
