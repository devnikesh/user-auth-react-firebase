import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import { useTitle } from "../../hook/useTitle";

export default function Register() {
  const [details, setDetails] = useState();
  useTitle("Register");

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Create an account
          </h5>
          <div className="mb-6">
            <Input
              name="name"
              handleChange={handleChange}
              value={details?.name}
              type={"text"}
              placeholder={"John Brown"}
            />
          </div>
          <div className="mb-6">
            <Input
              name="email"
              handleChange={handleChange}
              value={details?.email}
              type={"email"}
              placeholder={"email@gmail.com"}
            />
          </div>
          <div className="mb-6">
            <Input
              name="password"
              handleChange={handleChange}
              value={details?.password}
              type={"password"}
              placeholder={"••••••••"}
            />
          </div>
          <div className="mb-6">
            <Input
              name="confirmPassword"
              handleChange={handleChange}
              value={details?.confirmPassword}
              type={"password"}
              placeholder={"••••••••"}
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
                onChange={handleChange}
              />
            </div>
            <label
              for="terms"
              className="ml-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-red-600 hover:underline dark:text-red-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Register new account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?{" "}
            <Link
              className="text-red-400 hover:underline dark:text-red-500"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
