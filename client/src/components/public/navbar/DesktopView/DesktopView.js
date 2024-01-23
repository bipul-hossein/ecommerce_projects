import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import logo from "../../../../Images/Logo/egonj_logo3.png";
import useAdmin from "../../../../hooks/useAdmin";
import useAuth from "../../../../hooks/useAuth";

const DesktopView = ({ cartQuantity }) => {
  const [isFixed, setIsFixed] = useState(false);
  const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    <p>waiting...</p>;
  }

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
    <div className="py-4">
      <div className="flex justify-between items-center gap-10 max-w-[1200px] mx-auto px-4 mb-4">
        <Link to="/">
          <img className="h-[45px]" src={logo} alt="" />
        </Link>

        <div className="flex-1 items-center justify-center w-[70%]">
          <div className="flex overflow-hidden ">
            <input
              type="text"
              className="w-full border-[1px] px-4 bg-[#E6ECF2] rounded-l-md focus:border-primary focus:border outline-none border-solid"
              placeholder="Search in Egonj"
            />
            <button className="bg-primary text-white px-6 text-lg py-3 rounded-r-md font-bold">
              {" "}
              <GoSearch />
            </button>
          </div>
        </div>
        <div className="flex gap-12 items-center max-h-full">
          {user && !isAdmin ? (
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
          ) : (
            <Link to="/login" className="max-h-full">
              <p className="inline-flex cursor-pointer items-center text-base justify-center h-full md:w-[120px] gap-2 md:hover:border rounded-md transition-colors md:hover:bg-gray-50">
                  <FaRegUser className="h-5 w-5"/>
                  <span className="hidden md:inline-block">Login</span>
              </p>
            </Link>
          )}

          {isAdmin && (
            <Link to="/dashboard" className="font-bold">
              Dashboard
            </Link>
          )}
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
        <div className="px-4 text-white flex justify-between items-center max-w-[1200px] mx-auto">
          <div className="flex gap-[3%] w-full">
            <Link to="/" className="font-bold">
              Home
            </Link>

            <Link to="/shop" className="font-bold">
              Shop
            </Link>

            <Link to="/about" className="font-bold">
              About
            </Link>

            <Link to="/contact_us" className="font-bold">
              Contact Us
            </Link>

            {/* <p className="font-bold">Services</p> */}
          </div>
          <div className="w-[30%] flex gap-2 justify-end">
            <p className="text-sm font-bold flex justify-center items-center">
              <BiSolidPhoneCall className="w-5 h-5 mr-2" /> Call Us Now:
              01728-525953
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
