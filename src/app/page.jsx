"use client"; 

import { useState, useEffect } from 'react';
import Head from 'next/head';
import BrandSlider from "@/components/BrandSlider";
import DynamicHeading from "@/components/DynamicHeading";
import HeroStatistics from "@/components/HeroStatistics";
import ServiceBoxes from "@/components/ServiceBoxes";
import Testimonial from "@/components/Testimonial";
import TubeLight from "@/components/TubeLight";
import Link from "next/link";
import { DM_Serif_Text } from 'next/font/google';
import Image from "next/image";
import { Playfair_Display } from 'next/font/google';
import Tabs from "@/components/technologies/Tabs";
import HireDeveloper from "@/components/HireDeveloper";
import CallToMeet from "@/components/CallToMeet";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogWidget from "@/components/blogs/BlogWidget"; 
import BlogError from '@/components/blogs/BlogError'; 

// Google Fonts
const playfair = Playfair_Display({
  weight: ['400', "500", "600", '700'],
  subsets: ['latin'],
  display: 'swap',
});

const dmserif = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

// Fetch function for blogs
async function getHomeBlogs() {
  const res = await fetch(
    `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/blog/getposts`
  );

  if (!res.ok) {
    console.log("Failed to fetch data");
    return [];
  }
  return res.json();
}

const HomePage = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const blogs = await getHomeBlogs();
      setBlogData(blogs);
    }
    fetchBlogs();
  }, []);

  // Tabs configuration
  const tabs = [
    { id: 'AI/ML', label: 'AI/ML' },
    { id: 'Web Dev', label: 'Web Development' },
    // Add more tabs as needed
  ];

  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "StellarMind",
    "url": "https://stellarmind.ai",
    "logo": "https://stellarmind.ai/betalogo.png",
    "sameAs": [
      "https://www.facebook.com/StellarMind",
      "https://twitter.com/StellarMind",
      "https://www.linkedin.com/company/StellarMind"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917863889382,16506670749",
      "contactType": "Customer Service",
      "areaServed": "India, USA",
      "availableLanguage": "English"
    }
  };

  
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Head>
      <div className="bg-gradient-to-l from-black via-[#000000ad] to-transparent">
        <div className="grid container md:grid-cols-2 gap-3">
          <div className="relative py-[90px] text-white">
            <h1 className="pb-3 text-[30px] xl:text-[50px] lg:text-[44px] md:text-[40px] font-semibold">
              {"Because without any"} <br />
              <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}>
                {"Advanced tech "}
              </span>
              <br />
              <span>{" You're not leading ;"}</span>
              <br />
              <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}>
                {"You're barely competing :) "}
              </span>
            </h1>
            <div className="mt-[30px] flex gap-5">
              <Link href={"#services"}>
                <button className="flex border border-gray-500 items-center text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white font-bold rounded">
                  Explore more
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center border border-gray-500 text-[18px] gap-2 py-2 hover:border px-4 hover:border-white text-white font-medium rounded">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              height={1000}
              width={700}
              unoptimized
              src={"/homegif.GIF"}
              alt="Home GIF"
            />
          </div>
        </div>
      </div>

      <section className="pb-[60px] font-semibold text-white">
        <TubeLight />
        <div className="relative z-[5] pt-[60px]">
          <div className="flex justify-center">
            <h1 className={`text-[35px] heading inline-block xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center text-white`}>
              <span className="">
                StellarMind is <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text ${playfair.className}`}>All About</span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      <HeroStatistics />

      <section className="pb-[60px] font-semibold text-white">
        <div className="relative z-[5] pt-[60px]">
          <h1 className={`text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center text-white`}>
            <span className="heading">
              {"Our"} <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text ${playfair.className}`}>{"Trusted Partners"}</span>
            </span>
          </h1>
        </div>
      </section>

      <div id="services"><BrandSlider /></div>

      <DynamicHeading FirstContent={"Our"} FirstsubContent={"Expertise"} />

      <ServiceBoxes />

      {/* Render Tabs correctly */}
      <Tabs tabs={tabs} activetab={"AI/ML"} />

      <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"} />

      <Testimonial />

      <DynamicHeading FirstContent={"Hire"} FirstsubContent={"Dedicated Developers"} />

      <HireDeveloper />

     
  

      <section className="container lg:w-[90%] w-full px-4 py-10">
      {/* <h1 className="text-4xl font-bold text-center my-8 gradient-title">
  Our Blogs
</h1> */}
   <DynamicHeading FirstContent={"Our"} FirstsubContent={"Blogs"} />

  {blogData.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogData.slice(0, 3).map((blog, index) => (
        <BlogWidget 

          key={index}
          featureImage={blog.featureImage}
          updatedAt={blog.updatedAt}
          category={blog.category}
          title={blog.title}
          content={blog.content}
          id={blog._id}
          slug={blog.slug}
        />
      ))}
    </div>
  ) : (
    <BlogError />
  )}
  <div className=" flex justify-center mt-5">
            <Link href={"blog"}>
              <button className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
              View All Blogs <FaArrowRightLong />
              </button>
            </Link>
          </div>


</section>


      <div className="container">
        <CallToMeet />
      </div>
    </>
  );
};

export default HomePage;
