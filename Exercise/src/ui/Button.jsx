import { Link } from "react-router";

function Button({ children, to, type }) {
  const base =
    "inline-block text-sm px-4 py-3 bg-yellow-400 rounded-full font-semibold text-stone-800 hover:bg-yellow-300 uppercase sm:px-6 sm:py-4 transition-all duration-300 focus:ring focus:ring-yellow-300 focus:outline-none focus:ring-offset-2 focus:bg-yellow-300 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return <button>{children}</button>;
}

export default Button;
