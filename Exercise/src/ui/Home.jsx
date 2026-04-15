import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  return (
    <div className="mt-10 px-4 text-center sm:mt-16">
      <h1 className="text-xl md:text-3xl font-semibold mb-8">
        The best pizza <br />{" "}
        <span className="text-yellow-500">
          Straight out of the oven, straight to you
        </span>
      </h1>
      <CreateUser />
      <Button to="/menu" type="primary">
        start ordering
      </Button>
    </div>
  );
}

export default Home;
