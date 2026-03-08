import Product from "../components/Product";
import { getProducts } from "../data/product";

function Home() {
  const products = getProducts();
  return (
    <div className="flex-[1] py-8 px-0">
      <div className="text-center py-[4rem] px-[2rem] max-w-[800px] my-0 mx-auto">
        <h1 className="text-5xl mb-4 text-[#333]">Welcome to ShopHub</h1>
        <p className="text-xl text-[#666] mb-8">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="max-w-[1200px] my-0 mx-auto py-0 px-8">
        <h2 className="text-[2rem] mb-8 text-[#333]">Our Products</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 mt-4">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
