import React, { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaArrowAltCircleRight,
  FaMinusCircle,
  FaPlusCircle,
  FaStar,
} from "react-icons/fa";
import { ProductContext } from "../../../../contexts/ProductsProvider";

const DetailsTopSection = ({ product }) => {
  const { handleAddToLocalStorage } = useContext(ProductContext);
  const [count, setCount] = useState(0);
  return (
    <div className="md:flex gap-10 justify-center">
      <div className="md:w-1/2 bg-secondary">
        <img
          className="w-full"
          // src="https://themebeyond.com/pre/ganic-prev/ganic-live/img/product/shop_details_img01.jpg"
          src={product?.strMealThumb}
          alt=""
        />
      </div>
      <div className="md:w-1/2">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold mt-2 md:mt-0">
            {product?.strMeal}
          </h1>
          <div className="flex items-center my-2 md:my-4">
            <div className="flex gap-[2px] items-center">
              <FaStar className="text-yellow-400 w-4 h-4" />
              <FaStar className="text-yellow-400 w-4 h-4" />
              <FaStar className="text-yellow-400 w-4 h-4" />
              <FaStar className="text-yellow-400 w-4 h-4" />
              <FaStar className="text-yellow-400 w-4 h-4" />{" "}
              <span className="text-sm text-gray-500 ml-1">(4.9)</span>
            </div>
          </div>
          <p className="text-xl font-bold text-gray-600">
            $9.99 <span className="text-xs text-green-500">- IN STOCK</span>
          </p>
          <p className="my-5 text-sm text-gray-600 leading-6">
            Organic food is food produced by methods complying with the
            standards of Rrganic farming. Standards vary Lorem ipsum dolor sit
            amet, consectetur adipiscing worldwide, but organic farming.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <FaArrowAltCircleRight className="w-3 h-3 text-green-500" />
              <span className="text-xs text-gray-700">Type : Ice Cream</span>
            </div>
            <div className="flex items-center gap-1">
              <FaArrowAltCircleRight className="w-3 h-3 text-green-500" />
              <span className="text-xs text-gray-700">XPD : Aug 19.2021</span>
            </div>
            <div className="flex items-center gap-1">
              <FaArrowAltCircleRight className="w-3 h-3 text-green-500" />
              <span className="text-xs text-gray-700">CO : Ganic</span>
            </div>
          </div>
          <div className="my-8">
            <div className="flex gap-2">
              <div className="flex gap-2 justify-between items-center p-2 rounded-3xl bg-secondary">
                <span onClick={() => setCount(count - 1)}>
                  <FaMinusCircle className="text-primary w-6 cursor-pointer text-xs h-6" />
                </span>
                <span className="px-5">{count}</span>
                <span onClick={() => setCount(count + 1)}>
                  <FaPlusCircle className="text-primary w-6 cursor-pointer text-xs h-6" />
                </span>
              </div>
              <button
                onClick={() => handleAddToLocalStorage(product)}
                className="py-1 px-4 text-sm font-semibold text-white rounded-3xl bg-primary hover:bg-secondary hover:text-gray-700"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="my-2 flex gap-1 border-b pb-3 items-center">
            <AiOutlineHeart />{" "}
            <span className="text-sm font-semibold">Add To Whitelist</span>
          </div>
          <p className="text-gray-600 text-sm mt-3">CATEGORIES: NATURAL FOOD</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsTopSection;
