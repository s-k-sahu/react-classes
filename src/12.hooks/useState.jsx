import { useState } from "react";

const UseState = () => {
  // const [count, setCount] = useState(0);
  // const [bool, setBool] = useState(false);
  // const [un, setUn] = useState(undefined);
  // const [nul, setNul] = useState(null);
  // const [str, setStr] = useState("");
  // const [arr, setArr] = useState([]);
  // const [obj, setObj] = useState({});

  const [state, setState] = useState({
    count: 0,
    bool: false,
    un: undefined,
    nul: null,
    str: "",
    arr: [],
    obj: {},
  });

  const onClick = () => {
    // setArr(['a','s','h','o','k'])
    // setBool(!bool)
    // setCount(count+1)
    // setNul('now null value is changed')
    // setStr('now str value is getting')
    // setUn('now undefined value is changed')
    // setObj({
    //   name:'gandu'
    // })

    // setState({
    //   ...state,
    //   count:state.count+1,
    //   arr:['a','s','h','o','k'],
    //   bool:!state.bool,
    //   un:'now undefined value is changed',
    //   nul:"now null value is changing",
    //   str:'now str value is getting',
    //   obj:{
    //     name:'ghusuri'
    //   }
    // })

    const newObj = {
      count: state.count + 1,
      arr: ["a", "s", "h", "o", "k"],
      bool: !state.bool,
      un: "now undefined value is changed",
      nul: "now null value is changing",
      str: "now str value is getting",
      obj: {
        name: "ghusuri",
      },
    }

    setState((prev) => ({
      ...prev,
      ...newObj
    }));
  };

  return (
    <div className="container">
      {/* <div>count state: {count}</div>
      <div>boolean state: {`${bool}`}</div>
      <div>undefined state: {un}</div>
      <div>null state: {nul}</div>
      <div>string state: {str}</div>
      <div>array state: {JSON.stringify(arr)}</div>
      <div>object state: {JSON.stringify(obj)}</div> */}

      <div>count state: {state.count}</div>
      <div>boolean state: {`${state.bool}`}</div>
      <div>undefined state: {state.un}</div>
      <div>null state: {state.nul}</div>
      <div>string state: {state.str}</div>
      <div>array state: {JSON.stringify(state.arr)}</div>
      <div>object state: {JSON.stringify(state.obj)}</div>

      <button className="btn btn-primary" onClick={() => onClick()}>
        click
      </button>
    </div>
  );
};

export default UseState;
