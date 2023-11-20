import React, { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import OneFood from "../../AllFood/OneFood";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const TopSaleFood = () => {
  const [allFood, setAllFood] = useState();
  const [loading, setLoading] = useState(true);
  const [soldValue, setSoldValue] = useState(true);
  const axiosSecure = useAxiosSecure();

  const url = "/all-food";

  useEffect(() => {
    axiosSecure
      .get(url)
      .then((result) => {
        const sortedFoodItems = [...result.data].sort(
          (a, b) => b.sold - a.sold
        );
        setAllFood(sortedFoodItems);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, axiosSecure]);

  // console.log(allFood);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <RiseLoader color="#0EADD9" size={30} />
      </div>
    );
  }

  // console.log(allFood);
  return (
    <div className="py-12 px-32">
      <div className="bg-white py-5 mb-5 rounded-md">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#4C53E8] to-[#04B1F3] text-transparent bg-clip-text ">
          Our Top Sold Food
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allFood?.slice(0, 6).map((oneFood, idx) => (
          <OneFood key={idx} soldValue={soldValue} oneFood={oneFood}></OneFood>
        ))}
      </div>
    </div>
  );
};

export default TopSaleFood;
