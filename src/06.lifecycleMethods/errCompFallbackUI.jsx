import React, { Component } from "react";

class ErrorFallbackUI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, onClickReload } = this.props;
    return (
      <div className="error-page">
        <div className="oops">Oops!</div>
        <div className="message">{message}</div>
        <div>
          <button className="retry-button" onClick={() => onClickReload()}>
            🔄 Try Again!
          </button>
        </div>
      </div>
    );
  }
}
export default ErrorFallbackUI;
