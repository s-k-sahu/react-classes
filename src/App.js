import React from "react";
import { Comp } from "./PropComp";
import InlineCss from "./03.addingStyle/3.1.inline";
import ExternalCss from "./03.addingStyle/3.2.external";
// import './03.addingStyle/style.css'
import styles from './03.addingStyle/style.module.css'
import CssInJs from "./03.addingStyle/3.4.cssInjs";


function App() {
  return (
    <div>
      <ExternalCss/>
      <InlineCss />
      <CssInJs/>
    </div>
    // <Comp name='ashok' age='28'>
    //   <div>asholk</div>
    // </Comp>
  );
}

export default App;
