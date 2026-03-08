import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5] text-color-[#333] leading-[1.6] font-[Roboto] m-0 p-0 box-border">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
