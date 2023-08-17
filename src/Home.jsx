import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to the Home page (protected route)!</h1>;
      <div>
        <button>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Logout
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
