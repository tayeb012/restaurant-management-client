import { useContext, useEffect, useState } from "react";
import OneFood from "../AllFood/OneFood";
import { AuthContext } from "../../Provider/AuthProvider";

import { RiseLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyAddedFood = () => {
  const { user } = useContext(AuthContext) || "";
  const axiosSecure = useAxiosSecure();
  const userEmail = user?.email;
  const [loading, setLoading] = useState(true);
  const [myAddedFood, setMyOrderFood] = useState([]);
  const url = `/my-added-food?userEmail=${userEmail}`;
  // http://localhost:12002/my-added-food
  // nuper61314@gmail.com

  useEffect(() => {
    axiosSecure
      .get(url)
      .then((result) => {
        setMyOrderFood(result.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [axiosSecure, url]);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <RiseLoader color="#0EADD9" size={30} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 py-4 sm:py-8 md:py-16 ">
      <Helmet>
        <title>Your Added Food - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <h1 className="text-center text-[#FFFFFF] py-4 sm:py-8 md:py-12 text-lg sm:text-2xl md:text-3xl font-semibold w-10/12 sm:w-8/12 md:w-6/12 ">
        Here we show
        <br />
        <span className="text-[#FFB300] text-2xl sm:text-3xl md:text-4xl">
          {" "}
          Your Added All Type of Food
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {myAddedFood?.map((oneFood, idx) => (
          <OneFood key={idx} oneFood={oneFood}></OneFood>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFood;
