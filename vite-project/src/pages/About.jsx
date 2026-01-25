import { useState } from "react";
import { Navigate } from "react-router-dom";

function About() {
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about">
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eaque
        voluptate provident sed quod, aut voluptatem deserunt magnam praesentium
        natus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        eaque voluptate provident sed quod, aut voluptatem deserunt magnam
        praesentium natus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eaque
        voluptate provident sed quod, aut voluptatem deserunt magnam praesentium
        natus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        eaque voluptate provident sed quod, aut voluptatem deserunt magnam
        praesentium natus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eaque
        voluptate provident sed quod, aut voluptatem deserunt magnam praesentium
        natus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        eaque voluptate provident sed quod, aut voluptatem deserunt magnam
        praesentium natus?
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default About;
