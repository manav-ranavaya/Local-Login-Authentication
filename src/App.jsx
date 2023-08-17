import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NotFoundPage from "./NotFoundPage.jsx";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";

function App() {
  const auth = localStorage.getItem("auth") === "true";

  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={<ProtectedRoute Component={Home} auth={auth} />}
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute Component={Dashboard} auth={auth} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
