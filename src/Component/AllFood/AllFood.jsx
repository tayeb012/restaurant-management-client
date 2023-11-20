import { useLoaderData } from "react-router-dom";
import OneFood from "./OneFood";
import { useEffect, useState } from "react";

import { RiseLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllFood = () => {
  const loaderAllFood = useLoaderData() || "";
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [allFood, setAllFood] = useState(loaderAllFood);
  const [searchValue, setSearchValue] = useState("");
  const [totalFoodCount, setTotalFoodCount] = useState([]);
  const [foodPerPage, setFoodPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(totalFoodCount / foodPerPage);

  // console.log(loaderAllFood);
  const url = "/all-food-count";
  useEffect(() => {
    axiosSecure
      .get(url)
      .then((result) => {
        setTotalFoodCount(result.data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure, url]);

  useEffect(() => {
    const url2 = `/all-food?page=${currentPage}&size=${foodPerPage}`;
    axiosSecure
      .get(url2)
      .then((result) => {
        setAllFood(result.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [currentPage, foodPerPage, axiosSecure]);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <RiseLoader color="#0EADD9" size={30} />
      </div>
    );
  }

  // const pages = [];
  // for (let i = 1; i <= numberOfPages; i++) {
  //   pages.push(i);
  // }

  const pages = [...Array(numberOfPages).keys()];
  // console.log(pages);

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchValue);
    const searchFood = loaderAllFood?.filter(
      (food) => food.food_name.toLowerCase() == searchValue.toLowerCase()
    );
    setAllFood(searchFood);
  };

  const handleCategory = (e) => {
    // console.log(e.target.value);
    const foodCategory = e.target.value;

    if (foodCategory == "All Category") {
      setAllFood(loaderAllFood);
    } else {
      const categoryFood = loaderAllFood?.filter(
        (food) => food.food_category.toLowerCase() == foodCategory.toLowerCase()
      );
      setAllFood(categoryFood);
    }
  };

  const handleFoodItemPerPage = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    setFoodPerPage(value);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 py-4 sm:py-3 md:py-5 ">
      <Helmet>
        <title>All Food - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <h1 className="text-center text-[#FFFFFF] py-4 sm:py-8 md:py-12 text-lg sm:text-2xl md:text-3xl font-semibold w-10/12 sm:w-8/12 md:w-6/12 ">
        Here we show
        <span className="text-[#FFB300] text-2xl sm:text-3xl md:text-4xl">
          Our All Type of Food
        </span>
        <form onSubmit={handleSearch}>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              name="search"
              type="search"
              id="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by food name"
              required
            />
            <button
              type="submit"
              className="absolute end-2.5 bottom-0  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Search
            </button>
          </div>
        </form>
        <div className="my-5">
          <select
            onChange={handleCategory}
            className="select select-info w-full max-w-xs bg-transparent"
          >
            <option value="All Category" className="text-blue-500">
              All Category
            </option>
            <option value="Main Course" className="text-blue-500">
              Main Course
            </option>
            <option value="Appetizer" className="text-blue-500">
              Appetizer
            </option>
            <option value="Seafood" className="text-blue-500">
              Seafood
            </option>
            <option value="Pasta" className="text-blue-500">
              Pasta
            </option>
            <option value="Pizza" className="text-blue-500">
              Pizza
            </option>
            <option value="Dessert" className="text-blue-500">
              Dessert
            </option>
            <option value="Beverage" className="text-blue-500">
              Beverage
            </option>
            <option value="Sandwich" className="text-blue-500">
              Sandwich
            </option>
            <option value="Sushi" className="text-blue-500">
              Sushi
            </option>
            <option value="Salad" className="text-blue-500">
              Salad
            </option>
          </select>
        </div>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {allFood?.map((oneFood, idx) => (
          <OneFood key={idx} oneFood={oneFood}></OneFood>
        ))}
      </div>

      <div className="flex gap-10">
        <div>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={` relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[] duration-300 text-2xl ${
                currentPage === page && "scale-75"
              }`}
              key={page}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {page + 1}
              </span>
            </button>
          ))}
        </div>
        <select
          onChange={handleFoodItemPerPage}
          className="select-none  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  text-center me-2 mb-2 bg-[#3498DB] py-3 px-6  align-middle font-sans font-bold uppercase text-[#FFFFFF] hover:text-[#ECF0F1] shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[] duration-300 text-sm"
        >
          <option disabled selected>
            items Per page
          </option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};

export default AllFood;
