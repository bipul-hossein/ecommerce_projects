import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { BiSolidPhoneCall } from "react-icons/bi";
import logo from "../../../../Images/Logo/egonj_logo3.png";

const DesktopView = ({ cartQuantity }) => {
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
          <img className="h-14" src={logo} alt="" />
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
          <Link to="/account">
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
          <Link to="/cart" className="relative">
            <span className=" bg-yellow-400 text-sm text-primary rounded-full px-1 absolute -top-2 -right-2 font-bold">
              {cartQuantity}
            </span>

            <p>
              {" "}
              <CgShoppingCart className="text-[28px] text-primary" />
            </p>
          </Link>
        </div>
      </div>
      {/* Navbar Categories */}
      <div
        className={`bg-primary z-50 py-5 w-full ${
          isFixed ? "fixed top-0" : ""
        }`}
      >
        <div className="px-4 text-white flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex gap-[3%] w-full">
            <Link to="/" className="font-bold">
              Home
            </Link>
            
            <Link to="/about" className="font-bold">
              About
            </Link>

            <p className="font-bold">Shop</p>
            <p className="font-bold">Contact Us</p>
            <p className="font-bold">Services</p>
          </div>
          <div className="w-[30%] flex gap-2 justify-evenly">
            <p className="text-sm font-bold flex justify-center items-center">
              <BiSolidPhoneCall className="w-5 h-5 mr-2" /> Call Us Now:
              018-3234-5423
            </p>
            <Link
              to="/cart"
              className={`relative ${isFixed ? "block" : "hidden"}`}
            >
              <span className=" bg-yellow-400 text-sm text-primary rounded-full px-1 absolute -top-2 -right-2 font-bold">
                {cartQuantity}
              </span>

              <p>
                {" "}
                <CgShoppingCart className="text-[28px] text-white" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
