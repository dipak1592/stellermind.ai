// components/Dropdown/DropdownItem.js
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useState } from "react";
import Submenu from "./Submenu";
import Image from "next/image";

const DropdownItem = ({ service, handleSubClick }) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  return (
    <>
    <div
      className="relative hidden md:block"
      onClick={() => {
        setSubMenuVisible(!subMenuVisible);
      }}
      onMouseEnter={() => setSubMenuVisible(true)}
      onMouseLeave={() => setSubMenuVisible(false)}
    >
      <button className="text-white block px-4 py-2 text-[18px] w-full text-left hover:bg-[#ffffff0e] hover:text-blue-600">
        <div className="flex items-center justify-between gap-4">
          <Image src={service.image} alt="" height={30} width={30} />
          {service.name}
          <MdKeyboardArrowRight />
        </div>
      </button>
      {subMenuVisible && <Submenu subServices={service.subServices} handleSubClick={handleSubClick} />}
    </div>
    <div
      className="md:hidden"
      onClick={() => {
        setSubMenuVisible(!subMenuVisible);
      }}
    >
      <button className="text-white block px-4 py-2 text-sm w-full text-left hover:bg-[#ffffff0e] hover:text-blue-600">
        <div className="flex items-center justify-between gap-4">
          <Image src={service.image} alt="" height={30} width={30} />
          {service.name}
          <MdKeyboardArrowRight />
        </div>
      </button>
      {subMenuVisible && <Submenu subServices={service.subServices} />}
    </div>
    </>
    
  );
};

export default DropdownItem;
