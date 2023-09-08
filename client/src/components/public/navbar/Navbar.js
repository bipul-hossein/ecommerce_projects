import React from "react";
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopView />
      </div>
      <div className="fixed bottom-0 z-10 w-full md:hidden">
        <MobileView />
      </div>
    </>
  );
};

export default Navbar;
