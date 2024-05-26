import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmojiObjects } from "react-icons/md";
import Link from "next/link";
import DynamicHeading from "@/components/DynamicHeading";
import { VscDebugBreakpointLog } from "react-icons/vsc";
function Career() {
  return (
    <>
      <div className="grid container md:grid-cols-2 gap-[20px] ">
        <div className="relative pt-[90px] text-white">
          <h1 className="pb-3 text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] font-semibold">
            {"Discover Your Potential at Stellarmind "}
            <span
              className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
            >
              {"Join Our Dynamic Team Today!"}
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Image height={1000} width={500} src={"/careerbanner.svg"} alt="" />
        </div>
      </div>
      <DynamicHeading FirstContent={"Current"} FirstsubContent={"Openings"} />

      <div className="container">
        <div className=" hover:bg-black border border-gray-500 bg-gradient-to-r from-[#3b83f631] to-[#00800038] flex justify-between gap-5 flex-col  sm:text-[25px] md:text-[30px]  text-[18px] font-bold rounded-xl p-[30px]">
          <div>
            <span className="bg-gradient-to-r text-center from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              {"Full Stack Developer"}
            </span>
            <div className="mt-6 font-normal text-[18px]">
              <p className="flex gap-2 mb-3 text-white">
                <span className="mt-1 text-[22px] text-blue-500">
                  <VscDebugBreakpointLog />
                </span>
                StellarMind is a leading and globally accepted IT consultant and
                solution provider in AI/ML, IoT, cloud applications,
                microservices, mobile apps, DevOps, And AR/VR technology.
              </p>
              <p className="flex gap-2 mb-3 text-white">
                <span className="mt-1 text-[22px] text-blue-500">
                  <VscDebugBreakpointLog />
                </span>
                We specializes in developing software to help bring your vision
                to life.
              </p>
              <p className="flex gap-2 mb-3 text-white">
                <span className="mt-1 text-[22px] text-blue-500">
                  <VscDebugBreakpointLog />
                </span>
                We have successfully built and delivered 127+ AI/ML, IoT and
                Software development projects with utmost quality and support.
              </p>
            </div>
          </div>

          <div className=" flex justify-center">
            <Link href={"/contact"}>
              <button className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
                Apply Now <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>

        {/* static component */}
        <div className="mt-[60px] flex flex-col gap-3 items-center sm:text-[25px] md:text-[30px]  text-[18px] font-bold rounded-xl bg-[#1a1919ec] p-[30px]">
          <div className=" flex gap-4 items-start">
            <span className="text-white">{"Don't see any Match?"}</span>
          </div>
          <div className=" flex gap-4 items-start">
            <span className="bg-gradient-to-r text-center from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              {"We're Always Looking For Talented People."}
            </span>
          </div>
          <div className=" flex justify-center">
            <Link href={"/contact"}>
              <button className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
                Apply Now <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
