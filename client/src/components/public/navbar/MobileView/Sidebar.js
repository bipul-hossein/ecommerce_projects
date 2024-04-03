import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../../../../Images/Logo/egonj_logo3.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = ["shops", "about", "services", "FAQ", "Contacts"];

  return (
    <div
      className={`z-50 fixed top-0 bottom-0 p-2 w-full  duration-1000 ease-in-out overflow-y-auto bg-white ${!isOpen
        ? "-left-[100%]  duration-500 ease-in-out"
        : "left-0 duration-500 ease-in-out"
        }`}
    >
      <div>
        <div className="flex justify-between">
          <img
            className="mx-auto h-14 pr-14"
            src={logo}
            alt=""
          />
          <button onClick={() => setIsOpen(false)}>
            <AiFillCloseCircle className="w-12 h-12 mr-3" />
          </button>
        </div>
      </div>
      <div className="mt-6 ml-3">
        {menuItems.map((item, i) => (
          <p className="my-4 " key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
