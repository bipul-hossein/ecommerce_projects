import React, { useState } from "react";
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";
import SearchBar from "./MobileView/SearchBar";

const Navbar = () => {
  const [activeSearchBar, setActiveSearchBar] = useState(false);

  return (
    <>
      <div className="hidden md:block">
        <DesktopView />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="border-b border-[1px] border-gray-400 py-1 fixed top-0 z-10 bg-white w-full">
          <img
            className="mx-auto"
            src="https://fullkit.moxcreative.com/electrodeals/wp-content/uploads/sites/8/elementor/thumbs/Logo_electrodeals-1-pqh2rs7jj702t6120hf28oa9rgzhabts8ff3d9id4w.png"
            alt=""
          />
        </div>
        <div
          className={`${
            activeSearchBar ? "block" : "hidden"
          } bg-white py-3 fixed w-full z-10 border-b border-[1px] border-gray-400`}
        >
          <SearchBar />
        </div>
        <div className="fixed bottom-0 z-10 w-full ">
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
