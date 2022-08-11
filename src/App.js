import { useState, useEffect } from "react";
import AuthService from "./services/authService";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoutes from "./helpers/privateRoutes";
import Dashboard from "./pages/Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const { user } = currentUser;
  return (
    <div className="App">
      {user}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
