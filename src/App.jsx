import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === "/") {
      // Don't show the button on the home page
      return null;
    }

    return (
      <div className="w-full">
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
        <button
          className="fixed right-20 top-10 "
          onClick={() => navigate("/")}
        >
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      {BackButton()}
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <p className="">Click on the Vite and React logos to learn more</p> */}
    </div>
  );
}

export default App;
