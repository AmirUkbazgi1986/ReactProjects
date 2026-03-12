import { useCart } from "../Context/CartContext";

function Checkout() {
  const { getCartItemsWithProducts } = useCart();
  const cartItems = getCartItemsWithProducts();
  return (
    <div className="grow py-8 px-0">
      <div className="max-w-[1200px] my-0 mx-auto py-0 px-8">
        <h1 className="text-[2rem] mb-8 text-[#333]">Checkout</h1>
        <div className="grid grid-cols-[2fr 1fr] gap-8 mt-8">
          <div className="bg-[#fff] py-8 px-8 rounded-lg shadow-[0 2px 8px rgba(0,0,0,0.1)]">
            <h2 className="text-2xl mb-[1.5rem] text-[#333]">Order Summary</h2>
            {cartItems.map((item) => (
              <div
                className="flex gap-4 py-6 px-0 border-b border-b-[#eee] last:border-b-[0]"
                key={item.id}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-[100px] h-[100px] object-cover rounded-lg "
                />
                <div className="grow ">
                  <h3 className="text-[1.1rem] mb-2 text-[#333]">
                    {item.product.name}
                  </h3>
                  <p className="text-[#666] text-[0.9rem]">
                    {item.product.price} each
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button className="w-[32px] h-[32px] border border-[#ddd] bg-[#fff] rounded-lg cursor-pointer text-[1.2rem] flex items-center justify-center transition-bg-color duration-[0.2s] hover:bg-[#f5f5f5]">
                      -
                    </button>

                    <span className="min-w-[40px] text-center font-semibold ">
                      {item.quantity}
                    </span>
                    <button className="w-[32px] h-[32px] border border-[#ddd] bg-[#fff] rounded-lg cursor-pointer text-[1.2rem] flex items-center justify-center transition-bg-color duration-[0.2s] hover:bg-[#f5f5f5]">
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-[#333] text-[1.1rem]">
                    {item.product.price * item.quantity}
                  </p>
                  <button className="py-3 px-7 border-none rounded-sm text-base font-medium cursor-pointer transition- background-color duration-[0.2s] transform-[0.1s] no-underline inline-block  text-center bg-[#6c757d] hover:bg-[#545b62] text-[#fff] py-2 px-4 text-[0.875rem]">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
