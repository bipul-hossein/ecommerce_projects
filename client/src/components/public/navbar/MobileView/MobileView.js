import React, { useState } from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import useAdmin from "../../../../hooks/useAdmin";
// import useAuth from "../../../../hooks/useAuth";

const MobileView = ({ activeSearchBar, setActiveSearchBar, cartQuantity }) => {
  const [active, setActive] = useState(0);
  // const { user } = useAuth();
  // const [isAdmin, isAdminLoading] = useAdmin();

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

    // {user && !isAdmin ? (
    //   <Link to="/account">
    //     <div className="flex gap-2 items-center">
    //       <div>
    //         <CgProfile className="text-[28px] text-primary hover:cursor-pointer" />
    //       </div>
    //       <div>
    //         <p className="text-sm text-gray-400">Sing in</p>
    //         <p>Account</p>
    //       </div>
    //     </div>
    //   </Link>
    // ) : (
    //   <Link to="/login">
    //     <p>Please <span className="underline text-blue-500">Login</span></p>
    //   </Link>
    // )}

    // {isAdmin && (
    //   <Link to="/dashboard" className="font-bold">
    //    Dashboard
    //   </Link>
    // )}
  ];

  const handleClick = (i) => {
    setActive(i);
    if (i === 0) {
      setActiveSearchBar(false);
    }
    if (i === 1) {
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
