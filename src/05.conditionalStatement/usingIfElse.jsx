import React, { Component } from "react";

class UsingIfElse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false,
      name: "ashok sahu",
    };
  }

  _onBtnClick() {
    this.setState({
        ...this.state,
        isValid:!this.state.isValid
    })
  }

  render() {
    const { isValid, name } = this.state;
    // if(isValid === true){
    //     return <div>{name}</div>
    // }else{
    //     return <div>kanha Sahu</div>
    // }
    return (
      <div>
        my name is , {name} , {`${isValid}`}
        <div>{isValid ? name : "kanha sahu"}</div>
        <button className="btn btn-primary" onClick={() => this._onBtnClick()}>
          toggle
        </button>
      </div>
    );
  }
}

export default UsingIfElse;

// if(condition<true|false>) == false{
//     commes
// }else if(condition){

// }
// else{

// }

// let values = condition ?  value : else part
