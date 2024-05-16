import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import AnimatedCounter from "./AnimatedCounter";
function HeroStatistics() {
  return (
    <div className="relative grid items-start lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 lg:mx-[250px] mb-[20px]">
       <div className="flex mb-[30px] sm:mb-[0px] justify-center items-center flex-col">
        <div className="flex justify-center items-center md:gap-3 gap-5">
        <span className="flex items-center justify-center text-white ">
          <FaUsers className="h-[50px] w-[50px]" />
          </span>
          <span className="inline-block text-white text-[30px] font-semibold">
          <AnimatedCounter initialValue={0} finalValue={45} duration={5000} />{"+"}
          </span>
        </div>
        <h4 className="text-blue-500 text-[20px] font-semibold mt-[5px]">Engineers</h4>
      </div>
      <div className="flex mb-[30px] sm:mb-[0px] justify-center items-center flex-col">
        <div className="flex justify-center items-center md:gap-3 gap-5">
          <span className="flex items-center justify-center text-white ">
          <AiOutlineFileDone className="h-[50px] w-[50px]" />
          </span>
          <span className="inline-block text-white text-[30px] font-semibold">
          <AnimatedCounter initialValue={0} finalValue={127} duration={5000} />{"+"}
          </span>
        </div>
        <h4 className="text-blue-500 text-center text-[20px] font-semibold mt-[5px]">Projects Completed</h4>
      </div>
     
      <div className="flex mb-[30px] sm:mb-[0px] justify-center items-center flex-col">
        <div className="flex justify-center items-center md:gap-3 gap-5">
        <span className="flex items-center justify-center text-white ">
          <FaUsersCog className="h-[50px] w-[50px]" />
          </span>
          <span className="inline-block text-white text-[30px] font-semibold">
          <AnimatedCounter initialValue={0} finalValue={56} duration={5000} />{"+"}
          </span>
        </div>
        <h4 className="text-blue-500 text-center text-[20px] font-semibold mt-[5px]">Happy Clients</h4>
      </div>
      {/* <div className="flex mb-[30px] sm:mb-[0px] justify-center items-center flex-col">
        <div className="flex justify-center items-center md:gap-3 gap-5">
        <span className="flex items-center justify-center text-white ">
        <SlCalender className="h-[50px] w-[50px]"/>
          </span>
          <span className="inline-block text-white text-[30px] font-semibold">
          <AnimatedCounter initialValue={0} finalValue={7} duration={5000} /> {"+"}
          </span>
        </div>
        <h4 className="text-blue-500 text-center text-[20px] font-semibold mt-[5px]">Years of experience</h4>
      </div> */}
    </div>
  );
}

export default HeroStatistics;
