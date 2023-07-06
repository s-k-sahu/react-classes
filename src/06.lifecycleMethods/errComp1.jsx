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
      ...this.state,
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    if(count === 5 ){
        throw new Error('error in err component 1')
    }
    return (
      <div>
        error in component 1, count : {count}
        <br />
        <button onClick={() => this.handleClick()}>click</button>
      </div>
    );
  }
}
export default ErrComp1;
