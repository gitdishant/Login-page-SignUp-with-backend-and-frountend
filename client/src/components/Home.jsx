import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fertchData = async () => {
      try {
        const responce = await axios.get("http://localhost:3000/api/user");
        setData(responce.data);
        console.log(responce.data);
      } catch (error) {
        console.error("Error ", error);
      }
    };
    fertchData();
  }, []);

  return (
    <div>
      <div className="bg-cyan-700 h-screen">
        <div className=" ">
          <div className="">
            <h1 className="p-4 text-3xl  text-blue-950 font-bold ">Logo</h1>
          </div>
          <div className="p-5 right-3 top-0 absolute">
            <Link
              to="/Login"
              className="m-3 text-2xl cursor-pointer text-blue-900 font-medium hover:underline"
            >
              Login
            </Link>
            <Link
              to="/SignupPage"
              className="text-blue-900 m-3 text-2xl font-medium hover:underline"
            >
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">over users</h1>
          <ol className="m-3">
            {data.map((item, index) => (
              <li key={index} className="text-lg font-medium">{item.name || "no name"}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
