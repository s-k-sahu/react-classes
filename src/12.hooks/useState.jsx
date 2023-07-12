import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [strval, setStrVal] = useState("ashok");
  const [bool, setBool] = useState(false);
  const [nullVal, setNullVal] = useState(null);
  const [undefinedVal, setUndefinedVal] = useState(undefined);
  const [arrVal, setArrVal] = useState(["a", 1, []]);
  const [objVal,setObjVal] = useState({
    name:'xyz',
    arr:[],
    num:1,
    bool:false,
    un:undefined,
    nul:null
  })

  function updateCount() {
    // setCount(count - 1);
    setCount((prev) => prev + 1);
    setStrVal("kanha");
    // setStrVal((prev)=>'kanha')
    // setBool(true)
    // setBool(!bool)
    // setBool((prev) => !prev);
    // setNullVal('mankidi')
    // setUndefinedVal('kankidi')
    // setNullVal((x) => x + "mankidi");
    // setUndefinedVal((y) => y + "kankidi");
  }
  //   const updateCount = ()=> {
  //     // setCount(count - 1);
  //     setCount((prev) => prev + 1);
  //   }

  //   const updateCount = function() {
  //     // setCount(count - 1);
  //     setCount((prev) => prev + 1);
  //   }
  return (
    <div>
      UseState count : {count}
      <br />
      name : {strval}
      <br />
      boolean : {`${bool}`}
      <br />
      null : {nullVal}
      <br />
      undefined : {undefinedVal}
      <br />
      arrVal : {JSON.stringify(arrVal)}
      <br />
      objVal : {JSON.stringify(objVal)}
      <div>
        <button className="btn btn-primary" onClick={() => updateCount()}>
          click
        </button>
      </div>
    </div>
  );
}

export default UseState;


