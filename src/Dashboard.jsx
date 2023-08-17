import { Link } from "react-router-dom";
// import Login from "./Login";

const Dashboard = () => {
  return (
    <>
      <h1>HELLO THIS IS DASHBOARD!!!</h1>
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

export default Dashboard;
