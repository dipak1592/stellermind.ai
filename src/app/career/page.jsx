import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmojiObjects } from "react-icons/md";
import Link from "next/link";
import DynamicHeading from "@/components/DynamicHeading";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Head from "next/head";

async function getData() {
  const res = await fetch(
    `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/career/getposts`, { next: { revalidate: 60 } } 
  );
  if (!res.ok) {
    console.log("failed to fetch data");
  }
  return res.json();
}

async function Career() {
  const careerData = await getData();
  if (!careerData || careerData.length === 0) {
    return <>failed to fetch</>;
  }
  return (
    <>
    
    <Head>
        <title>Careers at StellarMind | AI/ML, IoT, and Automation Innovation</title>
        <meta name="description" content="Join StellarMind’s team of AI/ML and IoT experts. Explore exciting career opportunities in AI-driven automation, custom IoT solutions, and scalable cloud technologies." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Join Our Dynamic Team",
              "description": "Join StellarMind’s team of AI/ML and IoT experts. Explore exciting career opportunities in AI-driven automation, custom IoT solutions, and scalable cloud technologies.",
              "url": "https://stellarmind.ai/career",
              "datePosted": new Date().toISOString(),
              "employmentType": "FULL_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Stellarmind",
                "sameAs": "https://stellarmind.ai",
                "logo": "https://stellarmind.ai/logo.png" 
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1234 Main St",
                  "addressLocality": "City",
                  "addressRegion": "State",
                  "postalCode": "12345",
                  "addressCountry": "Country"
                }
              }
            })
          }}
        />
      </Head>

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
      {careerData?.map((item, index) => {
        
        return (
          <>
            <div key={index} className="mb-[60px] hover:bg-black border border-gray-500 bg-gradient-to-r from-[#3b83f631] to-[#00800038] flex justify-between gap-5 flex-col  sm:text-[25px] md:text-[30px]  text-[18px] font-bold rounded-xl p-[30px]">
          <div>
            <span className="bg-gradient-to-r text-center from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              {item.name}
            </span>
            <div className="mt-6 font-normal text-[18px]">
              {
                item.descPoints?.map((item,index)=>{
                      return(
                        <p key={index} className="flex gap-2 mb-3 text-white">
                <span className="mt-1 text-[22px] text-blue-500">
                  <VscDebugBreakpointLog />
                </span>
               {item}
              </p>
                      )
                })
              }
              
              
            </div>
          </div>

          <div className=" flex justify-center">
            <Link href="mailto:hr@stellarmind.ai">
              <button className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
                Apply Now <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
          </>
        );
      })}

        {/* DynamicHeading */}
       

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
          <Link href="mailto:hr@stellarmind.ai">
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
