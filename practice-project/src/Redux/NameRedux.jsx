import { useSelector, useDispatch } from "react-redux";
import {
  setError,
  setEmail,
  setPassword,
  submit,
  success,
} from "./features/nameSlice";

function NameRedux() {
  const email = useSelector((state) => state.name.email);
  const password = useSelector((state) => state.name.password);
  const loading = useSelector((state) => state.name.loading);
  const error = useSelector((state) => state.name.error);
  const hasSubmitted = useSelector((state) => state.name.hasSubmitted);

  const isDiabled = loading;
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(submit());
    if (email === "amir@hot.nl" && password === "amir") {
      setTimeout(() => {
        dispatch(success());
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(setError());
      }, 1000);
    }
  }
  return (
    <div>
      <form
        className="max-w-2xl bg-orange-200 py-2 px-6 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          Email :
          <input
            type="email"
            className="bg-white px-4 py-2 ml-4 "
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </label>
        <label htmlFor="">
          Password :
          <input
            type="password"
            className="bg-white px-4 py-2 ml-4 "
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </label>
        <button
          disabled={isDiabled}
          type="submit"
          className={`${isDiabled ? "bg-gray-200" : "bg-red-400 "} py-1 px-3 cursor-pointer rounded-md text-xl font-semibold `}
        >
          {loading ? "loading ..." : "  Submit"}
        </button>
      </form>
      <div className="text-2xl ">
        {loading && <p className="text-2xl "> Loading ....</p>}
        {loading === false && error === null && hasSubmitted && (
          <p className="text-2xl ">Login Successfully</p>
        )}
        {error !== null && <p className="text-2xl ">{error}</p>}
      </div>
    </div>
  );
}

export default NameRedux;
