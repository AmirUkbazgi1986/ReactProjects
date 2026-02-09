import { createContext, useContext, useState } from "react";

//  1. creating the context
const productContext = createContext();

//  2. provide the context

function ProductProvider({ children }) {
  const [cart, setCart] = useState([]);
  const products = ["Apple", "Banana", "Orange", "Kiwi"];

  function addToCart(product) {
    setCart((item) => [...item, product]);
  }
  function removeFromCart(id) {
    setCart((item) => item.filter((product, index) => index !== id));
  }
  return (
    <productContext.Provider
      value={{ cart, addToCart, removeFromCart, products }}
    >
      {children}
    </productContext.Provider>
  );
}

function useProduct() {
  const content = useContext(productContext);
  if (content === undefined)
    throw new Error("You are using the content outside of the provider!");
  return content;
}

export { ProductProvider, useProduct };
