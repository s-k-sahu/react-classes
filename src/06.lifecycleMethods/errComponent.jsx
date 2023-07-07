import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      message: null,
    };
  }

  static getDerivedStateFromError(err) {
    err["shouldIgnore"] = true;
    return { error: err };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      message: errorInfo,
    });
  }

  render() {
    const { error, message } = this.state;
    if (message) {
      <>
        <div>{error}</div>
        {message.componentStack}
      </>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundry;
