import React, { useState } from "react";
import RelatedProducts from "./RelatedProducts";
import ProductDetailsTopPart from "./ProductDetailsTopPart";
import RatingsReviews from "./RatingsReviews";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  // window.scrollTo(0, 0);
  const { meals } = useLoaderData()
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="my-10 max-w-[1200px] mx-auto px-2">
      <ProductDetailsTopPart meals={meals}/>
      <div>
        <div className="flex border-b my-10">
          <p
            onClick={() => setActiveIndex(0)}
            className={`cursor-pointer text-gray-600 bg-secondary text-xs md:text-base text-center font-semibold p-2 border-l border-t rounded-l-md ${activeIndex === 0 ? "bg-white" : ""
              }`}
          >
            Ratings & Reviews
          </p>
          <p
            onClick={() => setActiveIndex(1)}
            className={`cursor-pointer text-gray-600 text-xs md:text-base text-center font-semibold bg-secondary p-2 border ${activeIndex === 1 ? "bg-white" : ""
              }`}> Product Detail</p>
          <p
            onClick={() => setActiveIndex(2)}
            className={`cursor-pointer text-gray-600 font-semibold p-2 text-xs md:text-base text-center border-r bg-secondary border-t rounded-r-md ${activeIndex === 2 ? "bg-white" : ""
              }`}
          >Additional Information </p>
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
        <RatingsReviews className={`${activeIndex === 0 ? "block" : "hidden"}`} />
      </div>
      <RelatedProducts meals={meals}/>
    </section>
  );
};

export default ProductDetails;
