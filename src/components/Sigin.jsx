import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="w-full lg:h-[88vh] h-[83vh] flex justify-center items-center bg-black">
      <div className="w-full sm:w-96 h-auto bg-gray-300 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign In
        </h2>
        <form
          action="submit/user"
          method="post"
          className="flex flex-col space-y-6"
        >
          {/* Username */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-gray-600 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Username"
              required
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-gray-700 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
