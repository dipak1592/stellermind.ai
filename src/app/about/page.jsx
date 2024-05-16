import CallToMeet from "@/components/CallToMeet";
import DynamicHeading from "@/components/DynamicHeading";
import Testimonial from "@/components/Testimonial";
import TubeLight from "@/components/TubeLight";
import Industries from "@/components/servicepage/Industries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
export const metadata = {
  title: 'Unveiling StellarMind: Pioneers of Digital Evolution and Innovation',
  description: 'Learn about our journey, values, and unwavering commitment to driving digital transformation.',
}
 
export default function page() {
  return (
    <>
      <div className="grid container md:grid-cols-2 gap-[20px] ">
        <div className="relative py-[90px] text-white">
          <h1 className="pb-3 text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] font-semibold">
            {"Revolutionize tech, "}
            <span
              className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
            >
              {"redefine the future of business."}
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Image height={1000} width={500} src={"/aboutus.svg"} alt="" />
        </div>
      </div>

      <div className="container">
        <TubeLight />
        <div className="relative pt-[70px] grid md:grid-cols-2 gap-[30px]">
          <div className="flex justify-center items-center">
            <Image src={"/infographics.png"} width={500} height={500} alt="" />
          </div>
          <div>
            <h4 className="heading text-[30px] font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              {"Unleash Tomorrow with StellarMind"}
            </h4>
            <div className="mt-6 text-[18px]">
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
                We specializes in developing software to help bring your vision to life.
              </p>
              <p className="flex gap-2 mb-3 text-white">
                <span className="mt-1 text-[22px] text-blue-500">
                  <VscDebugBreakpointLog />
                </span>
                We have successfully built and delivered 127+ AI/ML, IoT and Software development projects with utmost quality and support. 
              </p>
            </div>
          </div>
        </div>

        <DynamicHeading
          FirstContent={"Our"}
          FirstsubContent={"Development Process"}
        />
        <div className="flex justify-center items-center">
          <Image src={"/process.png"} width={1000} height={1000} alt="" />
        </div>

        <Industries />
      </div>
      <DynamicHeading
        FirstContent={"Don't just"}
        FirstsubContent={"take our words"}
        SecondContent={"People ❤️ "}
        SecondSubContent={"Us"}
      />
      <Testimonial />
      <div className="container">
        <CallToMeet />
      </div>
    </>
  );
}


