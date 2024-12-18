import React from "react";
import product_icon from "../../../../Images/product_icon.jpeg";
import LatestProductSlider from "./LatestProductSlider";

const LatestProducts = () => {
  return (
    <div className="pt-10 md:pt-14 md:mx-auto">
      <h2 className="text-base first:font-bold md:hidden">
        Latest Products
      </h2>
      <div
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
        className="mt-0 pb-3 md:py-3 rounded-md md:my-[50]"
      >
        <div className="md:flex p-2 md:px-4 md:py-10">
          <div className="hidden md:block pt-5 mb-6 md:mb-0 md:w-1/5 text-center">
            <div className="rounded-full flex justify-center">
              <img className="" src={product_icon} alt="" />
            </div>
            <h2 className="md:text-xl font-semibold text-center">
              Latest Products
            </h2>
            <p className="text-sm mt-3 md:mt-4 md:px-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum
              dolor sit amet, consectetur adipisicing elit
            </p>
          </div>
          <div className="relative md:mt-4 gap-2 md:w-4/5 md:gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LatestProductSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
