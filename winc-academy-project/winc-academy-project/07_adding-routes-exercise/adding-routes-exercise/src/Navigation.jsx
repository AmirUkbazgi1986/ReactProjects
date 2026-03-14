import { Link } from "react-router";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post/new">NewPost</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
