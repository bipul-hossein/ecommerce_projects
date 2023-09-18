import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const DesktopView = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <div className="py-6">
      <div className="flex justify-between items-center gap-10 max-w-[1400px] mx-auto px-4 mb-4">
        <Link to="/">
          <img
            className=""
            src="https://fullkit.moxcreative.com/electrodeals/wp-content/uploads/sites/8/elementor/thumbs/Logo_electrodeals-1-pqh2rs7jj702t6120hf28oa9rgzhabts8ff3d9id4w.png"
            alt=""
          />
        </Link>

        <div className="flex-1 items-center justify-center w-[70%]">
          <div className="flex overflow-hidden ">
            <input
              type="text"
              className="w-full border-[1px] px-2 bg-[#f7f7f7] rounded-l-md focus:border-primary focus:border outline-none border-solid"
              placeholder="Search..."
            />
            <button className="bg-primary text-white px-6 text-lg py-3 rounded-r-md font-bold">
              {" "}
              <GoSearch />
            </button>
          </div>
        </div>
        <div className="flex gap-12 items-center">
          <Link to="/login">
            <div className="flex gap-2 items-center">
              <div>
                <CgProfile className="text-[28px] text-primary hover:cursor-pointer" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Sing in</p>
                <p>Account</p>
              </div>
            </div>
          </Link>
          <div className="relative">
            <span className=" bg-yellow-400 text-xs text-primary rounded-full px-1 absolute -top-2 -right-2 font-bold">
              1
            </span>
            <AiOutlineHeart className="text-[28px] text-primary" />
          </div>
          <div className="relative">
            <span className=" bg-yellow-400 text-xs text-primary rounded-full px-1 absolute -top-2 -right-2 font-bold">
              1
            </span>

            <Link to='/cart'> <CgShoppingCart className="text-[28px] text-primary" /></Link>
          </div>
        </div>
      </div>
      {/* Navbar Categories */}
      <div
        className={`bg-primary z-50 py-5 w-full ${isFixed ? "fixed top-0" : ""
          }`}
      >
        <div className="px-4 text-white flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex gap-[3%] w-full">
            <Link to="/" className="font-bold">Home</Link>
            <p className="font-bold">About</p>
            <p className="font-bold">Shop</p>
            <p className="font-bold">Contact Us</p>
            <p className="font-bold">Services</p>
          </div>
          <div className="w-[25%]">
            <p className="text-sm font-bold flex justify-center items-center"><BiSolidPhoneCall className="w-5 h-5 mr-2" /> Call Us Now: 018-3234-5423</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
