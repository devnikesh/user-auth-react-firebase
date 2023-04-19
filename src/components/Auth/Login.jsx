import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import { useTitle } from "../../hook/useTitle";

export default function Login() {
  const [details, setDetails] = useState();
  useTitle("Login");

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(details);
  }, [details]);
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in
          </h5>
          <Input
            name="email"
            handleChange={handleChange}
            value={details?.email}
            type={"email"}
            placeholder={"name@company.com"}
          />
          <Input
            name="password"
            handleChange={handleChange}
            value={details?.password}
            type={"password"}
            placeholder={"••••••••"}
          />

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  name="remember"
                  value={details?.remember}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                  onChange={handleChange}
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-red-400 hover:underline dark:text-red-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              className="text-red-400 hover:underline dark:text-red-500"
              to={"/register"}
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
