import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductsProvider";

const Card = ({ data }) => {
  const { handleAddToLocalStorage } = useContext(ProductContext);

  return (
    <div className="group flex flex-col rounded-md justify-between w-full bg-white p-2 md:p-4 border-[1px] hover:border-[#fa6602] relative ">
      <div className="mx-auto">
        <div className="absolute rounded-full right-1 md:right-2 top-1 md:top-2 md:uppercase bg-[#fed700] z-10">
          <p className="text-black text-xs md:font-bold py-[6px] md:py-3 px-[2px] md:px-1 ">
            sale!
          </p>
        </div>
        <Link to={`/product-details/${data?.idMeal}`}>
          <div className=" overflow-hidden rounded-sm flex justify-center">
            <img
              className="aspect-square w-36 group-hover:scale-110 duration-700 ease-in-out"
              src={data?.strMealThumb}
              alt=""
            />
          </div>
        </Link>
      </div>
      <h2 className="text-sm md:text-base font-medium md:font-semibold md:tracking-[-.2px] mt-2">
        Lorem ipsum dolor
      </h2>
      <div className="my-2 ">
        <span className="text-xs md:text-sm whitespace-no-wrap text-[#fa6602] leading-6 font-bold">
          ৳545
        </span>
        <span className="ml-2 text-xs md:text-sm text-[#132a36] opacity-50  line-through pl-1">
          ৳354
        </span>
      </div>
      <button
        onClick={() => handleAddToLocalStorage(data)}
        className="bg-primary hover:bg-[#fa6602] py-[4px] md:py-[8px] px-[8px] md:px-[14px] text-[13px] md:text-sm rounded-[4px] md:rounded-md text-white duration-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
