import { useLocalStorage } from "../Context/useLocalStorage";

function UseCustomerHook() {
  const [name, setName] = useLocalStorage("name", "Amir");
  const [hobby, setHobby] = useLocalStorage("hobby", "coding");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleHobbyChange(e) {
    setHobby(e.target.value);
  }
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-green-200 w-screen h-screen">
      <h1 className="text-3xl font-bold">
        Welcome, {name} and his {hobby}
      </h1>
      <label htmlFor="" className="text-xl font-bold">
        Name:
      </label>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className="bg-white py-2 px-6 rounded-md"
      />
      <label htmlFor="" className="text-xl font-bold">
        Hobby:
      </label>
      <input
        type="text"
        value={hobby}
        onChange={handleHobbyChange}
        className="bg-white py-2 px-6 rounded-md"
      />
      <p>
        {name} likes {hobby}
      </p>
    </div>
  );
}

export default UseCustomerHook;
