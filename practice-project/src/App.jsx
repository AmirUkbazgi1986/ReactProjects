import { use, useReducer, useState } from "react";

const shoppingListState = [
  {
    name: "broccoli",
    quantity: 1,
    checked: false,
    itemId: 1,
  },
  {
    name: "apples",
    quantity: 2,
    checked: false,
    itemId: 2,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "added_item": {
      return [...state, action.payLoad];
    }
    case "removed_item": {
      return { ...state, hobby: action.payLoad };
    }
    case "checked_off_item": {
      return { ...state, checked: action.payLoad };
    }
    default:
      throw new Error("something is not good!");
  }
}

function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);

  const [items, dispatch] = useReducer(reducer, shoppingListState);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCheckBoxChange(e) {
    setChecked(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name,
      quantity,
      checked: false,
      itemId: crypto.randomUUID(),
    };
    console.log(newItem.name);
    dispatch({ type: "added_item", payLoad: newItem });
  }

  function handleClick(id) {
    dispatch({ type: "removed_item", payLoad: id });
  }

  return (
    <div className="flex flex-col justify-center items-center  bg-green-200 w-screen h-screen">
      <h1 className="text-3xl font-bold mb-4">Shopping List Items</h1>

      <form
        className=" flex flex-row gap-8 items-center justify-center bg-orange-200 w-3xl p-3"
        onSubmit={handleSubmit}
      >
        <select
          name="quantity"
          id="name"
          className="bg-lime-50 py-3 px-6 rounded-full"
          value={quantity}
          onChange={handleQuantityChange}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="bg-lime-50 py-3 px-6 rounded-full"
        />

        <button className="bg-blue-200 py-2 px-4 rounded-lg cursor-pointer">
          Add
        </button>
      </form>

      <ul className=" w-3xl min-h-4xl bg-amber-900 p-5 flex flex-row flex-wrap gap-8">
        {items?.map((list) => (
          <li key={list.itemId} className="flex flex-row gap-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckBoxChange}
            />
            <p className="text-orange-200 text-lg">{list.quantity}</p>
            <p className="text-orange-200 text-lg">{list.name}</p>
            <button
              type="submit"
              className="py-1 px-4 bg-red-100 rounded-full cursor-pointer"
              onClick={() => handleClick(list.itemId)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
