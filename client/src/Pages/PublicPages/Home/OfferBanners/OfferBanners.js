import React from "react";
import food1 from "../../../../Images/food1.jpg";
import food2 from "../../../../Images/food2.jpg";
import food3 from "../../../../Images/food3.jpg";

const OfferBanners = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center my-10">
      <div
        className="relative hover:scale-105 duration-1000"
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="absolute top-8 left-3">
          <p className="font-bold text-xs mb-2">Healthy Food</p>
          <h2 className="font-bold">
            100 ORGANIC <br /> UP TO 35%
          </h2>
          <button className="mt-3 p-2 rounded-md bg-white text-yellow-500 font-bold text-xs">
            Shop Now
          </button>
        </div>
        <img className="w-full md:w-[350px] md:h-[200px] rounded-md" src={food1} alt="" />
      </div>
      <div
        className="relative hover:scale-105 duration-1000"
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="absolute top-8 left-3">
          <p className="font-bold text-xs mb-2">Healthy Food</p>
          <h2 className="font-bold">
            HEALTHY FOOD <br /> HYGIENICALLY PACKED
          </h2>
          <button className="mt-3 p-2 rounded-md bg-white text-yellow-500 font-bold text-xs">
            Shop Now
          </button>
        </div>
        <img className="w-full md:w-[350px] md:h-[200px] rounded-md" src={food2} alt="" />
      </div>
      <div
        className="relative hover:scale-105 duration-1000"
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="absolute top-8 left-3">
          <p className="font-bold text-xs mb-2">Healthy Food</p>
          <h2 className="font-bold">
            BABY FAVORITE
            <br />
            UP TO 15%
          </h2>
          <button className="mt-3 p-2 rounded-md bg-white text-yellow-500 font-bold text-xs">
            Shop Now
          </button>
        </div>
        <img className="w-full md:w-[350px] md:h-[200px] rounded-md" src={food3} alt="" />
      </div>
    </div>
  );
};

export default OfferBanners;
