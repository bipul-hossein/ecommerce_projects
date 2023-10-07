import React, { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductsProvider";

const CardSecondary = ({ products }) => {
  const { handleAddToLocalStorage, cartItems } = useContext(ProductContext);

  const [addToWhiteList, setAddToWhiteList] = useState(false);
  const [index, setIndex] = useState([]);

  const handleAddToWishList = (i) => {
    setAddToWhiteList(!addToWhiteList);
    if (index.includes(i)) {
      setIndex(index.filter((number) => number !== i));
    } else {
      setIndex([...index, i]);
    }
  };

  return (
    <>
      {products?.slice(0, 10)?.map((data, i) => {
        const isExist = cartItems?.find(
          (item) => item?._id === data?._id
        );

        return (
          <div
            key={i}
            className="group flex flex-col rounded-md justify-between items-start h-auto w-full bg-white p-2 md:p-4 border-[1px] hover:border-[#fa6602] relative"
          >
            <div
              className={`absolute right-2 top-2 z-10 md:hidden md:group-hover:block `}
            >
              <div
                onClick={() => {
                  handleAddToWishList(i);
                  setAddToWhiteList(!addToWhiteList);
                }}
                className="cursor-pointer"
              >
                {index.includes(i) ? (
                  <AiFillHeart
                    className={`w-7 h-7 md:w-9 md:h-9 text-red-500`}
                  />
                ) : (
                  <AiOutlineHeart className="w-7 h-7 md:w-9 md:h-9" />
                )}
              </div>
            </div>
            <div className="mx-auto">
              <div className="overflow-hidden rounded-sm mx-auto border-b-2">
                <Link to={`/product-details/${data?._id}`}>
                  <img
                    className="aspect-square h-32 md:h-44 group-hover:scale-110 duration-700 ease-in-out"
                    src={data?.image}
                    alt=""
                  />
                </Link>
              </div>
              <div className="text-center mx-auto">
                <Link to={`/product-details/${data?._id}`}>
                  <h3 className="text-sm md:text-base font-medium md:font-semibold pt-1 md:py-2">
                   {data?.title}
                  </h3>
                </Link>
                <p className="text-xs font-medium text-gray-500 md:font-semibold py-1 md:tracking-[-.2px]">
                  Flesh
                </p>
                <div className="flex justify-center card-actions items-center my-1">
                  <div className="text-sm whitespace-no-wrap text-[#fa6602] leading-6 font-bold">
                    ৳{data?.price}
                  </div>
                  <div className="text-sm text-[#132a36] opacity-50  line-through pl-1">
                    ৳354
                  </div>
                </div>
                <button
                  onClick={() => handleAddToLocalStorage(data)}
                  disabled={isExist}
                  className={` outline outline-1 py-1 md:py-2 px-2 md:px-3 text-sm rounded-xl md:rounded-3xl duration-500 w-full ${
                    isExist
                      ? "bg-gray-100 text-black"
                      : "cursor-pointer bg-white hover:outline-[#fa6602] hover:bg-[#fa6602] text-black hover:text-white"
                  }`}
                >
                  {isExist ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardSecondary;
