import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const TopSellingAndTrending = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const deviceWidth = window.innerWidth;

  return (
    <section className="bg-[#e7edf0] p-5 my-10 rounded-md">
      <div className="py-2 md:w-[80%] mx-auto">
        <div className="flex justify-evenly outline outline-1 rounded-sm">
          <p
            onClick={() => setActiveIndex(1)}
            className={`p-2 w-full cursor-pointer text-center ${
              activeIndex === 1 ? "bg-blue-400 text-white" : ""
            }`}
          >
            Top Selling
          </p>
          <p
            onClick={() => setActiveIndex(2)}
            className={`p-2 w-full outline outline-1 cursor-pointer text-center ${
              activeIndex === 2 ? "bg-blue-400 text-white" : ""
            }`}
          >
            Trending
          </p>
          <p
            onClick={() => setActiveIndex(3)}
            className={`p-2 w-full cursor-pointer text-center ${
              activeIndex === 3 ? "bg-blue-400 text-white" : ""
            }`}
          >
            Top Rated
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 mt-3 mx-2">
            {Array.from({ length: deviceWidth < 768 ? 5 : 9 }, () => (
              <div className="flex gap-3 border rounded-md p-1">
                <div>
                  <img
                    className="w-20"
                    src="https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-2-1.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p>Natural Style Chicken</p>
                  <span className="flex my-1">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <p className="text-gray-400 text-xs ml-2">3</p>
                  </span>
                  <div className="flex gap-2 items-center">
                    <p className="text-xs whitespace-no-wrap text-[#fa6602] leading-6 font-bold">
                      ৳345
                    </p>
                    <p className="text-xs text-[#132a36] opacity-50  line-through pl-1">
                      ৳454
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellingAndTrending;
