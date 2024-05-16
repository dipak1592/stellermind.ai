import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import AR from '@/components/Portfolios/AR';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import ARVR from '@/components/technologies/ARVR';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";

export const metadata = {
  title: "Step into the Future: Augmented Reality Redefined by StellarMind.AI",
  description: "Immerse yourself in a world where reality meets innovation. With StellarMind.AI's augmented reality solutions, unlock new dimensions of engagement and interactivity.",
};
function page() {
  const services = [
    {
      "image": "/serviceicon/AR Game Development.png",
      "title" :"AR Game Development Services",
      "desc":"Harness the latest advancements in AR technology to create unforgettable gaming experiences."
    },
    {
      "image": "/serviceicon/AR Testing and Maintenance.png",
      "title" :"AR Testing and Maintenance",
      "desc":"Ensure flawless performance and user satisfaction with rigorous AR testing protocols, identifying and rectifying any issues to deliver a seamless experience."
    },
    {
      "image": "/serviceicon/Custom AR Development Services.png",
      "title" :"Custom AR Development Services",
      "desc":"Partner with us to bring your vision to life with custom AR development services, tailored to meet your specific requirements."
    },
    {
      "image": "/serviceicon/Multi-Platform AR Integrations Services.png",
      "title" :"Multi-Platform AR Integrations Services",
      "desc":"Seamlessly integrate AR experiences across multiple platforms, ensuring consistent performance and accessibility."
    }
  ]
  const subHeading = [
    {
      point:
        "At StellarMind, we specialize in harnessing the transformation power of augmented reality to redefine your business landscape. Our cutting-edge AR solutions seamlessly blend the digital and physical worlds, offering unparalleled experiences that captivate, engage, and inspire. ",
    },
    {
      point:
        "Step into the future of augmented reality with StellarMind. We specialize in cutting-edge AR services that blend digital experiences seamlessly with the physical world. From immersive AR applications to interactive virtual tours, our solutions redefine engagement and storytelling.",
    },
    {
      point:
        "Partner with us to unlock new dimensions of creativity, customer interaction, and business potential. Elevate your brand and captivate audiences with innovative AR experiences crafted by StellarMind.",
    }
  ];  return (
   <div className='container'>
     <Heading mainHeading={"Augmented Reality"} subHeading={subHeading} imgUrl={"/hire-team/ARVRBox.webp"} />
     <DynamicHeading FirstContent={"Our"} FirstsubContent={"Trusted Partners"}/>
      <BrandSlider/>
      <DynamicHeading FirstContent={"Our"} FirstsubContent={"AI Services"}/>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-[25px]'>
      {
         services.map((item, index)=>{
          
         return (
           <div key={index}>
              <ServiceBox image={item.image} title={item.title} desc={item.desc} index={index}/>
           </div>
         )
         })
      }
     </div>
     <Industries/>
     <DynamicHeading
        FirstContent={"AR"}
        FirstsubContent={"Technologies"}
      />
     <ARVR/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;