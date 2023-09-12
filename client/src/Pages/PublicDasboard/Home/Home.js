import React from "react";
import MainFacilities from "../../../components/public/mainFacilities/MainFacilities";
import Banner from "./Banner/Banner";
import LatestProducts from "./LatestPorducts/LatestProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <MainFacilities />
      <LatestProducts />
    </div>
  );
};

export default Home;
