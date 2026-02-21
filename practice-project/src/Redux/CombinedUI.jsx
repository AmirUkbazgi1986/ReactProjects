import { Provider } from "react-redux";
import { store } from "./store";
import CounterRedux from "./CounterRedux";
import NameRedux from "./NameRedux";

function CombinedUI() {
  return (
    <div className="flex flex-col gap-5">
      <Provider store={store}>
        <CounterRedux />
        <NameRedux />
      </Provider>
    </div>
  );
}

export default CombinedUI;
