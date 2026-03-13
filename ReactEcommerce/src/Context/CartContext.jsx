import { Children, createContext, useContext, useState } from "react";
import { getProductById } from "../data/product";
// import { useNavigate } from "react-router-dom";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // {id:2, quantity:7}
  // const navigate = useNavigate();

  function addToCart(productId) {
    console.log(productId);
    const existing = cartItems.find((item) => item.id === productId);
    if (existing) {
      const currentQuantity = existing.quantity;
      const updateCartItems = cartItems.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );
      setCartItems(updateCartItems);
      // navigate("/checkout");
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  }

  function getCartItemsWithProducts() {
    return cartItems
      .map((item) => ({
        ...item,
        product: getProductById(item.id),
      }))
      .filter((item) => item.product);
  }

  function getCartTotal() {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
    return total;
  }

  function clearCart() {
    setCartItems([]);
  }
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        getCartItemsWithProducts,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("context is being used outside the provider");
  return context;
}
export { useCart, CartProvider };
