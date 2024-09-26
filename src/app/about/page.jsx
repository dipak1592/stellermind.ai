import Head from "next/head";
import CallToMeet from "@/components/CallToMeet";
import DynamicHeading from "@/components/DynamicHeading";
import Testimonial from "@/components/Testimonial";
import TubeLight from "@/components/TubeLight";
import Industries from "@/components/servicepage/Industries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { VscDebugBreakpointLog } from "react-icons/vsc";
export const metadata = {
  title: "StellarMind AI | Pioneers in AI/ML and IoT Solutions",
  description:
    "Discover StellarMind's journey in providing cutting-edge AI/ML and IoT solutions, delivering transformative cloud-powered and automation services for enterprises globally.",
};

export default function page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StellarMind",
    url: "https://stellarmind.ai",
    logo: "https://stellarmind.ai/betalogo.png",
    founders: [
      {
        "@type": "Person",
        name: "Ronak Barot",
        jobTitle: "Founder and CEO",
        url: "https://stellarmind.ai/team/ronak",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/stellarmindai",
      "https://twitter.com/StellarMind_ai",
      "https://www.facebook.com/StellarMind/",
      "https://www.instagram.com/stellarmind_ai",
    ],
    "headline": "StellarMind AI | Pioneers in AI/ML and IoT Solutions",
    "description":"Discover StellarMind's journey in providing cutting-edge AI/ML and IoT solutions, delivering transformative cloud-powered and automation services for enterprises globally.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://stellarmind.ai/about",
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
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
        </div>
        <DynamicHeading
          FirstContent={"Meet the Minds Behind"}
          FirstsubContent={"Stellarmind's Success"}
        />
        <div className="text-center">
          <h4 className="heading text-[30px] font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
            {"The One Who Started with Vision"}
          </h4>
          <p className="text-white font-semibold mt-1 text-[20px]">
            Our Founding Member
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-[30px]  bg-[#0d0d0df4] text-white md:p-10 p-5 rounded-2xl">
            <div className="md:col-span-1 col-span-2">
              <Image
                src={"/team/ronak.webp"}
                className="rounded-2xl"
                width={250}
                height={250}
                alt=""
              />
            </div>

            <div className="md:col-span-3 col-span-2">
              <h5 className=" text-[30px] font-bold text-left text-blue-600 ">
                Ronak Barot
              </h5>
              <p className="text-left bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Founder and CEO, Stellarmind.ai
              </p>
              <p className="text-left font-semibold text-[18px] py-6">
                He is the visionary behind Stellarmind, bringing a wealth of
                experience and an unwavering commitment to excellence. With a
                passion for innovation and a strategic mindset,he has been
                instrumental in guiding our company to new heights. His values
                inspires us all to deliver exceptional results for our clients
                and partners.
              </p>
              <div className="mb-[10px] flex items-center gap-5">
                <Link
                  href={"https://www.linkedin.com/company/stellarmindai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaLinkedinIn />
                  </span>
                </Link>

                <Link
                  href={"https://twitter.com/StellarMind_ai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaSquareXTwitter />
                  </span>
                </Link>
                <Link
                  href={"https://www.facebook.com/StellarMind/"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaFacebook />
                  </span>
                </Link>
                <Link
                  href={"https://www.instagram.com/stellarmind_ai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300"
                  >
                    <GrInstagram />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <h4 className="heading text-[30px] font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
            {"Driving Innovation and Excellence"}
          </h4>
          <p className="text-white font-semibold mt-1 text-[20px]">
            Our Executive Management Team
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-[30px]  bg-[#0d0d0df4] text-white md:p-10 p-5 rounded-2xl">
            <div className="md:col-span-1 col-span-2">
              <Image
                src={"/team/cto.jpg"}
                className="rounded-2xl"
                width={250}
                height={250}
                alt=""
              />
            </div>

            <div className="md:col-span-1 col-span-2">
              <h5 className=" text-[25px] font-bold text-left text-blue-600 ">
                Sanjay Gandotra
              </h5>
              <p className="text-left bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                CTO, Stellarmind.ai
              </p>
              <p className="text-left font-semibold text-[16px] py-4">
                As the Chief Technology Officer of Stellarmind, He spearheads
                our technological innovations and ensures that we stay ahead of
                industry trends.
              </p>
              <div className="mb-[10px] flex items-center gap-5">
                <Link
                  href={"https://www.linkedin.com/company/stellarmindai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaLinkedinIn />
                  </span>
                </Link>

                <Link
                  href={"https://twitter.com/StellarMind_ai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaSquareXTwitter />
                  </span>
                </Link>
                <Link
                  href={"https://www.facebook.com/StellarMind/"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaFacebook />
                  </span>
                </Link>
                <Link
                  href={"https://www.instagram.com/stellarmind_ai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300"
                  >
                    <GrInstagram />
                  </span>
                </Link>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2">
              <Image
                src={"/team/director.webp"}
                className="rounded-2xl"
                width={250}
                height={250}
                alt=""
              />
            </div>

            <div className="md:col-span-1 col-span-2">
              <h5 className=" text-[25px] font-bold text-left text-blue-600 ">
                Kamlesh Rao
              </h5>
              <p className="text-left bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Director, Stellarmind.ai
              </p>
              <p className="text-left font-semibold text-[16px] py-4">
                As a key decision-maker, He is responsible for overseeing
                departments, ensuring that our operations run smoothly and
                efficiently.
              </p>
              <div className="mb-[10px] flex items-center gap-5">
                <Link
                  href={"https://www.linkedin.com/company/stellarmindai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaLinkedinIn />
                  </span>
                </Link>

                <Link
                  href={"https://twitter.com/StellarMind_ai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaSquareXTwitter />
                  </span>
                </Link>
                <Link
                  href={"https://www.facebook.com/StellarMind/"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaFacebook />
                  </span>
                </Link>
                <Link
                  href={"https://www.instagram.com/stellarmind_ai"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300"
                  >
                    <GrInstagram />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <h4 className="heading text-[30px] font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
            {"The Powerhouse Behind Our Market and Operations"}
          </h4>
          <p className="text-white font-semibold mt-1 text-[20px]">
            Marketing and Operation Team
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 my-[30px] md:mx-[100px]  bg-[#0d0d0df4] text-white md:p-10 p-5 rounded-2xl">
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/kiran.webp"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Kiran Chaudhari
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Talent Acquisition Lead
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/bde.jpg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Sanjay Gojiya
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Business Development Executive
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/Topon.webp"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Topon Mohonto
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Social Marketing Manager
              </p>
            </div>
          </div>
          <h4 className="heading text-[30px] font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
            {"The Coding Gurus of Stellarmind"}
          </h4>
          <p className="text-white font-semibold mt-1 text-[20px]">
            Our Development Team
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-[30px]  bg-[#0d0d0df4] text-white md:p-10 p-5 rounded-2xl">
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/smeet.jpg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Smeet Patel
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Lead Fullstack Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/joseph.jpeg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Joseph Chandy
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Lead Java Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/ishan.jpeg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Ishan Patel
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Fullstack .Net Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/bharat.jpeg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Bharat Prajapati
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Fullstack .Net Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/krupa.jpg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Krupa Patel
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Senior Android Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/default.svg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Paranjothi Govind
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                React Native Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/aayush.jpeg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Ayush Gupta
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Senior AI/ML Engineer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/milan.jpg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">Milan Oza</h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Frontend Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/shubh.jpg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Shubh Ghataliya
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Frontend Developer
              </p>
            </div>

            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/aastha.jpg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Aastha Barot
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Front end Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/dharmesh.jpg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
                Dharmesh Dobariya
              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
                Shopify & Wordpress Developer
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 flex flex-col items-center">
              <Image
                src={"/team/dipak.jpeg"}
                className="rounded-2xl mb-[5px]"
                width={250}
                height={250}
                alt=""
              />
              <h5 className=" text-[22px] font-bold text-white ">
              Dipak Dhariyaparmar              </h5>
              <p className=" bg-gradient-to-r font-semibold to-blue-600 from-green-500 text-transparent bg-clip-text">
              Frontend Developer
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
