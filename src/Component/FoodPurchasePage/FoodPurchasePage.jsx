import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodPurchasePage = () => {
  const { user } = useContext(AuthContext) || "";
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const userName = user?.displayName;
  const userEmail = user?.email;
  const foodDetails = useLoaderData();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  //   console.log(date);
  const {
    sold,
    description,
    food_category,
    food_image,
    food_name,
    food_origin,
    made_by,
    add_by,
    price,
    quantity,
    _id,
  } = foodDetails || "";

  // const [totalSold, setTotalSold] = useState(sold);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current date and time every second
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  const handleSubmit = (e) => {
    e.preventDefault();
    const buyer_email = e.target.buyer_email.value;
    const buyer_name = e.target.buyer_name.value;
    const quantityPurchase = e.target.quantity.value;
    const quantity2 = parseInt(quantity) - parseInt(quantityPurchase);
    const totalSold = parseInt(sold) + parseInt(quantityPurchase);
    console.log(totalSold);

    // if (!sold || sold == "") {
    //   setTotalSold(quantityPurchase);
    // } else {
    //   const sell = parseInt(quantityPurchase) + parseInt(sold);
    //   setTotalSold(sell);
    // }

    // setModifyQuantity(modifiedQuantity);
    // console.log("modifiedQuantity", modifiedQuantity);
    // console.log("modifyQuantity", modifyQuantity);
    // console.log(parseInt(quantityPurchase));
    // console.log(parseInt(quantity));

    const purchaseFoodValue = {
      food_image,
      food_name,
      food_origin,
      food_category,
      price,
      description,
      made_by,
      add_by,
      quantityPurchase,
      userEmail,
      buyer_email,
      buyer_name,
      formattedTime,
      formattedDate,
    };

    // console.log(purchaseFoodValue);
    const url = "/order-food";

    axiosSecure
      .post(url, {
        description,
        food_category,
        food_image,
        food_name,
        food_origin,
        made_by,
        price,
        add_by,
        quantityPurchase,
        userEmail,
        buyer_email,
        buyer_name,
        formattedTime,
        formattedDate,
      })
      .then((card) => {
        console.log(card);
        if (card.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Food SUCCESSFULLY",
            showConfirmButton: false,
            timer: 1500,
          });
          const url2 = `/all-food-purchase/id/${_id}`;
          axiosSecure
            .put(url2, {
              quantity: quantity2,
              sold: totalSold,
            })
            .then((card) => {
              console.log(card.data.modifiedCount);
            })
            .catch((error) => {
              console.log(error);
            });
          return navigate("/my-order-food");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Have some technical iss",
          text: error.message,
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  return (
    <div className=" flex justify-center ">
      <Helmet>
        <title>Purchase Food - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="p-4 w-3/5">
        <h2 className="text-2xl font-semibold text-center text-pink-200 mb-4">
          Food purchase
        </h2>
        <form onSubmit={handleSubmit} className=" p-4 rounded shadow-md">
          <div className="mb-4">
            <label
              htmlFor="add_by"
              className="block text-sm font-medium text-blue-500"
            >
              Buyer Name
            </label>
            <input
              readOnly
              type="text"
              name="buyer_name"
              value={userName}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="made_by"
              className="block text-sm font-medium text-blue-500"
            >
              Buyer Email
            </label>
            <input
              readOnly
              type="text"
              name="buyer_email"
              defaultValue={userEmail}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-500"
            >
              Food Name:
            </label>
            <input
              readOnly
              type="text"
              name="food_name"
              defaultValue={food_name}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="purchase_date"
              className="block text-sm font-medium text-blue-500"
            >
              Buying Date & Time
            </label>
            <div className="flex">
              <input
                readOnly
                defaultValue={`Purchase Date : ${formattedDate}`}
                type="text"
                className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                readOnly
                defaultValue={`Purchase Time : ${formattedTime}`}
                type="text"
                className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-blue-500"
            >
              Price:
            </label>
            <input
              readOnly
              type="number"
              name="price"
              defaultValue={price}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-blue-500"
            >
              Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue="1"
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              min="1"
              max={quantity}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="btn-wide text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodPurchasePage;
