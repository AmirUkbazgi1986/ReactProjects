import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import Btnstyles from "../components/Button.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.login}>
      <PageNav />
      <form action="" className={styles.formEl}>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="text" id="email" placeholder="jack@example.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder="....." />
        </div>
        <Link to="/app">
          <button className={`${Btnstyles.btn} ${Btnstyles.primary}`}>
            login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
