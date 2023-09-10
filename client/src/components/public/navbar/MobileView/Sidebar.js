import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

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
            className=""
            src="https://fullkit.moxcreative.com/electrodeals/wp-content/uploads/sites/8/elementor/thumbs/Logo_electrodeals-1-pqh2rs7jj702t6120hf28oa9rgzhabts8ff3d9id4w.png"
            alt=""
          />
          <button onClick={() => setIsOpen(false)}>
            <AiFillCloseCircle className="w-12 h-12" />
          </button>
        </div>
      </div>
      <div>
        {menuItems.map((item, i) => (
          <p className="my-4" key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
