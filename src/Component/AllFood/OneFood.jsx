import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineSell, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

const OneFood = ({ oneFood, handleDelete, soldValue }) => {
  // console.log(oneFood);
  const {
    _id,
    food_name,
    food_image,
    food_category,
    price,
    quantity,
    buyer_email,
    sold,
  } = oneFood || "";

  // console.log("buyer_email", buyer_email);
  return (
    <div className="relative  my-7 flex flex-col rounded-xl bg-[#FFFFFF] hover:bg-[#F2F2F2] hover:scale-105 duration-150 bg-clip-border shadow-md">
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img className="h-full w-full" src={food_image} layout="fill" />
      </div>
      <div className="p-6">
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
          {food_name}
        </h6>
        <div className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <BiCategoryAlt></BiCategoryAlt> {food_category}
              </div>

              <div className="flex items-center gap-3">
                {buyer_email ? (
                  <>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Cancel Order
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <MdProductionQuantityLimits /> {quantity}
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex items-center ">
                <MdOutlineSell className="rotate-90" />{" "}
                <span className="text-3xl font-bold text-center bg-gradient-to-r from-[#4C53E8] to-[#04B1F3] text-transparent bg-clip-text">
                  {" "}
                  {sold}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center  p-6 pt-0">
        {buyer_email ? (
          <>
            <Link to={`/Order-food/details/${_id}`}>
              <button
                className=" select-none  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  text-center me-2 mb-2 bg-[#3498DB] py-3 px-6  align-middle font-sans text-xs font-bold uppercase text-[#FFFFFF] hover:text-[#ECF0F1] shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[] duration-300"
                type="button"
                data-ripple-light="true"
              >
                <span className="flex gap-1">
                  <span> {buyer_email ? "Bought" : "Available"}</span>
                  <span> Details</span>
                </span>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={`/details/${_id}`}>
              <button
                className=" select-none  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  text-center me-2 mb-2 bg-[#3498DB] py-3 px-6  align-middle font-sans text-xs font-bold uppercase text-[#FFFFFF] hover:text-[#ECF0F1] shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[] duration-300"
                type="button"
                data-ripple-light="true"
              >
                Food Details
              </button>
            </Link>
          </>
        )}

        <p className="text-[#795548] text-2xl font-bold">${price}</p>
      </div>
    </div>
  );
};

export default OneFood;
