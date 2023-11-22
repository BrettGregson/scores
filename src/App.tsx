// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MyLeagues from "./pages/MyLeagues";
import Fixtures from "./pages/Fixtures";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Logout from "./pages/Logout";
import { AuthProvider } from "./context/AuthContext";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/leagues" element={<MyLeagues />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
