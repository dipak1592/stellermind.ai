import React from "react";
import TubeLight from "../TubeLight";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";
function Heading({ mainHeading, subHeading, imgUrl }) {
  return (
    <div>
      <section className="font-semibold text-white">
        <TubeLight />
        <div className="relative flex justify-center z-[5] py-[60px]">
          <h1
            className={`heading inline-block  text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}
          >
            <span
              className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
            >
              {mainHeading}
            </span>
          </h1>
        </div>
      </section>
      <div className="grid gap-[50px] relative md:grid-cols-2 grid-cols-1">
        <section className=" text-white text-[18px]">
          {subHeading.map((item, index) => {
            return (
              <p key={index} className="flex gap-2 mb-3">
                <span className="mt-1 text-[22px] text-blue-500">
                  <VscDebugBreakpointLog />
                </span>
                {item.point}
              </p>
            );
          })}
        </section>
        <div className="">
          <Image
            className="rounded-[20px]"
            height={500}
            width={500}
            src={imgUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Heading;
