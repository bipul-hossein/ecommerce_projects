import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaArrowAltCircleRight,
  FaPlusCircle,
  FaMinusCircle,
  FaStar,
} from "react-icons/fa";

const ProductDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="my-10 max-w-[1200px] mx-auto">
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
            <h1 className="text-xl md:text-2xl font-semibold">
              {" "}
              Natural Vitamin Ice Cream
            </h1>
            <div className="flex items-center mt-3 mb-5">
              <div className="flex gap-[2px] items-center">
                <FaStar className="text-yellow-500 w-4 h-4" />
                <FaStar className="text-yellow-500 w-4 h-4" />
                <FaStar className="text-yellow-500 w-4 h-4" />
                <FaStar className="text-yellow-500 w-4 h-4" />
                <FaStar className="text-yellow-500 w-4 h-4" />{" "}
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
                  <span className="">
                    <FaMinusCircle className="text-primary w-6 cursor-pointer text-xs h-6" />
                  </span>
                  <span className="px-5">0</span>
                  <span className="">
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
            className={`cursor-pointer text-gray-600 bg-secondary font-semibold p-2 border-l border-t rounded-l-md ${
              activeIndex === 0 ? "bg-white" : ""
            }`}
          >
            Product Details
          </p>
          <p
            onClick={() => setActiveIndex(1)}
            className={`cursor-pointer text-gray-600 font-semibold bg-secondary p-2 border ${
              activeIndex === 1 ? "bg-white" : ""
            }`}
          >
            Additional Information
          </p>
          <p
            onClick={() => setActiveIndex(2)}
            className={`cursor-pointer text-gray-600 font-semibold p-2 border-r bg-secondary border-t rounded-r-md ${
              activeIndex === 2 ? "bg-white" : ""
            }`}
          >
            Ratings & Reviews
          </p>
        </div>
        <div className={`${activeIndex === 0 ? "block" : "hidden"}`}>
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
        <div className={`${activeIndex === 1 ? "block" : "hidden"}`}>
            <h3 className="text-base font-bold my-3">Additional Information</h3>
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
        <div className={`${activeIndex === 2 ? "block" : "hidden"}`}>
            <h3 className="text-base font-bold my-3">Rating & Reviews</h3>
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
      </div>
    </section>
  );
};

export default ProductDetails;
