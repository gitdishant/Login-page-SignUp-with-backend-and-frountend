import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import leaf2 from "../assets/Login/1.png";
import leaf from "../assets/Login/2.png";
import leaf3 from "../assets/Login/3.png";
import leaf4 from "../assets/Login/4.png";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/user", {
        name,
        email,
        password,
      });
      setResponseMessage(response.data.message || "Login successful!");
      console.log("Server response:", response.data);
    } catch (error) {
      setResponseMessage("Login failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-[#3D8D7A] h-screen flex items-center justify-center">
      <div className="z-1 absolute top-3 left-3">
        <Link
          to="/"
          className="m-3 text-2xl cursor-pointer text-yellow-950 font-medium hover:underline"
        >
          Home
        </Link>
        <Link
          to="/SignupPage"
          className="text-yellow-950 m-3 text-2xl font-medium hover:underline"
        >
          Sign Up
        </Link>
      </div>

      {/* Floating Images Section */}
      <div className="z-0">
        <div className="absolute top-10 left-10">
          <img src={leaf} alt="Ginkgo Leaves" className="w-80" />
        </div>
        <div className="absolute top-0 right-0">
          <img src={leaf2} alt="Ginkgo Leaves" className="w-100" />
        </div>
        <div className="absolute left-190 bottom-0">
          <img src={leaf3} alt="Ginkgo Leaves" className="w-140" />
        </div>
        <div className="absolute left-60 bottom-20">
          <img src={leaf4} alt="Ginkgo Leaves" className="w-140" />
        </div>
      </div>

      {/* Login Box Section */}
      <div className="text-[#FBFFE4] z-10">
        <div className="border-4 rounded-xl border-[#B3D8A8] h-80 w-70">
          <h1 className="text-2xl font-bold text-center pt-4">Log in</h1>
          <form onSubmit={handleSubmit} className="pt-6 pl-3 pr-1">
            {/* Name field (optional) */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-2 border-b-2 border-[#B3D8A8] focus:outline-none"
              />
            </div>
            {/* Email field */}
            <div className="mt-3">
              <label htmlFor="email" className="block text-lg font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 border-b-2 border-[#B3D8A8] focus:outline-none"
              />
            </div>
            {/* Password field */}
            <div className="mt-3">
              <label htmlFor="password" className="block text-lg font-medium">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 border-b-2 border-[#B3D8A8] focus:outline-none"
              />
            </div>
            <div className="flex justify-center pt-7">
              <button
                type="submit"
                className="w-20 py-2 border-[#B3D8A8] border-2 cursor-pointer bg-[#3D8D7A] rounded-lg hover:bg-[#559788] focus:ring-2 focus:ring-green-400 focus:outline-none"
              >
                Log in
              </button>
            </div>
            {responseMessage && (
              <p className="text-sm text-center text-emerald-950 mt-4">
                {responseMessage}
              </p>
            )}
            <p className="text-sm text-center text-emerald-950 mt-4">
              Sign up to create an account?{" "}
              <Link
                to="/SignupPage"
                className="text-[#A62C2C] font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
