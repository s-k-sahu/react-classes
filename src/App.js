import React,{Fragment} from 'react'
import Frgmt from './04_utils/4.1fragment'
import Keys from './04_utils/4.2.key'
import StateUpdate from './02_state_n_props/StateUpdate'
import ProductPage from './practices'

function App() {
  return (
    <React.Fragment>
      <ProductPage/>
      {/* <Frgmt/> */}
      {/* <Keys/> */}
      {/* <StateUpdate/> */}
    </React.Fragment>
  )
}

export default App