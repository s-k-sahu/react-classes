import React, { Fragment } from "react";
import Frgmt from "./04_utils/4.1fragment";
import Keys from "./04_utils/4.2.key";
import StateUpdate from "./02_state_n_props/StateUpdate";
import ProductPage from "./practices";
import { AddingSass, AddingStyledComponent } from "./03.addingStyle/advanced";

function App() {
  return (
    <React.Fragment>
      <AddingSass />
      <AddingStyledComponent />
      {/* <ProductPage/> */}
      {/* <Frgmt/> */}
      {/* <Keys/> */}
      {/* <StateUpdate/> */}
    </React.Fragment>
  );
}

export default App;
