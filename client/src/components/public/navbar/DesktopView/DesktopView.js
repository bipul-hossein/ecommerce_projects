import React from "react";
import { GoSearch } from "react-icons/go";
import { CgProfile, CgShoppingCart } from "react-icons/cg";

const DesktopView = () => {
  return (
    <div>
      <div>
        <img
          src="https://fullkit.moxcreative.com/electrodeals/wp-content/uploads/sites/8/elementor/thumbs/Logo_electrodeals-1-pqh2rs7jj702t6120hf28oa9rgzhabts8ff3d9id4w.png"
          alt=""
        />
        <div>
          <input type="text" name="" id="" />
          <button>
            <GoSearch />{" "}
          </button>
        </div>
        <div>
          <div>
            <div>
              <CgProfile />
            </div>
            <div>
              <p>Sing in</p>
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
