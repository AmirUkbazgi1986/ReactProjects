import CombinedUI from "./CombinedUI";

function App() {
  return (
    <div className="flex flex-col justify-center items-center  bg-green-200 w-screen min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Counter Redux </h1>
      <CombinedUI />
    </div>
  );
}

export default App;
