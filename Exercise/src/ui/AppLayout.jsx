import { Outlet } from "react-router";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

function AppLoyout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen gap-8">
      <Header />
      <Outlet />
      <CartOverview />
    </div>
  );
}

export default AppLoyout;
