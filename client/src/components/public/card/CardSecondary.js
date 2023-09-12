import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useCategoryData from "../../../hooks/useCategoryData";

const CardSecondary = () => {
  const [addToWhiteList, setAddToWhiteList] = useState(false);
  const [index, setIndex] = useState([]);
  const [categoryData] = useCategoryData();

  const handleAddToCart = (i) => {
    setAddToWhiteList(!addToWhiteList);
    if (index.includes(i)) {
      setIndex(index.filter((number) => number !== i));
    } else {
      setIndex([...index, i]);
    }
  };

  return (
    <>
      {categoryData?.slice(0, 8)?.map((data, i) => (
        <div
          key={i}
          className="group flex flex-col rounded-md justify-between items-start h-auto w-full bg-white p-2 md:p-4 border-[1px] hover:border-[#fa6602] relative"
        >
          <span
            onClick={() => setAddToWhiteList(!addToWhiteList)}
            className={`absolute right-2 top-2 z-10 hidden group-hover:block `}
          >
            <div onClick={() => handleAddToCart(i)}>
              {index.includes(i) ? (
                <AiFillHeart className={`w-7 h-7 md:w-9 md:h-9 text-red-500`} />
              ) : (
                <AiOutlineHeart className="w-7 h-7 md:w-9 md:h-9" />
              )}
            </div>
          </span>
          <div className="mx-auto">
            <div className=" overflow-hidden rounded-sm mx-auto border-b-2">
              <img
                className="aspect-square h-36 md:h-56"
                src={data?.image}
                alt=""
              />
            </div>
            <div className="text-center mx-auto">
              <p className="text-[14px] md:text-base font-medium md:font-semibold pt-[5px] md:py-2">
                fresh
              </p>
              <h2 className="text-[14px] md:text-base font-medium md:font-semibold py-[5px] md:py-2 md:tracking-[-.2px] ">
                {data?.productName.slice(0, 9)}
              </h2>
              <div className="flex justify-center card-actions items-center my-1 md:my-3">
                <div className="text-[13px] md:text-sm whitespace-no-wrap text-[#fa6602] leading-6 font-bold">
                  ৳545
                </div>
                <div className="text-[13px] md:text-sm text-[#132a36] opacity-50  line-through pl-1">
                  ৳354
                </div>
              </div>
              <p className="bg-white hover:border-none hover:text-white hover:bg-[#fa6602] py-1 md:py-2 px-2 md:px-[14px] text-sm rounded-xl md:rounded-3xl border-black border-[1px] text-black">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSecondary;
