import React, { Component } from "react";
import ErrorFallbackUI from "./errCompFallbackUI";
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      message: null,
    };
    this.onClickRefresh = this.onClickRefresh.bind(this);
  }

  static getDerivedStateFromError(error) {
    let errorMesssage = undefined;
    if (error instanceof Error) {
      errorMesssage = `${error.message}`;
    }
    return { error: true, message: errorMesssage };
  }

  componentDidCatch(error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }

  onClickRefresh() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  render() {
    const { error, message } = this.state;
    if (error) {
      return (
        <ErrorFallbackUI
          message={message}
          onClickReload={this.onClickRefresh}
        />
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundry;
