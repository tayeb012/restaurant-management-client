import React, { useContext, useEffect, useState } from "react";
import OneFood from "../AllFood/OneFood";
import Swal from "sweetalert2";

import { RiseLoader } from "react-spinners";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyOrderFood = () => {
  const { user } = useContext(AuthContext) || "";
  const axiosSecure = useAxiosSecure();
  const userEmail = user?.email;
  const [loading, setLoading] = useState(true);
  const [myOrderFood, setMyOrderFood] = useState([]);
  const url = `/order-food?userEmail=${userEmail}`;
  // const [forModifyQuantityFood, fetForModifyQuantityFood] = useState([]);
  //   console.log(myOrderFood);
  // http://localhost:12002/order-food/

  useEffect(() => {
    axiosSecure
      .get(url)
      .then((result) => {
        setMyOrderFood(result.data);
        setLoading(false);
        // console.log("result.data", result.data);
      })
      .catch((error) => console.log(error));
  }, [axiosSecure, url]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:12002/all-food")
  //     .then((result) => {
  //       fetForModifyQuantityFood(result.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // console.log(forModifyQuantityFood);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <RiseLoader color="#0EADD9" size={30} />
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#31C48D",
      cancelButtonColor: "#D61F69",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url2 = `/order-food/${id}`;

        axiosSecure.delete(url2).then((result) => {
          // console.log(result.data);
          if (result.data.deletedCount > 0) {
            const remainingOrderedFood = myOrderFood.filter(
              (food) => food._id !== id
            );
            setMyOrderFood(remainingOrderedFood);
            // axios
            //   .put(
            //     `http://localhost:12002/all-food-purchase-cancel/id/${_id}`,
            //     {
            //       quantity: quantity2,
            //     }
            //   )
            //   .then((card) => {
            //     console.log(card.data.modifiedCount);
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
            Swal.fire(
              "Cancel!",
              "Your ordered food has been cancel.",
              "success"
            );
          }
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 py-4 sm:py-8 md:py-16 ">
      <Helmet>
        <title>Your Order Food - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <h1 className="text-center text-[#FFFFFF] py-4 sm:py-8 md:py-12 text-lg sm:text-2xl md:text-3xl font-semibold w-10/12 sm:w-8/12 md:w-6/12 ">
        Here we show <br />
        <span className="text-[#FFB300] text-2xl sm:text-3xl md:text-4xl">
          Your All Type of Ordered Food
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {myOrderFood?.map((oneFood, idx) => (
          <OneFood
            key={idx}
            handleDelete={handleDelete}
            oneFood={oneFood}
          ></OneFood>
        ))}
      </div>
    </div>
  );
};

export default MyOrderFood;
