import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducerFn(state, action) {
  if (action.type === "increase") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "decrease") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === "reset") {
    return {
      ...state,
      count: 0,
    };
  }
  //   switch (action.type) {
  //     case "increase":
  //       return {
  //         ...state,
  //         count: state.count + 1,
  //       };
  //     case "decrease":
  //       return {
  //         ...state,
  //         count: state.count - 1,
  //       };
  //     case "reset":
  //       return {
  //         ...state,
  //         count: 0,
  //       };
  //   }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div>
      count : {state.count}
      <div>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "increase" })}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "decrease" })}
        >
          -
        </button>
        <button
          className="btn btn-info"
          onClick={() => dispatch({ type: "reset" })}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default UseReducer;
