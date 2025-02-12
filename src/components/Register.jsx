import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full lg:h-[88vh] h-[83vh] flex justify-center items-center bg-black">
      <div className="w-96 h-auto bg-gray-300 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Register
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
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-gray-700 hover:underline">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
