import React from "react";
import DetailsTopSection from "./DetailsTopSection/DetailsTopSection";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  window.scrollTo(0, 0);
  const product = useLoaderData()?.meals[0];
  
  return (
    <section className="my-10 max-w-[1200px] mx-auto px-2">
      {/* DetailsPage top section */}
      <DetailsTopSection product={product}/>
      {/*Ratings and Reviews */}
      <RatingsAndReviews />
      {/* Related Products */}
      <RelatedProduct />
    </section>
  );
};

export default ProductDetails;
