import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h2>Page not Found</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptas
        consectetur rem excepturi delectus id recusandae rerum neque facilis
        esse!
      </p>
      <p>
        Go to the <Link to="/"> Homepage.</Link>
      </p>
    </div>
  );
}

export default NotFound;
