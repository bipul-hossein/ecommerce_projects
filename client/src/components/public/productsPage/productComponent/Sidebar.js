import React from "react";
import useCategoryData from "../../../../hooks/useCategoryData";

const Sidebar = ({filterSidebar, setFilterSidebar,handleChange}) => {
    const [categoriesItem] = useCategoryData();
    // console.log(categoriesItem);

  return (
    <div className="md:w-1/5 bg-slate-50 border-[1px] rounded-md">
      {/*Mobile sidebar filtering start*/}
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
                <input type="checkbox" id={categoryName?.slug} />
                <label htmlFor={categoryName?.slug}>
                  {categoryName?.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className=" bg-slate-50  py-3 pl-3 rounded-md">
          <h3 className="text-[14px] uppercase font-bold pb-2 border-b-[1px]">
            Availability
          </h3>
          <div className="py-2">
            <div className="flex gap-2 text-sm font-semibold py-2">
              {" "}
              <input
                onChange={handleChange}
                type="checkbox"
                id="instock"
                value="instock"
                name="instock"
              />
              <label htmlFor="instock">In Stock</label>
            </div>
            <div className="flex gap-2 text-sm font-semibold py-2">
              {" "}
              <input
                onChange={handleChange}
                type="checkbox"
                id="preorder"
                value="preorder"
                name="preorder"
              />
              <label htmlFor="preorder">Pre Order</label>
            </div>

            <div className="flex gap-2 text-sm font-semibold py-2">
              {" "}
              <input
                onChange={handleChange}
                type="checkbox"
                id="upcomming"
                value="upcomming"
                name="upcomming"
              />
              {/* <Input
                handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="test"
              /> */}
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
  );
};

export default Sidebar;
