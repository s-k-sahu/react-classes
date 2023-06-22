import React from "react";

class StateUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  _handleBtnClick(e) {
    const { textContent } = e.currentTarget;
    let count = this.state.count;
    if (textContent === "+") {
      count += 1;
    }
    if (textContent === "-") {
      count -= 1;
    }
    if (textContent === "reset") {
      count = 0;
    }
    this.setState({
      ...this.state,
      count,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <div>
          <button
            className="btn btn-outline-success"
            onClick={(e) => this._handleBtnClick(e)}
          >
            +
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={(e) => this._handleBtnClick(e)}
          >
            -
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={(e) => this._handleBtnClick(e)}
          >
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default StateUpdate;
