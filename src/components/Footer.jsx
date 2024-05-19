"use client";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import WorldMap from "react-svg-worldmap";
import { FaPinterest } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    country: "in",
    value:
      "- A 1602 Privillon, Ambli, BRT Road, Iskcon Cross Rd, Vikram Nagar, Ahmedabad, Gujarat 380059.",
  },
  {
    country: "us",
    value: "- 16238 Ranch Rd 620 N f 160, Austin, TX 78717, USA.",
  },
];
function Footer() {
  return (
    <footer className="text-[white] bg-[#161515d5] mt-[70px]">
      <div className="lg:py-[50px] pt-[40px] pb-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-[18px]">
            <div className="col-span-2 mb-[20px]">
              <div className="mb-4">
                <Link href="/" className="text-white">
                  <Image src="/betalogo.png" width={190} height={190} alt="" />
                </Link>
              </div>
              <p className="mb-[10px]">
                StellarMind is a premier provider of innovative technology
                solutions for businesses of all sizes.
              </p>
              <div className="mb-[10px] flex items-center gap-3">
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
                  href={"https://in.pinterest.com/StellarMind_ai/"}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#3b83f67d] text-xl hover:text-gray-100 hover:bg-black
        duration-300 "
                  >
                    <FaPinterest />
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
              <div className="flex items-center gap-4">
                <Link
                  href={"https://www.guru.com/freelancers/betasourcetech"}
                  target="_blank"
                  rel="noopener"
                >
                  <Image src="/guru.png" alt="" width={80} height={80} />
                </Link>
                <Link
                  href={"https://clutch.co/profile/betasource-technologies"}
                  target="_blank"
                  rel="noopener"
                >
                  <Image src="/clutch.png" alt="" width={80} height={80} />
                </Link>
              </div>
            </div>

            <div className="mb-[20px]">
              <h3
                className={`text-[20px] text-blue-500 font-semibold mb-[12px]`}
              >
                Company
              </h3>
              <div className="text-[17px]">
                <div className="mb-[5px] hover:text-blue-500 hover:font-semibold">
                  <Link href="/about">About</Link>
                </div>
                <div className="mb-[5px] hover:text-blue-500 hover:font-semibold">
                  <Link href="/portfolio">Portfolio</Link>
                </div>
                <div className="mb-[5px] hover:text-blue-500 hover:font-semibold">
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>

            <div className="mb-[20px]">
              <h3
                className={`text-[20px] text-blue-500 font-semibold mb-[12px]`}
              >
                Services
              </h3>
              <div className="text-[17px]">
                <div className="mb-[5px] hover:text-blue-500 hover:font-semibold">
                  <Link href="/services/artificial-intelligence">
                    Artificial Intelligence
                  </Link>
                </div>
                <div className="mb-[5px] hover:text-blue-500 hover:font-semibold">
                  <Link href="/services/augmented-reality">
                    Augmented Reality
                  </Link>
                </div>
                <div className="mb-[5px] hover:text-blue-500 hover:font-semibold">
                  <Link href="/services/internet-of-things">
                    Internet of Things
                  </Link>
                </div>
                <div className="mb-[5px] hover:text-blue-500 hover:font-semibold">
                  <Link href="/services/devops-consulting">Devops</Link>
                </div>
                <div className="mb-[5px] hover:text-blue-500 hover:font-semibold">
                  <Link href="/services/custom-software-development">
                    Software Development
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 mb-[20px]">
              <h3
                className={`text-[20px] text-blue-500 font-semibold mb-[12px]`}
              >
                Get In touch
              </h3>

              <div className="text-[17px]">
                <div className="mb-[5px] flex gap-2 hover:text-blue-500 hover:font-semibold">
                  <span className="text-blue-500 ">
                    <FaPhoneAlt className="mt-[4px] " />
                  </span>
                  <Link href="tel:+917863889382">+91 786 3889 382</Link>
                </div>
                <div className="mb-[5px] flex gap-2 hover:text-blue-500 hover:font-semibold">
                  <span className="text-blue-500 ">
                    
                    <IoMdMail className="mt-[4px]" />
                  </span>

                  <Link href="mailto:info@stellarmind.ai">
                    info@stellarmind.ai
                  </Link>
                </div>
              </div>
              <div className="w-[100%] flex justify-center">
              <WorldMap
                width="100%"
                color="#3b83f67d"
                backgroundColor="transparent"
                borderColor="white"
                size="sm"
                data={data}
              />
              </div>
             
            </div>
          </div>
          <hr />
          <br />
          <p className="text-center text-[16px]">
            Copyright © 2023
            <Link href="/" className="text-blue-600">
              StellarMind
            </Link>
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
