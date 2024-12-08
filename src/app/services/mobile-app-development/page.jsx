import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import Mobile from '@/components/technologies/Mobile';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";

export const metadata = {
  title: "AI/ML-Powered Mobile App Development | StellarMind - Innovating Mobile Solutions",
  description: "Build cutting-edge mobile apps with StellarMind, integrating AI/ML and IoT for cloud-powered, cross-platform mobile solutions that drive digital transformation.",
};
function page() {
  const services = [
    {
      "image": "/serviceicon/ios.png",
      "title" :"IOS App Development",
      "desc":"Our experienced developers can create high-quality, user-friendly apps tailored to their client's needs. "
    },
    {
      "image": "/serviceicon/android.png",
      "title" :"Android App Development",
      "desc":"StellarMind team of experienced developers can create custom applications from scratch or optimize existing ones to ensure they meet the unique needs of our clients."
    },
    {
      "image": "/serviceicon/cross platform.png",
      "title" :"Cross-Platform App Development",
      "desc":"Our apps can work seamlessly on multiple devices and platforms, including iOS, Android, and the web."
    },
    {
      "image": "/serviceicon/Hybrid App Development.png",
      "title" :"Hybrid App Development",
      "desc":"Our hybrid app development services leverage cutting-edge technologies and frameworks to deliver high-performance applications."
    },
    {
      "image": "/serviceicon/PWA App Development.png",
      "title" :"PWA App Development",
      "desc":"we specialize in PWA app development, harnessing the latest web technologies to create fast, reliable, and engaging applications that work seamlessly across devices and platforms."
    },
    {
      "image": "/serviceicon/Maintenance and Support service.png",
      "title" :"Support & Maintenance",
      "desc":"Maximize the longevity and performance of your mobile apps with our dedicated support and maintenance services, ensuring seamless user experiences and continuous innovation."
    }
  ]
  const subHeading = [
    {
      point:
        "Elevate your transformative digital presence with our cutting-edge mobile app development services at StellarMind. We specialize in crafting bespoke mobile solutions that drive business growth and user engagement.",
    },
    {
      point:
        "With a keen focus on innovation and user-centric design, we specialize in crafting bespoke mobile solutions that captivate audiences and drive business growth.",
    },
    {
      point:
        "Partner with us to transform your vision into reality and embark on a journey towards unparalleled success in the mobile-first era.",
    }
  ];
  return (
   <div className='container'>
     <Heading mainHeading={"Mobile Application Development"} subHeading={subHeading} imgUrl={"/mobile.avif"} />
     <DynamicHeading FirstContent={"Our"} FirstsubContent={"Trusted Partners"}/>
      <BrandSlider/>
      <DynamicHeading FirstContent={"Our"} FirstsubContent={"AI Services"}/>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[30px]'>
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
        FirstContent={"Mobile App"}
        FirstsubContent={"Technologies"}
      />
     <Mobile/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;