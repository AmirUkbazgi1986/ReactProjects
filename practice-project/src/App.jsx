// import { Provider } from "react-redux";
// import { store } from "./MultiSliceRedux/store";
// import Shop from "./MultiSliceRedux/features/ui/Shop";

import Weather from "./WeatherApp/Weather";

function App() {
  return (
    <div className="flex flex-col justify-center items-center  bg-green-200 w-screen min-h-screen">
      <h1 className="text-3xl font-bold mb-4">MultiSlice Redux </h1>
      {/* <Provider store={store}>
        <Shop />
      </Provider> */}
      <Weather />
    </div>
  );
}

export default App;
