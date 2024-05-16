import BrandSlider from "@/components/BrandSlider";
import DynamicHeading from "@/components/DynamicHeading";
import HeroStatistics from "@/components/HeroStatistics";
import HireDeveloperContent from "@/components/HireDeveloperContent";
import ServiceBoxes from "@/components/ServiceBoxes";
import Testimonial from "@/components/Testimonial";
import TubeLight from "@/components/TubeLight";
import Link from "next/link";
import { DM_Serif_Text } from 'next/font/google'
import Image from "next/image";
import { Playfair_Display } from 'next/font/google'
import Tabs from "@/components/technologies/Tabs";
import HireDeveloper from "@/components/HireDeveloper";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmojiObjects } from "react-icons/md";
import CallToMeet from "@/components/CallToMeet";
const playfair = Playfair_Display({
  weight:  ['400', "500","600",'700'],
  subsets: ['latin'],
  display: 'swap',
})

const dmserif = DM_Serif_Text({
  weight:  ['400'],
  subsets: ['latin'],
  display: 'swap',
})
const tabs = [ 'AI/ML', 'AR', 'Frontend', 'Backend','CMS', 'Mobile'];
export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-l from-black via-[#000000ad] to-transparent">
    <div className="grid container md:grid-cols-2 gap-3 ">
      <div className="relative py-[90px] text-white">
        <h1 className="pb-3 text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] font-semibold">
          {"Because without any"}<span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}>
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
          <button className="flex border border-gray-500 items-center text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
          Expolre more
        </button>
          </Link>
          
        <Link href="/contact">
        <button className="flex items-center border border-gray-500  text-[18px] gap-2 py-2  hover:border px-4  hover:border-white text-white font-medium rounded">
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
        alt=""
        />
      </div>
      </div>
    </div>
     
    <section className='pb-[60px] font-semibold text-white'>
     <TubeLight/>
     <div className='relative z-[5] pt-[60px]'>
      <div className='flex justify-center'>
      <h1 className={`text-[35px] heading inline-block xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}>
        <span className=''> 
        StellarMind is <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text ${playfair.className}`}>All About</span>
        </span>
     </h1> 
      </div>
    </div> 
    
   </section>
      <HeroStatistics/>
      
      <section className='pb-[60px] font-semibold text-white'>
     <div className='relative z-[5] pt-[60px]'>
     <h1 className={`text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}>
        <span className='heading'> 
        {"Our"} <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text ${playfair.className}`}>{"Trusted Partners"}</span>
        </span>
     </h1>     
    </div> 
    
   </section>
   <div id="services"><BrandSlider/></div>
     
     <DynamicHeading FirstContent={"Our"} FirstsubContent={"Expertise"}/>
     
     <ServiceBoxes />      
     <Tabs tabs={tabs} activetab={"AI/ML"}/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <DynamicHeading FirstContent={"Hire"} FirstsubContent={"Dedicated Developers"}/>
    <HireDeveloper/>
    <div className="container">
       <CallToMeet/>
    </div>
    </>
  );
}
