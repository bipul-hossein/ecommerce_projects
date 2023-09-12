import React from "react";
import Banner from "./Banner/Banner";
import LatestProducts from "./LatestPorducts/LatestProducts";
import TopProducts from "./TopProducts.js/TopProducts";
import TopCategories from "./TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="relative mb-10 mt-20 md:max-w-[85%] mx-5  md:mx-auto">
      <h2 className="text-xl my-5 font-bold -top-16 absolute -left-3 z-10">Top Categories</h2>
        <TopCategories />
      </div>
      <LatestProducts />
      <TopProducts />
    </div>
  );
};

export default Home;
