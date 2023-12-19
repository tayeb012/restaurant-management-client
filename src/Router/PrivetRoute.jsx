import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CircleLoader } from "react-spinners";
// import { Spinner } from "@material-tailwind/react";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        {/* <Spinner className="h-96 w-96 my-12 text-[#1575C9]" /> */}
        <CircleLoader color="#36d7b7" size={250} />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;
