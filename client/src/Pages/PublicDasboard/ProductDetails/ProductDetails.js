import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaArrowAltCircleRight,
  FaPlusCircle,
  FaMinusCircle,
  FaStar,
  FaStarHalfAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import useCategoryData from "../../../hooks/useCategoryData";
import CardExternal from "../../../components/public/card/CardExternal";

const ProductDetails = () => {
  window.scrollTo(0, 0);
  const [categoryData] = useCategoryData();
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <section className="my-10 max-w-[1200px] mx-auto px-2">
      <div className="md:flex gap-10 justify-center">
        <div className="md:w-1/2 bg-secondary">
          <img
            className="w-full"
            src="https://themebeyond.com/pre/ganic-prev/ganic-live/img/product/shop_details_img01.jpg"
            alt=""
          />
       
        </div>
        <div className="md:w-1/2">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold mt-2 md:mt-0">
              {" "}
              Natural Vitamin Ice Cream
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
                  <span onClick={()=> setCount(count - 1)}>
                    <FaMinusCircle className="text-primary w-6 cursor-pointer text-xs h-6" />
                  </span>
                  <span className="px-5">{count}</span>
                  <span onClick={()=> setCount(count + 1)}>
                    <FaPlusCircle className="text-primary w-6 cursor-pointer text-xs h-6" />
                  </span>
                </div>
                <button className="py-1 px-4 text-sm font-semibold text-white rounded-3xl bg-primary hover:bg-secondary hover:text-gray-700">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="my-2 flex gap-1 border-b pb-3 items-center">
              <AiOutlineHeart />{" "}
              <span className="text-sm font-semibold">Add To Whitelist</span>
            </div>
            <p className="text-gray-600 text-sm mt-3">
              CATEGORIES: NATURAL FOOD
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex border-b my-10">
          <p
            onClick={() => setActiveIndex(0)}
            className={`cursor-pointer text-gray-600 bg-secondary text-xs md:text-base text-center font-semibold p-2 border-l border-t rounded-l-md ${
              activeIndex === 0 ? "bg-white" : ""
            }`}
          >
            Ratings & Reviews
          </p>
          <p
            onClick={() => setActiveIndex(1)}
            className={`cursor-pointer text-gray-600 text-xs md:text-base text-center font-semibold bg-secondary p-2 border ${
              activeIndex === 1 ? "bg-white" : ""
            }`}
          >
            Product Details
          </p>
          <p
            onClick={() => setActiveIndex(2)}
            className={`cursor-pointer text-gray-600 font-semibold p-2 text-xs md:text-base text-center border-r bg-secondary border-t rounded-r-md ${
              activeIndex === 2 ? "bg-white" : ""
            }`}
          >
            Additional Information
          </p>
        </div>
        {/* Product Details section */}
        <div className={`${activeIndex === 1 ? "block" : "hidden"}`}>
          <h3 className="text-base font-bold my-3">Product Details</h3>
          <p className="text-sm text-gray-500 leading-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus viverra nulla ut metus varius laoreet.
          </p>
        </div>
        {/* Additional Information section */}
        <div className={`${activeIndex === 2 ? "block" : "hidden"}`}>
          <h3 className="text-base font-bold my-3">Additional Information</h3>
          <p className="text-sm text-gray-500 leading-6">
            <ul className="list-disc ml-4">
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
              <li>feature 4</li>
              <li>feature 5</li>
            </ul>
          </p>
        </div>
        {/* Ratings & Reviews section */}
        <div className={`${activeIndex === 0 ? "block" : "hidden"}`}>
          <h3 className="text-base font-bold my-3">Rating & Reviews</h3>
          <div className=" flex flex-col md:flex-row gap-4 md:gap-20 max-w-2xl">
            <div>
              <h1 className="text-3xl font-semibold">
                4.5
                <span className="text-xl font-semibold text-gray-500">/5</span>
              </h1>
              <div className="flex my-2">
                <FaStar className="w-7 h-7 text-yellow-400 mr-1" />
                <FaStar className="w-7 h-7 text-yellow-400 mr-1" />
                <FaStar className="w-7 h-7 text-yellow-400 mr-1" />
                <FaStar className="w-7 h-7 text-yellow-400 mr-1" />
                <FaStarHalfAlt className="w-7 h-7 text-yellow-400 mr-1" />
              </div>
              <p className="text-sm mt-2 text-gray-600">41 Ratings</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div className="flex gap-[2px]">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                </div>
                <div className="w-[150px] h-3 bg-secondary">
                  <p className="w-[80%] h-3 bg-yellow-400"></p>
                </div>
                <p className="text-xs">24</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex gap-[2px]">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                </div>
                <div className="w-[150px] h-3 bg-secondary">
                  <p className="w-[40%] h-3 bg-yellow-400"></p>
                </div>
                <p className="text-xs">12</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex gap-[2px]">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                </div>
                <div className="w-[150px] h-3 bg-secondary">
                  <p className="w-[13%] h-3 bg-yellow-400"></p>
                </div>
                <p className="text-xs">4</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex gap-[2px]">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                </div>
                <div className="w-[150px] h-3 bg-secondary">
                  <p className="w-[5%] h-3 bg-yellow-400"></p>
                </div>
                <p className="text-xs">1</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex gap-[2px]">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                  <FaStar className="text-gray-300 w-4 h-4" />
                </div>
                <div className="w-[150px] h-3 bg-secondary">
                  <p className="w-[0%] h-3 bg-yellow-400"></p>
                </div>
                <p className="text-xs">0</p>
              </div>
            </div>
          </div>
          <div className="my-8 max-w-4xl">
            <p className="mb-3 max-w-300px text-sm bg-gray-100 p-2">Customer Reviews</p>
            <div className="p-2 flex flex-col gap-4">
            <div>
              <div className="flex justify-between">
              <p className="text-sm font-bold">Jubayer Ahmed</p>
              <p className="text-xs text-gray-500">16 Sep 2023</p>
              </div>
              <div className="flex gap-[2px] items-center my-1">
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
              </div>
              <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quo nobis error reiciendis nam ab, fugiat quasi enim nulla velit, odio, aliquam placeat nihil</p>
            </div>
            <div>
            <div className="flex justify-between">
            <p className="text-sm font-bold">Bipul Hossain</p>
              <p className="text-xs text-gray-500">16 Sep 2023</p>
              </div>
              
              <div className="flex gap-[2px] items-center my-1">
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-gray-300 w-3 h-3" />
              </div>
              <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <div className="flex justify-between">
              <p className="text-sm font-bold">Md Abdullah</p>
              <p className="text-xs text-gray-500">16 Sep 2023</p>
              </div>
              
              <div className="flex gap-[2px] items-center my-1">
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-yellow-400 w-3 h-3" />
                <FaStar className="text-gray-300 w-3 h-3" />
                <FaStar className="text-gray-300 w-3 h-3" />
              </div>
              <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quo nobis error reiciendis nam ab, fugiat quasi enim nulla velit, odio, aliquam placeat nihil um, dolor sit amet consectetur adipisicing elit. At quo nobis error reiciendis nam ab, fugiat quasi enim nulla velit, odio, aliquam placeat nihil</p>
            </div>
            </div>
            <div className="flex gap-1 justify-end items-center mt-4">
            <span className="w-8 text-center p-1 bg-gray-200 h-8 flex items-center justify-center"><FaArrowLeft className="text-gray-500"/></span>
              <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">1</span>
              <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">2</span>
              <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">3</span>
              <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">...</span>
              <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">10</span>
              <span className="w-8 text-center p-1 bg-gray-200 h-8 flex items-center justify-center"><FaArrowRight className="text-gray-500"/></span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
          <h2 className="text-base md:text-xl border-b pb-2 font-bold my-2">Related products</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {
              categoryData?.slice(0, 5)?.map(data => (<CardExternal key={data?._id} data={data}/>))
            }
            </div>
      </div>
    </section>
  );
};

export default ProductDetails;
