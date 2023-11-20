import React from "react";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet-async";
import ChefSpecials from "./ChefSpecials/ChefSpecials";
import LocalFlavor from "./LocalFlavor/LocalFlavor";
import TopSaleFood from "./TopSaleFood/TopSaleFood";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Banner></Banner>
      <TopSaleFood></TopSaleFood>
      <ChefSpecials></ChefSpecials>
      <LocalFlavor></LocalFlavor>
    </div>
  );
};

export default Home;
