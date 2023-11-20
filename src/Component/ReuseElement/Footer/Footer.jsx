import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h1 className="flex text-lg sm:text-2xl text-[#DDE4E6] font-bold">
              <img
                className="w-8"
                src="https://t3.ftcdn.net/jpg/05/22/67/88/240_F_522678817_aZX0WdD2uJPa7WKiU1VoGvq7LcX4XLrx.webp"
                alt="logo"
              />
              SavorSphere Eatery
            </h1>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/Blog" className="mr-4 hover:underline md:mr-6 ">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/my-order-food"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Your Order Food
                </Link>
              </li>
              <li>
                <Link to="/allFood" className="mr-4 hover:underline md:mr-6 ">
                  All Food Items
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              SavorSphere Eatery
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
