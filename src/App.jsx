import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";

function App() {
  const location = useLocation();
  const isHomePage = () => {
    if (location.pathname == "/") {
      return true;
    } else return false;
  };
  function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === "/") {
      // Don't show the button on the home page
      return null;
    }

    return (
      <button className="fixed left-20 top-10 " onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-red-500 hover:text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="App">
      {BackButton()}
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <p className="">Click on the Vite and React logos to learn more</p> */}
    </div>
  );
}

export default App;
