import { useState } from "react";
import { users } from "./Constants/Constants";
import "./Login.css";

// eslint-disable-next-line react/prop-types
const Login = () => {
  localStorage.setItem("auth", "false");

  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    const user = users.find(
      (u) =>
        u.username === userData.username && u.password === userData.password
    );
    if (user) {
      localStorage.setItem("auth", "true");
      alert("Logged in successfully");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
