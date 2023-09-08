import React from "react";
import { GoSearch } from "react-icons/go";
import { CgProfile, CgShoppingCart } from "react-icons/cg";

const DesktopView = () => {
  return (
    <div>
      <div className="flex flex-row gap-5 justify-between">
        <div className="flex flex-row gap-3 w-">
          <img
            src="https://fullkit.moxcreative.com/electrodeals/wp-content/uploads/sites/8/elementor/thumbs/Logo_electrodeals-1-pqh2rs7jj702t6120hf28oa9rgzhabts8ff3d9id4w.png"
            alt=""
          />
          <div className="flex w-2/4">
            <input type="text" name="" id="" className=' border-slate-950 bg-black w-full' />
            <button className="pl-2">
              <GoSearch />{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-5">
          <div className="flex flex-row justify-center items-center">
            <div className="text-4xl">
              <CgProfile />
            </div>
            <div>
              <p>Sing in</p>
              <p>Account</p>
            </div>
          </div>
          <div className="text-4xl">
            <CgShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
