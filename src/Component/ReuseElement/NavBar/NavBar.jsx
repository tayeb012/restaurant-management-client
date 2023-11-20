import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Dropdown } from "keep-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext) || "";
  const userEmail = user?.email;

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful.");
        return Swal.fire({
          position: "center",
          icon: "success",
          title: "SIGN OUT SUCCESSFULLY",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FFFFFF] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FFFFFF] underline" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFood"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FFFFFF] underline" : ""
          }
        >
          All Food
        </NavLink>
      </li>
    </>
  );

  const avatar = (
    <img
      className="relative inline-block h-6 w-6 rounded-md object-cover object-center border border-red-300"
      alt="User Avatar"
      src={user?.photoURL}
    />
  );

  return (
    <div>
      <div className="dark:bg-gray-900 text-[#DDE4E6] hover:text-[#FFFFFF] hover:text-scale-105 px-6 sm:px-10 py-2 relative">
        <div className=" flex justify-between items-center">
          <h1 className="flex text-lg sm:text-2xl text-[#DDE4E6] font-bold">
            <img
              className="w-8"
              src="https://t3.ftcdn.net/jpg/05/22/67/88/240_F_522678817_aZX0WdD2uJPa7WKiU1VoGvq7LcX4XLrx.webp"
              alt="logo"
            />
            SavorSphere Eatery
          </h1>
          <div className="flex">
            <ul
              className={`z-20 absolute duration-12002
            
            ${open ? "top-12" : "-top-60"}
            right-6
              p-4 bg-[#F7E7CE] md:bg-transparent md:static flex flex-col md:flex-row gap-3 rounded-md sm:gap-8 list-none`}
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            {user ? (
              <>
                <Dropdown
                  label={avatar}
                  size="sm"
                  type="primary"
                  dismissOnClick={true}
                  arrowIcon={false}
                >
                  <Dropdown.Item className="bg-gray-700 hover:bg-slate-400">
                    <NavLink
                      to="/my-added-food"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#FFFFFF] underline"
                          : ""
                      }
                    >
                      My added food items
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-gray-700 hover:bg-slate-400">
                    <NavLink
                      to="/add-food"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#FFFFFF] underline"
                          : ""
                      }
                    >
                      Add a food item
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-gray-700 hover:bg-slate-400">
                    <NavLink
                      to="/my-order-food"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#FFFFFF] underline"
                          : ""
                      }
                    >
                      My ordered food items
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown>

                <button
                  onClick={handleSignOut}
                  className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  SIGN OUT
                </button>
              </>
            ) : (
              <>
                <FaRegUserCircle className="text-3xl"></FaRegUserCircle>
                <Link to="/login">
                  <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    SING IN
                  </button>
                </Link>
              </>
            )}
            <div
              className="text-4xl md:hidden z-40"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <RiCloseCircleLine></RiCloseCircleLine>
              ) : (
                <BiMenuAltRight></BiMenuAltRight>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
