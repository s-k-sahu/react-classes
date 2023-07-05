import React, { Component } from "react";
import { Parent } from ".";
import { GparentContextProvider } from "./pContext";

class Gparent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      g_parentdata: "grand parent data",
    };
  }

  render() {
    const { g_parentdata } = this.state;
    return (
      <GparentContextProvider value={g_parentdata}>
        grand parent : {g_parentdata}
        <hr />
        <Parent gData={g_parentdata} />
      </GparentContextProvider>
    );
  }
}
export default Gparent;
