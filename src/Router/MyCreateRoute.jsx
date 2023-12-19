import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Component/Home/Home";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";
import AllFood from "../Component/AllFood/AllFood";
import AddFood from "../Component/AddFood/AddFood";
import OneFoodDetails from "../Component/AllFood/OneFoodDetails";
import UpdateOneFood from "../Component/AllFood/UpdateOneFood";
import MyAddedFood from "../Component/MyAddedFood/MyAddedFood";
import MyOrderFood from "../Component/MyOrderFood/MyOrderFood";
import PrivetRoute from "./PrivetRoute";
import FoodPurchasePage from "../Component/FoodPurchasePage/FoodPurchasePage";
import Blog from "../Component/Blog/Blog";

const MyCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/add-food",
        element: (
          <PrivetRoute>
            <AddFood></AddFood>
          </PrivetRoute>
        ),
      },
      {
        path: "/food-purchase-page/:id",
        element: (
          <PrivetRoute>
            <FoodPurchasePage></FoodPurchasePage>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resturant-managment-server-psi.vercel.app/all-food/id/${params.id}`
          ),
      },
      {
        path: "/my-order-food",
        element: (
          <PrivetRoute>
            <MyOrderFood></MyOrderFood>
          </PrivetRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://resturant-managment-server-psi.vercel.app/order-food/${params.userEmail}`),
      },
      {
        path: "/my-added-food",
        element: (
          <PrivetRoute>
            <MyAddedFood></MyAddedFood>
          </PrivetRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://resturant-managment-server-psi.vercel.app/my-added-food/${params.userEmail}`),
      },
      {
        path: "/allFood",
        element: <AllFood></AllFood>,
        loader: () =>
          fetch("https://resturant-managment-server-psi.vercel.app/all-food"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <OneFoodDetails></OneFoodDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resturant-managment-server-psi.vercel.app/all-food/id/${params.id}`
          ),
      },
      {
        path: "/Order-food/details/:id",
        element: (
          <PrivetRoute>
            <OneFoodDetails></OneFoodDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resturant-managment-server-psi.vercel.app/Order-food/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdateOneFood></UpdateOneFood>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resturant-managment-server-psi.vercel.app/all-food/id/${params.id}`
          ),
      },
    ],
  },
]);

export default MyCreateRoute;
