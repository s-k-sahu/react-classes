import React, { Component } from "react";
import { ErrComp1, ErrComp2, ErrComp3, ErrorComponent } from ".";
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ErrorComponent>
          <ErrComp1 />
        </ErrorComponent>
        <br />
        <ErrorComponent>
          <ErrComp2 />
        </ErrorComponent>
        <br />
        <ErrorComponent>
          <ErrComp3 />
        </ErrorComponent>
      </div>
    );
  }
}

export default ErrorBoundry;
