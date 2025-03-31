import React from "react";
import bg1 from '../assets/Signup/1.jpg'

import { Link } from "react-router-dom";


function SignupPage() {
  return (
  <div
   style={{ backgroundImage: `url(${bg1})` }}
  className="flex items-center justify-center bg-cover bg-center min-h-screen">
            <Link to='/' className="absolute top-0 left-4 m-3 text-2xl cursor-pointer text-yellow-600 font-medium hover:underline">Home</Link>
    
      <div className="bg-[#FCB454] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Create an Account
        </h2>
        <form action="#" method="POST" className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A62C2C] focus:outline-none"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A62C2C] focus:outline-none"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A62C2C] focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#A62C2C] rounded-lg hover:bg-[#E83F25] focus:ring-2 focus:ring-[#A62C2C] focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-emerald-950 mt-4">
          Already have an account?{" "}
            <Link to='/Login' className="text-[#096405] font-bold hover:underline">   Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
