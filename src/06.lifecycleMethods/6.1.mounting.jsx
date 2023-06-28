import React, { Component } from "react";

class Mounting extends Component {
  // * first time it will call and store the data in a location
  constructor(props) {
    console.log("constructor method is calling");
    super(props);
    this.state = {
      name: "ghusuri sabat",
      count: 0,
    };
  }

  // * second time it will call and change state instant before render
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method calling...");
    console.log(state, props);
    return {
      name: "p.mankada patro",
    };
  }

  componentDidMount() {
    console.log("componentDidMount method is calling...");
  }

  _handleClick() {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  }

  // * it will final and render the jsx into the DOM(index.html)
  render() {
    console.log("render method is calling...");
    const { name, count } = this.state;
    return (
      <div>
        <span>Mounting {name}</span>
        <div>
          <div className="text-danger"> count : {count}</div>
          <button
            className="btn btn-success"
            onClick={() => this._handleClick()}
          >
            click to update
          </button>
        </div>
      </div>
    );
  }
}

export default Mounting;
