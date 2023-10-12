import React, { useState } from "react";
import CreateProduct from "./productsComponents/CreateProduct";
import ProductManager from "./productsComponents/ProductManager";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mt-20 md:mt-4">
      <div className="flex justify-center border-b my-5 md:my-10">
        <p
          onClick={() => setActiveIndex(0)}
          className={`cursor-pointer bg-blue-200 text-xs md:text-base text-center font-semibold px-4 py-2 border-l border-t rounded-l-md ${
             activeIndex === 0 && "bg-blue-400"
           }`}
        >
          Add Product
        </p>
        <p
          onClick={() => setActiveIndex(1)}
          className={`cursor-pointer bg-blue-200 text-xs md:text-base text-center font-semibold px-4 py-2 border border-r-white border-l-white rounded-r-md ${
            activeIndex === 1 && "bg-blue-400"
          }`}
        >
          Manage Products
        </p>
      </div>
      <div className={`${activeIndex === 0 ? "block" : "hidden"}`}>
        <CreateProduct />
      </div>
      <div className={`${activeIndex === 1 ? "block" : "hidden"}`}>
        <ProductManager />
      </div>
    </div>
  );
};

export default Products;
