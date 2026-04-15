import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import OrderItem from "./features/order/OrderItem";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <Order />,
      },
      {
        path: "/order/:orderId",
        element: <OrderItem />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
