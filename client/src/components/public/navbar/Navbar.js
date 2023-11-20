import React, { useContext, useState } from "react";
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";
import SearchBar from "./MobileView/SearchBar";
import logo from "../../../Images/Logo/eGonj_logo.png";
import { ProductContext } from "../../../contexts/ProductsProvider";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./MobileView/Sidebar";

const Navbar = () => {
  const { cartItems } = useContext(ProductContext);
  const [activeSearchBar, setActiveSearchBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu =()=>{
    setIsOpen(true)
  }
  return (
    <>
      <div className="hidden md:block">
        <DesktopView cartQuantity={cartItems?.length} />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="border-b border-[1px] border-gray-400 py-1 fixed top-0 z-40 bg-white w-full">
          <div className="flex ">
          <AiOutlineMenu onClick={handleMenu} className="h-14 w-14 px-3"/>
            <img className="mx-auto h-14 pr-14" src={logo} alt="" />
          </div>
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
            cartQuantity={cartItems?.length}
            activeSearchBar={activeSearchBar}
            setActiveSearchBar={setActiveSearchBar}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
