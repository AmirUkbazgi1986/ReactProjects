import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import { ProductProvider } from "./ShopContext";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-green-200 w-screen h-screen">
      <h1 className="text-3xl font-bold">Simple shopping App</h1>
      <ProductProvider>
        <ProductList />
        <CartSummary />
      </ProductProvider>
    </div>
  );
}

export default App;
