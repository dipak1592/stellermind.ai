"use client";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import Dropdown from "./dropdown/Dropdown";
import { MdOutlineContacts } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import EngDropDown from "./engineerDropdown/EngDropDown";
function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const [engDropDown, setEngDropDown] = useState(false);
  const toggleNavbar = () => {
    setToggle(!toggle);
  };
  const handleSubClick = ()=>{
    console.log("sub item clicked")
    setDropdown(false);
    setToggle(false);
  }
  return (
    <div
      className={`bg-black   ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between h-[70px]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                  <Image
                  src="/betalogo.png"
                  width={170}
                  height={170}
                  alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block text-white">
            <div className="flex items-center lg:space-x-4 md:space-x-2 md:px-4">
            <div>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about"
                      ? "text-blue-500 bg-[#ffffff0e] "
                      : ""
                  } md:text-[15px] lg:text-[18px] font-medium  hover:bg-[#ffffff0e] hover:text-blue-500 rounded-lg p-2`}
                >
                  About
                </Link>
              </div>
              <div
                onMouseLeave={() => setDropdown(false)}
                className="md:text-[15px] lg:text-[18px] font-medium flex items-center gap-[5px] text-white  hover:bg-[#ffffff0e] hover:text-blue-600 rounded-lg p-2"
              >
                <button onMouseEnter={() => setDropdown(true)}>Services</button>

                <span>
                  <RiArrowDropDownLine />
                </span>
                {dropdown && <Dropdown handleSubClick={handleSubClick}/>}
              </div>
              <div>
                <Link
                  href="/portfolio"
                  className={`${
                    pathname === "/portfolio"
                      ? "text-blue-500 bg-[#ffffff0e] "
                      : ""
                  } md:text-[15px] lg:text-[18px] font-medium  hover:bg-[#ffffff0e] hover:text-blue-500 rounded-lg p-2`}
                >
                  Portfolio
                </Link>
              </div>
              <div>
                <Link
                  href="/career"
                  className={`${
                    pathname === "/career"
                      ? "text-blue-500 bg-[#ffffff0e] "
                      : ""
                  } md:text-[15px] lg:text-[18px] font-medium  hover:bg-[#ffffff0e] hover:text-blue-500 rounded-lg p-2`}
                >
                  Career
                </Link>
              </div>
              <div>
                <Link
                  href="/blog"
                  className={`${
                    pathname === "/blog"
                      ? "text-blue-500 bg-[#ffffff0e] "
                      : ""
                  } md:text-[15px] lg:text-[18px] font-medium  hover:bg-[#ffffff0e] hover:text-blue-500 rounded-lg p-2`}
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <Link href="/contact">
          <button className="md:flex hidden  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
          <MdOutlineContacts /> {"Let's Talk"}
        </button>
          </Link>

          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {toggle ? <IoMdClose /> : <HiMiniBars3 />}
            </button>
          </div>
        </div>
        {toggle ? (
          <div className="md:hidden absolute bg-black left-0 right-0 z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-white nav-active block hover:bg-[#ffffff0e] hover:text-blue-600 rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white block hover:bg-[#ffffff0e] hover:text-blue-600 rounded-lg p-2"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-white block hover:bg-[#ffffff0e] hover:text-blue-600 rounded-lg p-2"
              >
                Portfolio
              </Link>
              <Link
                href="/career"
                className="text-white block hover:bg-[#ffffff0e] hover:text-blue-600 rounded-lg p-2"
              >
                Career
              </Link>
              <Link
                href="/blog"
                className="text-white block hover:bg-[#ffffff0e] hover:text-blue-600 rounded-lg p-2"
              >
                blog
              </Link>
              <div>
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="md:text-[15px] lg:text-[18px] font-medium flex items-center gap-[5px] text-white  hover:bg-[#ffffff0e] hover:text-blue-600 rounded-lg p-2"
                >
                  <button>Services</button>

                  <span>
                    <RiArrowDropDownLine />
                  </span>
                </div>
                {dropdown && <Dropdown />}
              </div>
              <Link href="/contact">
              <button className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
          <MdOutlineContacts /> {"Let's Talk"}
        </button>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
}

export default Navbar;
