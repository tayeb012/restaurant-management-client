import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "https://resturant-managment-server-psi.vercel.app",
  withCredentials: true,
});

// jkhsdalkfjljasdf
const useAxiosSecure = () => {
  const { user, logOut } = useContext(AuthContext) || "";
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error track in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              console.log("Sign-out successful.");
              navigate("/login");
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
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
