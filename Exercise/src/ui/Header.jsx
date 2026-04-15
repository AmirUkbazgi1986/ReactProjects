import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex items-center justify-between border-b bg-yellow-500 uppercase border-stone-200 px-4 py-3 sm:px-6">
      <Link to="/" className="tracking-widest">
        fast react pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
