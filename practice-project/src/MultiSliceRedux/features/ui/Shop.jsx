import { useDispatch, useSelector } from "react-redux";
import { login } from "../auth/authSlice.js";
import { addToCart } from "../cart/cartSlice.js";

function Shop() {
  const user = useSelector((state) => state.auth.user);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-row gap-7 mb-4">
        <button
          className="py-2 px-6 bg-blue-200 rounded-md text-xl font-bold cursor-pointer hover:bg-red-100"
          onClick={() => dispatch(login("amna"))}
        >
          Login
        </button>
        <button
          className="py-2 px-6 bg-blue-200 rounded-md text-xl font-bold cursor-pointer hover:bg-red-100"
          onClick={() => dispatch(addToCart({ id: 2, name: "trouser" }))}
        >
          Add Item
        </button>
      </div>
      <p>User: {user}</p>
      <p>Cart items: {items.length}</p>
    </div>
  );
}

export default Shop;
