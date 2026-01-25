import { Link, useLocation } from "react-router-dom";
function Breadcrumbs() {
  const { pathname } = useLocation();
  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((crumb, index, array) => {
      const currentLink = "/" + array.slice(0, index + 1).join("/");

      return (
        <div className="crumb" key={currentLink}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;
