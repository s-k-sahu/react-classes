import React, { Component } from "react";
class Updating extends Component {
  constructor(props) {
    console.log("constructor method is calling...");
    super(props);
    this.state = {
      name: "bilei",
      count: 0,
    };
  }

  //* lifecycle methods for mounting phase
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    console.log("getDerivedStateFromProps method is calling...");
    return {};
  }

  componentDidMount() {
    console.log("component did mount method is calling...");
  }

  //* lifecycle methods for updating phase
  componentDidUpdate() {
    this.state.name = "ghusuri";
    console.log("componentDidUpdate method is called...");
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate method is calling...");
    return null
  }

  _onBtnClick(e) {
    const { innerText } = e.currentTarget;
    let value = this.state.count;
    switch (innerText) {
      case "add":
        value += 1;
        break;
      case "substract":
        value -= 1;
        break;
      case "reset":
        value = 0;
        break;

      default:
        break;
    }
    this.setState({
      ...this.state,
      count: value,
    });
  }

  render() {
    console.log("render method is calling...");
    const { name, count } = this.state;
    return (
      <div>
        updating name {name}
        <div>
          count : <span className="text-danger">{count}</span>
        </div>
        <button
          className="btn btn-success"
          onClick={(e) => this._onBtnClick(e)}
          children="add"
        />
        <button
          className="btn btn-danger"
          onClick={(e) => this._onBtnClick(e)}
          children="substract"
        />
        <button
          className="btn btn-warning"
          onClick={(e) => this._onBtnClick(e)}
          children="reset"
        />
      </div>
    );
  }
}

export default Updating;
