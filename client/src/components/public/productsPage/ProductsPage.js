import React, { useState } from "react";
import Card from "../card/Card";
import { BiMenuAltLeft } from "react-icons/bi";
import useCategoryData from "../../../hooks/useCategoryData";

const ProductsPage = ({products,categoryName}) => {
    window.scrollTo(0, 0);
  const [filterSidebar, setFilterSidebar] = useState(false);
  const [categoriesItem] = useCategoryData();
  // console.log(categoriesItem);
  return (
    <div className="my-10 md:flex gap-2 md:gap-4 w-full mx-auto">
      <div className="md:w-1/5 bg-slate-50 border-[1px] rounded-md">
        {/* sidebar filtering start*/}
        <div
          onClick={() => setFilterSidebar(false)}
          className={`w-full h-screen fixed md:static md:hidden z-20 bg-gray-200 ${
            filterSidebar ? "left-0 bg-opacity-50" : "bg-opacity-0 left-[100%]"
          }`}
        ></div>
        <div
          className={`w-[90%] fixed z-30 md:static bg-slate-50 duration-1000 top-[60px] ${
            filterSidebar ? "left-[20%]" : "left-[120%]"
          }`}
        >
          <span
            onClick={() => setFilterSidebar(false)}
            className="absolute top-0 -left-[50px] bg-slate-200 rounded-l-md text-black py-[10px] px-5 text-xl md:hidden"
          >
            x
          </span>
          <div className=" bg-slate-50  py-3 pl-3 rounded-md">
            <h3 className="text-[14px] uppercase font-semibold pb-2 border-b-[1px]">
              PRODUCT CATEGORIES
            </h3>
            <div className="py-2">
              {categoriesItem?.map((categoryName) => (
                <div className="flex gap-2 text-sm font-semibold py-2">
                  {" "}
                  <input type="checkbox" id="instock" />
                  <label htmlFor="instock">{categoryName?.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className=" bg-slate-50  py-3 pl-3 rounded-md">
            <h3 className="text-[14px] uppercase font-bold pb-2 border-b-[1px]">
              Availability
            </h3>
            <div className="py-2">
              <div className="flex gap-2 text-sm font-semibold py-2">
                {" "}
                <input type="checkbox" id="instock" />
                <label htmlFor="instock">In Stock</label>
              </div>
              <div className="flex gap-2 text-sm font-semibold py-2">
                {" "}
                <input type="checkbox" id="preorder" />
                <label htmlFor="preorder">Pre Order</label>
              </div>
              <div className="flex gap-2 text-sm font-semibold py-2">
                {" "}
                <input type="checkbox" id="upcomming" />
                <label htmlFor="upcomming">Up Coming </label>
              </div>
            </div>
          </div>
          <div className="mt-2 bg-slate-50 py-3 pl-3 rounded-md">
            <h3 className="text-[14px] uppercase font-bold pb-2 border-b-[1px]">
              Filter By Weight
            </h3>
            <div className="py-2">
              <div className="flex gap-2 text-sm font-semibold py-2">
                <input type="checkbox" id="250g" />
                <label htmlFor="250g">250 G</label>
              </div>
              <div className="flex gap-2 text-sm font-semibold py-2">
                <input type="checkbox" id="500g" />
                <label htmlFor="500g">500 G</label>
              </div>
              <div className="flex gap-2 text-sm font-semibold py-2">
                <input type="checkbox" id="01g" />
                <label htmlFor="01g">01 KG</label>
              </div>
              <div className="flex gap-2 text-sm font-semibold py-2">
                <input type="checkbox" id="1.5g" />
                <label htmlFor="1.5g">1.5 KG</label>
              </div>
              <div className="flex gap-2 text-sm font-semibold py-2">
                <input type="checkbox" id="02kg" />
                <label htmlFor="02kg">02 KG</label>
              </div>
              <div className="flex gap-2 text-sm font-semibold py-2">
                <input type="checkbox" id="05kg" />
                <label htmlFor="05kg">05 KG</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar filtering end */}

      <div className="w-full md:w-4/5">
        <h3 className="text-xl text-center font-bold text-gray-600 my-2 md:hidden">
          {categoryName}
        </h3>

        {/* price filter start */}
        <div className="bg-slate-50 border-[1px] p-[10px] flex justify-between mb-5 rounded-md">
          <h3 className="hidden md:block text-xl font-bold pl-2">
            {categoryName}
          </h3>
          <div
            onClick={() => setFilterSidebar(true)}
            className="flex items-center gap-1 md:hidden px-2 rounded bg-slate-200"
          >
            <BiMenuAltLeft className=" h-6 w-6 font-bold" />
            <p className="font-light text-sm text-black">Filter</p>
          </div>
          <div className="flex">
            <div className="flex items-center pr-2">
              <label
                for="price-select"
                className="px-1 text-xs md:text-sm font-semibold opacity-80"
              >
                Short By:{" "}
              </label>
              <select
                name="price"
                id="price-select"
                className="bg-slate-200 w-24 md:w-auto text-xs md:text-sm px-1 py-[6px] rounded"
              >
                <option value="">Default</option>
                <option value="">Price (Low - High)</option>
                <option value="">Price (High - Low)</option>
              </select>
            </div>
          </div>
        </div>
        {/* filter end */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {products?.map((product, index) => (
            <Card key={index} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
