import React, { Component } from "react";
import { Heading1, Heading2 } from "./styles/main";

export default class AddingStyledComponent extends Component {
  render() {
    
    return (
      <div>
        <h1> using styled components </h1>
        <Heading1 >
          i am a component where styled-component styling is added!{" "}
        </Heading1>
        <Heading2>i am a component where sass styling is added! </Heading2>
        <hr />
      </div>
    );
  }
}
