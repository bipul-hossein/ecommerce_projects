import React from "react";
import Banner from "./Banner/Banner";
import LatestProducts from "./LatestPorducts/LatestProducts";
import TopCategories from "./TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="relative my-10 md:max-w-[85%] mx-2 md:mx-auto">
        <TopCategories />
      </div>
      <LatestProducts />
    </div>
  );
};

export default Home;
