import { useReducer } from "react";

const initialState = {
  email: "",
  password: "",

  loading: false,
  error: null,
  isSubmitting: false,
};

function emailReducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL": {
      return { ...state, email: action.payload };
    }

    case "SET_PASSWORD": {
      return { ...state, password: action.payload };
    }

    case "SUBMIT": {
      return {
        ...state,
        loading: true,
        error: null,
        hasSubmitted: true,
      };
    }

    case "SUCCESS": {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case "ERROR": {
      return {
        ...state,
        loading: false,
        error: "inValid email or password",
      };
    }
    default:
      throw new Error("somthing went wrong!");
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(emailReducer, initialState);

  const isDisabled = state.loading;
  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "SUBMIT",
    });

    if (state.email === "admin@test.com" && state.password === "admin1986") {
      setTimeout(() => {
        dispatch({ type: "SUCCESS" });
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch({ type: "ERROR" });
      }, 1000);
    }
  }

  console.log(state);
  return (
    <div>
      <form
        className="max-w-2xl bg-gray-200 py-2 px-6 flex flex-col gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label>
          Email:
          <input
            type="email"
            className="bg-white px-4 py-2 ml-4 "
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            className="bg-white px-4 py-2 ml-4 "
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          />
        </label>
        <button
          disabled={isDisabled}
          type="submit"
          className="py-1 px-3 bg-red-300 cursor-pointer rounded-md text-xl font-semibold"
        >
          {isDisabled ? "loading ..." : " Submit"}
        </button>
      </form>
      <div className="text-2xl ">
        {state.loading && <p className="text-2xl "> Loading ....</p>}
        {state.loading === false &&
          state.error === null &&
          state.hasSubmitted && <p className="text-2xl ">Login Successfully</p>}
        {state.error !== null && <p className="text-2xl ">{state.error}</p>}
      </div>
    </div>
  );
}

export default CounterReducer;
