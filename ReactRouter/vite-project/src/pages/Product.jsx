import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

function Product() {
  return (
    <div className={styles.product}>
      <PageNav />
      <section>
        <div className={styles.image}>
          <img
            src="https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            // width="100"
            // height="100"
          />
        </div>
        <div className={styles.info}>
          <h1>About WorldWise.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            tenetur, dignissimos minima quas harum quo vitae quis. Ducimus,
            distinctio dolorum recusandae commodi rem blanditiis officiis
            numquam impedit, aliquid repellat reiciendis voluptatibus aperiam,
            reprehenderit nobis iste! Reiciendis cumque sint ipsum earum,
            corrupti tempore eaque facere saepe nam eveniet eligendi voluptatem
            ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            tenetur, dignissimos minima quas harum quo vitae quis. Ducimus,
            distinctio dolorum recusandae commodi rem blanditiis officiis
            numquam impedit, aliquid repellat reiciendis voluptatibus aperiam,
            reprehenderit nobis iste! Reiciendis cumque sint ipsum earum,
            corrupti tempore eaque facere saepe nam eveniet eligendi voluptatem
            ab.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Product;
