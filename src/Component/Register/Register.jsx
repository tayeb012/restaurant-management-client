import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log("handleRegister", name, photoURL, email, password, accepted);
    const userData = {
      name,
      photoURL,
      email,
    };

    if (!accepted) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Accept our terms and conditions",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Password should be at least 6 characters",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Password should contain at least one capital letter",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Password should contain at least one small letter",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (!/[@$!%*?&]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Password should contain at least one special character (@, $, !, %, *, ?, or &)",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Profile updated!
            navigate("/login");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Profile Update",
              showConfirmButton: false,
              timer: 1500,
            });
            // console.log("Profile Update");
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        const url = "/users";
        axiosSecure
          .post(url, userData)
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(user);
        return Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
        // ..
      });
  };

  return (
    <div className="flex  justify-center items-center my-8">
      <Helmet>
        <title>Register - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="text-gray-300 bg-gray-800 md:w-3/4 backdrop-blur-xl rounded-md py-8  lg:w-1/2 mx-auto">
        <h1 className="text-4xl font-semibold text-center">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Enter your photoURL"
              // https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept our terms and conditions</label>
          </div>
          <div className="form-control mt-6">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Register
            </button>
          </div>
        </form>
        <p className="text-[#706F6F] text-center">
          Have An Account ?
          <Link to="/login" className="font-bold text-[#F75B5F]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
