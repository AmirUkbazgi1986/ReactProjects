import { NavLink, Link } from "react-router";
import { useAuth } from "../Context/AuthContext";

function Navbar() {
  const { user, logout, setMode } = useAuth();
  return (
    <nav className="bg-[#fff] py-4 px-0 sticky top-0 z-100">
      <div className="max-w-[1200px]  my-0 mx-auto py-0 px-8 flex flex-col items-start md:flex-row md:justify-between md:items-center flex-wrap gap-4">
        <Link to="/" className="text-2xl font-bold text-[#333] no-underline">
          ShopHub
        </Link>
        <div className="flex gap-7 items-center">
          <NavLink
            to="/"
            className="text-[#333] no-underline font-medium transition-color duration-[0.2s] hover: text-[#007bff]"
          >
            Home
          </NavLink>
          <NavLink
            to="/checkout"
            className="text-[#333] no-underline font-medium transition-color duration-[0.2s] hover: text-[#007bff]"
          >
            Cart
          </NavLink>
        </div>
        {!user ? (
          <div className="flex items-center gap-4">
            <NavLink
              to="/auth"
              className="py-3 px-7 border-none rounded-sm text-base font-medium cursor-pointer transition-background-color duration-[0.2s] transform-[0.1s] no-underline inline-block  text-center bg-[#6c757d] hover:bg-[#545b62] text-[#fff]"
              onClick={() => setMode("login")}
            >
              Login
            </NavLink>
            <NavLink
              to="/auth"
              className="py-3 px-7 border-none rounded-sm text-base font-medium cursor-pointer transition- background-color duration-[0.2s] transform-[0.1s] no-underline inline-block  text-center bg-[#007bff] hover:bg-[#0056b3] text-[#fff]"
              onClick={() => setMode("signup")}
            >
              Signup
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-[#666] text-[0.9rem]">
              Hello, {user.email}
            </span>
            <button
              onClick={() => logout()}
              className="py-3 px-7 border-none rounded-sm text-base font-medium cursor-pointer transition- background-color duration-[0.2s] transform-[0.1s] no-underline inline-block  text-center bg-[#6c757d] hover:bg-[#545b62] text-[#fff]"
            >
              logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
