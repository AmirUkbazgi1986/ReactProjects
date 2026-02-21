import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice";
function CounterRedux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold ">Count: {count}</h1>
      <div className="flex flex-row gap-3">
        <button
          className="py-2 px-6 bg-gray-200 cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="py-2 px-6 bg-gray-200 cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CounterRedux;
