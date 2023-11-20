import { BiCategoryAlt, BiCurrentLocation } from "react-icons/bi";
import { GiCook } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
//

const OneFoodDetails = () => {
  // const [oldOrderedFood, setOldOrderedFood] = useState();
  const foodDetails = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext) || "";
  const loginName = user?.displayName;
  const loginEmail = user?.email;
  const {
    formattedDate,
    formattedTime,
    description,
    quantityPurchase,
    food_category,
    food_image,
    food_name,
    food_origin,
    made_by,
    price,
    quantity,
    add_by,
    buyer_email,
    userEmail,
    _id,
  } = foodDetails || "";
  console.log(quantity);

  // console.log("buyer_email", buyer_email);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:12002/order-food")
  //     .then((result) => {
  //       setOldOrderedFood(result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // console.log(oldOrderedFood);

  // const matchOldOrderedFood = oldOrderedFood?.filter((food) => food._id == _id);
  // console.log("matchOldOrderedFood", matchOldOrderedFood);

  const handleUpdateFood = () => {
    if (loginEmail == userEmail) {
      return navigate(`/update/${_id}`);
    }
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "You Can't update because you didn't add this Food",
    });
  };

  const handleOrderFood = () => {
    if (loginEmail == userEmail) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "You Can't Buy because you added this Food",
      });
    } else if (quantity == 0) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "You Can't Buy because no more Food available",
      });
    }

    return navigate(`/food-purchase-page/${_id}`);
  };

  return (
    <div className="flex justify-center py-10">
      <Helmet>
        <title>Details - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={food_image}
            alt={food_name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {food_name}
          </h6>
          <div className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <BiCurrentLocation></BiCurrentLocation> {food_origin}
                </div>
                <div className="flex items-center gap-3">
                  <BiCategoryAlt></BiCategoryAlt> {food_category}
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex items-center gap-3">
                  <GiCook></GiCook> {made_by}
                </div>
                <div className="flex items-center gap-3">
                  {buyer_email ? "Bought" : "Available"}
                  <MdProductionQuantityLimits></MdProductionQuantityLimits>
                  {buyer_email ? <> {quantityPurchase} </> : <> {quantity}</>}
                </div>
              </div>
            </div>
            <div className="text-[#795548] font-bold my-5">${price}</div>
          </div>
          {buyer_email && (
            <div className="text-[#486679] font-bold my-5">
              Bought Date {formattedDate} Time {formattedTime}
            </div>
          )}
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>

          {buyer_email == undefined && (
            <>
              <div className="flex justify-between">
                <button
                  onClick={handleUpdateFood}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Update
                  </span>
                </button>
                <button
                  onClick={handleOrderFood}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Order Now
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneFoodDetails;
