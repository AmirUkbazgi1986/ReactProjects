import { Outlet } from "react-router";
import Navigation from "./Navigation";

function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Root;
