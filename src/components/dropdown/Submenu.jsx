// components/Dropdown/Submenu.js

import Image from "next/image";
import React from "react";
import Link from "next/link";
const Submenu = ({ subServices , handleSubClick }) => {
  // Define the sub-services for each item

  return (
    <div className="md:absolute md:left-full md:top-0 md:w-[350px] rounded-md shadow-lg bg-slate-950 ring-1 ring-offset-blue-50 ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {subServices.map((subService, index) => (
          <Link
            key={index}
            href={subService.path}
            onClick={handleSubClick}
            className="text-white block px-4 py-2 text-[18px]  hover:bg-[#ffffff0e] hover:text-blue-500"
          >
            <div className="flex items-center justify-start gap-4" >
              <Image src={subService.image} alt="" height={30} width={30} />
              {subService.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
