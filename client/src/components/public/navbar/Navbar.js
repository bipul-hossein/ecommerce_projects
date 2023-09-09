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
      <div>
        <div className={`${activeSearchBar ? 'block' : 'hidden'} bg-white py-3`}>
          <SearchBar />
        </div>
        <div className="fixed bottom-0 z-10 w-full md:hidden">
          <MobileView activeSearchBar={activeSearchBar} setActiveSearchBar={setActiveSearchBar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
