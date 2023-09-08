import React from "react";
import { GoSearch } from "react-icons/go";
import { CgProfile, CgShoppingCart } from "react-icons/cg";

const DesktopView = () => {
  return (
    <div className="px-2 py-6">
      <div className="flex justify-between items-center gap-10">
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
          <div>
            <CgShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
