import React from "react";
import Categories from "./Categories";
import BannerSwiper from "./bannerSwiper/BannerSwiper";

const Banner = () => {
  return (
    <div className="flex gap-5 md:mx-auto">
      <Categories />
      <div className="w-full md:w-[80%] relative flex justify-center items-center bg-secondary rounded-md">
        <BannerSwiper />
      </div>
    </div>
  );
};

export default Banner;
