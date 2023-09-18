import React from "react";
import BannerSwiper from "./bannerSwiper/BannerSwiper";
import useMainCategories from "../../../../hooks/useMainCategories";
import { Link } from "react-router-dom";

const Banner = () => {
  const [mainCategories] = useMainCategories();

  return (
    <div className="my-4 flex gap-5 md:max-w-[1300px] md:mx-auto">
      <div className="w-[250px] border py-2 px-4 rounded-md hidden md:block">
        <h2 className="text-xl font-bold my-2">All Categories</h2>
        {mainCategories?.slice(0, 7)?.map((menu, i) => (
          <Link key={i} to="product-category">
            <div className={`flex items-center gap-2 my-3 ${i === 6 ? "border-none" : "border-b pb-3"
                } py-2`}
            >
              <img className="w-6 h-6" src={menu?.strCategoryThumb} alt="" />
              <span className="text-gray-600 text-sm hover:text-primary">{menu?.strCategory}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full md:w-[80%] relative py-8 md:py-0 md:h-[60vh] flex justify-center items-center bg-secondary rounded-md">
        <BannerSwiper />
      </div>
    </div>
  );
};

export default Banner;
