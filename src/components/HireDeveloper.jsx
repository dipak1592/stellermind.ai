import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./Crad3dD";
import { IoEarthOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { VscRemoteExplorer } from "react-icons/vsc";
function HireDeveloper() {
  return (
    <div className="container">
      <div className="grid grid-cols-1  lg:grid-cols-3 sm:gap-10">
      <CardContainer className="inter-var col-span-1">
        <CardBody className="relative group/card   border-black/[0.1] w-[100%] h-auto rounded-xl p-8 border">
        <CardItem
          translateZ="50"
          className="font-bold text-white dark:text-white h-[250px]"
        >
          <Image src={"/waitedcandidate.png"} alt="" height={250} width={250}/>
          
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          <h2 className="text-[20px] font-bold mb-[15px] text-blue-500">Vetted candidates makes hiring smoother</h2>
        </CardItem>
        <hr />
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          Hire pro-level buzz makers & experts for your project requirements.
        </CardItem>
        </CardBody>
       
      
    </CardContainer>
    
    
    <CardContainer className="inter-var col-span-1">
        <CardBody className="relative group/card   border-black/[0.1] w-[100%] h-auto rounded-xl p-8 border  ">
        <CardItem
          translateZ="50"
          className="font-bold text-white dark:text-white  h-[250px]"
        >
          <div className="h-[100%] flex items-center">
          <Image src={"/2ndhire.png"} alt="" height={250} width={250}/>
          </div>
         
          
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          <h2 className="text-[20px] font-bold mb-[15px] text-blue-500">Full time, remote extension of your team</h2>
        </CardItem>
        <hr />
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          We stick to our commitments and hence we’re proudly partnered with many award-winning brands.
        </CardItem>
        </CardBody>
       
      
    </CardContainer>
   
   
    <CardContainer className="inter-var col-span-1">
        <CardBody className=" relative group/card   border-black/[0.1] w-[100%] h-auto rounded-xl p-8 border  ">
        <CardItem
          translateZ="50"
          className="font-bold text-white dark:text-white h-[250px]"
        >
          <Image src={"/worktimezone.png"} alt="" height={250} width={250}/>
          
        </CardItem> 
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          <h2 className="text-[20px] font-bold mb-[15px] text-blue-500">Work in your desired Timezone</h2>
        </CardItem>
        <hr />
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          We constantly strive to move forward through innovation & transparency.
        </CardItem>
        </CardBody>
       
      
    </CardContainer>
    
      </div>
    </div>
  );
}

export default HireDeveloper;
