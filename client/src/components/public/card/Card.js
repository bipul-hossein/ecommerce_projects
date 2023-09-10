import React from "react";
import useCategoryData from "../../../hooks/useCategoryData";

const Card = () => {
  const [categoryData] = useCategoryData();
  console.log(categoryData);
  return (
    <>
      {categoryData?.slice(0, 8)?.map((data, i) => (
        <>
          <div
            key={i}
            className="flex flex-col justify-between items-start h-auto w-full bg-white p-4 border-[1px] hover:border-[#fa6602] relative"
          >
            <div>
              <div className="absolute rounded-full right-2 top-2 uppercase bg-[#fed700] ">
                <p className="text-black text-xs font-bold py-3 px-1">sale!</p>
              </div>
              <div className=" overflow-hidden">
                <img className="aspect-square" src={data?.image} alt="" />
              </div>
              <h2 className="text-md font-semibold py-2">
                {data?.productName}
              </h2>
              <div className="card-actions justify-start my-4">
                <div className="text-xl whitespace-no-wrap text-[#fa6602] leading-6 font-bold">
                  ৳535
                </div>
                <div className="text-xl text-[#132a36] opacity-50  line-through pl-1">
                  ৳354
                </div>
              </div>
            </div>
            <button className="bg-primary hover:bg-[#fa6602] p-2 text-sm rounded-md text-white">
              Add to Cart
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default Card;
