import React from "react";
import Banner from "./Banner/Banner";
import LatestProducts from "./LatestPorducts/LatestProducts";
import TopProducts from "./TopProducts.js/TopProducts";
import TopCategories from "./TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopCategories/>      
      <LatestProducts />
      <TopProducts />
    </div>
  );
};

export default Home;
