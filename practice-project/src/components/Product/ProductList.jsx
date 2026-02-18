import { useProduct } from "./ShopContext";

function ProductList() {
  // 3. use or consuming the context
  const { products, addToCart } = useProduct();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Products</h2>
      <ul className="flex flex-col items-center gap-4 bg-white p-4 w-lg">
        {products?.map((product) => (
          <li
            key={product}
            className="flex flex-row justify-between items-center gap-3 w-full bg-orange-200 p-2 rounded-md cursor-pointer"
          >
            {product}
            <button
              className="bg-blue-200 px-6 py-2 rounded-md cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
