import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UpdateOneFood = () => {
  const { user } = useContext(AuthContext) || "";
  const axiosSecure = useAxiosSecure();
  const userName = user?.displayName;
  const userEmail = user?.email;
  const foodDetails = useLoaderData();
  const navigate = useNavigate();
  console.log(foodDetails);

  const {
    description,
    food_category,
    food_image,
    food_name,
    food_origin,
    made_by,
    price,
    quantity,
    _id,
  } = foodDetails || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const food_image = e.target.food_image.value;
    const food_name = e.target.food_name.value;
    const food_origin = e.target.food_origin.value;
    const food_category = e.target.food_category.value;
    const price = e.target.price.value;
    const description = e.target.shortDescription.value;
    const made_by = e.target.made_by.value;
    const add_by = e.target.add_by.value;
    const quantity = e.target.quantity.value;

    const updateFoodValue = {
      food_image,
      food_name,
      food_origin,
      food_category,
      price,
      description,
      made_by,
      add_by,
      quantity,
    };

    console.log(updateFoodValue);

    const url = `all-food/id/${_id}`;

    // add product to server site
    axiosSecure
      .put(url, updateFoodValue)
      .then((card) => {
        console.log(card.data.modifiedCount);
        if (card.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update product SUCCESSFULLY",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/my-added-food");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className=" flex justify-center ">
      <Helmet>
        <title>Update Your Food - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="p-4 w-3/5">
        <h2 className="text-2xl font-semibold text-center text-pink-200 mb-4">
          Update Food
        </h2>
        <form onSubmit={handleSubmit} className=" p-4 rounded shadow-md">
          <div className="mb-4">
            <label
              htmlFor="add_by"
              className="block text-sm font-medium text-blue-500"
            >
              Add By
            </label>
            <input
              readOnly
              type="text"
              name="add_by"
              value={userName}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-blue-500"
            >
              Food Image:
            </label>
            <input
              type="text"
              name="food_image"
              defaultValue={food_image}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="made_by"
              className="block text-sm font-medium text-blue-500"
            >
              Made By:
            </label>
            <input
              type="text"
              name="made_by"
              defaultValue={made_by}
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
              type="text"
              name="food_name"
              defaultValue={food_name}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="food_origin"
              className="block text-sm font-medium text-blue-500"
            >
              Food Origin (Country)
            </label>
            <input
              type="text"
              name="food_origin"
              defaultValue={food_origin}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="food_category"
              className="block text-sm font-medium text-blue-500"
            >
              Food Category:
            </label>
            <select
              name="food_category"
              defaultValue={food_category}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            >
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
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-blue-500"
            >
              Price:
            </label>
            <input
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
              defaultValue={quantity}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="shortDescription"
              className="block text-sm font-medium text-blue-500"
            >
              Short Description:
            </label>
            <textarea
              name="shortDescription"
              defaultValue={description}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="btn-wide text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateOneFood;
