import React, { Fragment } from "react";
import { ErrorBoundry, ErrorComponent } from "./06.lifecycleMethods";

function App() {
  return (
    <Fragment>
      <ErrorBoundry />
    </Fragment>
  );
}

export default App;
