import { Link } from "react-router";
import { useCart } from "../Context/CartContext";

function Product({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLable = productInCart
    ? `(${productInCart.quantity}) `
    : null;
  return (
    <div className="bg-[#fff] rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]transition-transform duration-[0.2s] transition-shadow duration-[0.2s] hover:transform-[translateY(-4px)] hover: shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[250px] object-cover"
      />
      <div className="py-6 px-6">
        <h3 className="text-xl mb-2 text-[#333]">{product.name}</h3>
        <p className="text-2xl  font-bold text-[#007bff] mb-4">
          ${product.price}
        </p>
        <div className="flex gap-2">
          <Link
            to={`/product/${product.id}`}
            className="py-3 px-7 border-none rounded-sm text-base font-medium cursor-pointer transition- background-color duration-[0.2s] transform-[0.1s] no-underline inline-block  text-center bg-[#6c757d] hover:bg-[#545b62] text-[#fff]"
          >
            View Details
          </Link>
          <button
            className="py-3 px-7 border-none rounded-sm text-base font-medium cursor-pointer transition- background-color duration-[0.2s] transform-[0.1s] no-underline inline-block  text-center bg-[#007bff] hover:bg-[#0056b3] text-[#fff]"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart {productQuantityLable}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
