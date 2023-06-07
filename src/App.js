import {
  ModuleDefault,
  ModuleNamed,
  ClassComponent,
  FunctionalComponent,
} from "./01_components";

import { StateinClassComp } from "./02_state_n_props";

// import {ModuleDefault,NamedModule} from './01_components'

function App() {
  return (
    <div>
      {/* <ModuleDefault />
      <ModuleNamed />
      <FunctionalComponent />
      <ClassComponent /> */}
      <StateinClassComp />
    </div>
  );
}

export default App;
