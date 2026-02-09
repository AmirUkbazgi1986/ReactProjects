import { useProduct } from "./ShopContext";

function CartSummary() {
  const { cart, removeFromCart } = useProduct();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold ">Cart Summary</h2>
      <ul className="flex flex-col items-center gap-4 bg-white p-4 w-lg">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product, index) => (
            <li
              key={index}
              className="flex flex-row justify-between items-center gap-3 w-full bg-blue-200 p-2 rounded-md cursor-pointer"
            >
              {product}
              <button
                className="bg-red-200 px-6 py-2 rounded-md cursor-pointer"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default CartSummary;
