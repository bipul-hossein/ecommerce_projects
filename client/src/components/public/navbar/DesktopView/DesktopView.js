import React from "react";
import { GoSearch } from "react-icons/go";
import { CgProfile, CgShoppingCart } from "react-icons/cg";

const DesktopView = () => {
  return (
    <div className="px-2 py-6">
      <div className="flex justify-between items-center gap-10 max-w-[1500px] mx-auto">
        <img
          className=""
          src="https://fullkit.moxcreative.com/electrodeals/wp-content/uploads/sites/8/elementor/thumbs/Logo_electrodeals-1-pqh2rs7jj702t6120hf28oa9rgzhabts8ff3d9id4w.png"
          alt=""
        />

        <div className="flex-1 items-center justify-center w-[70%]">
          <div className="flex overflow-hidden ">
            <input
              type="text"
              className="w-full border-[1px] px-2 bg-[#f7f7f7] rounded-l-md focus:border-red-500 focus:border outline-none border-solid"
              placeholder="Search..."
            />
            <button className="bg-[#e74c3c] text-white px-6 text-lg py-3 rounded-r-md font-bold">
              {" "}
              <GoSearch />
            </button>
          </div>
        </div>
        <div className="flex gap-12 items-center">
          <div className="flex gap-2 items-center">
            <div>
              <CgProfile className="text-[28px] text-[#e74c3c]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Sing in</p>
              <p>Account</p>
            </div>
          </div>
          <div className="relative">
            <span className=" bg-yellow-400 text-xs text-red-500 rounded-full px-1 absolute -top-2 -right-2 font-bold">
              1
            </span>
            <CgShoppingCart className="text-[28px] text-[#e74c3c]" />
          </div>
        </div>
      </div>
      {/* Navbar Categories */}
      <div className="bg-[#e74c3c]">
        <div className="px-4 py-6 text-white my-6 flex justify-between items-center max-w-[1500px] mx-auto">
          <div className="flex gap-[3%] w-full">
            <p className="font-bold">Home</p>
            <p className="font-bold">About</p>
            <p className="font-bold">Shop</p>
            <p className="font-bold">Contact Us</p>
            <p className="font-bold">Services</p>
            <p className="font-bold">Services2</p>
          </div>
          <div className="w-[20%]">
            <span className="bg-yellow-400 rounded-full p-2 text-xs mr-2 text-red-500 font-bold">
              %
            </span>
            <span className="font-bold">#WeekendDeals</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
