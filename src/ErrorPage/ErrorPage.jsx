import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen  flex flex-col justify-center items-center">
      <img
        src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_640.png" // replace with the actual path to your image
        alt="404 Not Found"
        className="max-w-full mb-8 rounded-lg "
        style={{ maxHeight: "400px" }} // adjust max height as needed
      />
      <p className="text-xl font-bold mb-4">Oops! Page not found.</p>
      <Link to="/">
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  text-center me-2 mb-2 bg-[#db3434] py-8 px-6  align-middle font-sans text-xs font-bold uppercase text-[#FFFFFF] hover:text-[#ECF0F1] shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[] duration-300"
          type="button"
          data-ripple-light="true"
        >
          <span className="relative px-8 py-8 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            Home
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
