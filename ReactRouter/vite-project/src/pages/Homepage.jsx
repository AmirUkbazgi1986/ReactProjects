import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <PageNav />
      <div className={styles.content}>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your <br />
          adventures.
        </h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget <br /> your wonderful experience, and show your
          friends how you have wandered the <br /> world.
        </p>

        <Link to="/app" className="cta">
          START TRACKING NOW
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
