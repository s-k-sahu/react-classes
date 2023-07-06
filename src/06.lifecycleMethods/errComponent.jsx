import React, { Component } from "react";

class ErrComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      message: "",
    };
  }

  static getDerivedStateFromError(err) {
    if (err) {
      return { error: true, message: err.toString() };
    }
  }

  componentDidCatch(error, errorInfo) {
    this.logErrorToServices(error, errorInfo.componentStack);
  }

  logErrorToServices = console.log;

  render() {
    const { error, message } = this.state;
    if (error) {
      <div>{message}</div>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrComponent;
