import React, { useState } from "react";
import { AiOutlineHome, AiOutlineSearch} from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileView = ({ activeSearchBar, setActiveSearchBar, cartQuantity }) => {
  const [active, setActive] = useState(0);

  const Menus = [
    {
      name: "Home",
      icon: (
        <Link to={"/"}>
          <AiOutlineHome />
        </Link>
      ),
    },
    { name: "Search", icon: <AiOutlineSearch /> },
    {
      name: "Cart",
      icon: (
        <Link to={"/cart"} className="relative">
          <CgShoppingCart />
          <span className="bg-yellow-400 text-xs text-primary rounded-full px-1 absolute -top-2 -right-2 font-bold">
            {cartQuantity}
          </span>
        </Link>
      ),
    },
    {
      name: "Profile",
      icon: (
        <Link to={"/account"}>
          <IoPersonOutline />
        </Link>
      ),
    },
  ];

  const handleClick = (i) => {
    setActive(i);
    if (i === 0){
      setActiveSearchBar(false);
    }
      if (i === 1 ) {
        setActiveSearchBar(!activeSearchBar);
      }
  };

  return (
    <>
      <div className="bg-[#e7e7e7] max-h-[4.4rem] w-full">
        <ul className="flex relative">
          {Menus.map((menu, i) => {
            return (
              <li key={i} className="w-full">
                <Link
                  href="/"
                  className={`flex flex-col justify-center items-center text-center ${
                    i === active
                      ? "text-white bg-primary pt-2"
                      : "pt-3 flex-none"
                  }`}
                  onClick={() => handleClick(i)}
                >
                  <span
                    className={`text-xl cursor-pointer ${
                      i === active && "text-white"
                    }`}
                  >
                    {menu.icon}
                  </span>
                  <span
                    className={`text-sm ${
                      i === active
                        ? "translate-x-6-4 opacity-100 "
                        : "hidden opacity-0 translate-y-10 "
                    }  `}
                  >
                    {menu.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileView;
