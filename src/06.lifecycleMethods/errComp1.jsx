import React, { Component } from "react";

class ErrComp1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    if(count > 5 ){
        throw new Error('error happened in count component ')
    }
    return (
      <div>
        <h1> count : {this.props.title} - <span className="text-danger">{count}</span></h1>
        <br />
        <button onClick={() => this.handleClick()} className="btn btn-success">click</button>
      </div>
    );
  }
}
export default ErrComp1;
