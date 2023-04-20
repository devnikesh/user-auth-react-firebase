import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, useLocation } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="w-full mx-auto flex items-center justify-center">
        <Link to={"/"}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link to={"/"}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1 className="bold text-red-300">Hi there, Welcome to the site!</h1>
      <div className="card">
        <p>
          A Web App build on React Vite & Firebase for backend with User
          Authentication.
        </p>
      </div>
      <div>
        <Link to={"/login"}>
          {" "}
          <button className="px-4 py-2 bg-red-400 rounded-lg text-white font-semi-bold">
            Login{" "}
          </button>
        </Link>
      </div>
    </>
  );
}
