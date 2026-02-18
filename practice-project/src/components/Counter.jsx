import { useReducer } from "react";
const initialState = { counter: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "add": {
      return { ...state, counter: state.counter + action.payLoad };
    }
    case "sub": {
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - action.payLoad : 0,
      };
    }
    case "reset": {
      return { ...state, counter: 0 };
    }
  }
}

function Counter() {
  const [counter, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="flex flex-col gap-4 items-center ">
      <div className="flex flex-row gap-5">
        <button
          onClick={() => dispatch({ type: "add", payLoad: 1 })}
          className="py-2 px-4 bg-blue-200 cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="py-2 px-4 bg-red-200 cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "sub", payLoad: 1 })}
          className="py-2 px-4 bg-orange-200 cursor-pointer"
        >
          Decrement
        </button>
      </div>
      <p className="mt-5 text-2xl font-semibold">{counter.counter}</p>
    </div>
  );
}

export default Counter;
