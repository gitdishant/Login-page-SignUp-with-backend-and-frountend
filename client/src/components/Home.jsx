import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div >
        <div className="bg-cyan-700 h-screen">
       
    <div className=" ">
        <div className="">
            <h1 className="p-4 text-3xl  text-blue-950 font-bold ">Logo</h1>
        </div>
        <div className="p-5 right-3 top-0 absolute"> 
        <Link to='/Login' className="m-3 text-2xl cursor-pointer text-blue-900 font-medium hover:underline">Login</Link>
        <Link to='/SignupPage' className="text-blue-900 m-3 text-2xl font-medium hover:underline">   Sign Up</Link>
        </div>
         
    </div>
    </div>
    </div>
  );
};

export default Home;
