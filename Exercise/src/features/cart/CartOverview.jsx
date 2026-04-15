import { Link } from "react-router";

function CartOverview() {
  return (
    <div className="flex items-center justify-between text-stone-200 bg-stone-800 px-4 py-4 uppercase text-sm md:text-base sm:py-6">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>2 pizza</span>
        <span>$24.00</span>
      </p>
      <Link to="/cart">open cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
