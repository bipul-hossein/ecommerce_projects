import React from "react";
import MainFacilities from "../../../components/public/mainFacilities/MainFacilities";
import Banner from "./Banner/Banner";
import LatestProducts from "./LatestPorducts/LatestProducts";
import TopProducts from "./TopProducts.js/TopProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <MainFacilities />
      <LatestProducts />
      <TopProducts />
    </div>
  );
};

export default Home;
