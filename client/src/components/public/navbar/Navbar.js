import React, { useState } from "react";
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";
import SearchBar from "./MobileView/SearchBar";
import logo from "../../../Images/logo.png";

const Navbar = () => {
  const [activeSearchBar, setActiveSearchBar] = useState(false);
  
  return (
    <>
      <div className="hidden md:block">
        <DesktopView />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="border-b border-[1px] border-gray-400 py-1 fixed top-0 z-40 bg-white w-full">
          <img
            className="mx-auto"
            src={logo}
            alt=""
          />
        </div>
        <div
          className={`${
            activeSearchBar ? "block" : "hidden"
          } bg-white py-3 top-0 fixed w-full z-40 border-b border-[1px] border-gray-400`}
        >
          <SearchBar />
        </div>
        <div className="fixed bottom-0 z-40 w-full ">
          <MobileView
            activeSearchBar={activeSearchBar}
            setActiveSearchBar={setActiveSearchBar}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
