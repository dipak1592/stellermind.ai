import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import Tabs from '@/components/technologies/Tabs';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";


export const metadata = {
  title: "Scalable Web Development with AI/ML Integration | StellarMind",
  description: "StellarMind offers scalable web development solutions powered by AI/ML and IoT, ensuring your digital platform is future-ready and optimized for performance.",
};

function page() {
  const services = [
    {
      "image": "/serviceicon/frontend.png",
      "title" :"Front End Development",
      "desc":"Integrate highly-responsive and user-friendly visual experience to your web apps with our expertise providing you with sustainable business growth. "
    },
    {
      "image": "/serviceicon/backend.png",
      "title" :"Back End Development",
      "desc":"Our scalable backend development services help you achieve enterprise level operational proficiency."
    },
    {
      "image": "/serviceicon/custom-web.png",
      "title" :"Custom Web Development",
      "desc":"A convenient web application that is designed by analyzing your requirements and integration empowering technologies."
    },
    {
      "image": "/serviceicon/Ecommerce.png",
      "title" :"Ecommerce Web and Portal development",
      "desc":"Our E commerce solutions like shopify and magento development help you build a positive brand perception."
    }
  ]
  const tabs = [  'Frontend', 'Backend','CMS'];
  const subHeading = [
    {
      point:
        "At StellarMind, we craft more than just websites; we engineer digital experiences that captivate, engage, and inspire. We specialize in creating dynamic, responsive websites that captivate audiences and drive results.",
    },
    {
      point:
        "From sleek and responsive designs to robust backend solutions, we tailor every aspect of our web development services to align with your goals and exceed your expectations.",
    },
    {
      point:
        "Partner with us to unlock the full potential of your digital footprint and achieve your business objectives with innovative web solutions.",
    }
  ];  return (
   <div className='container'>
     <Heading mainHeading={"Web Development"} subHeading={subHeading} imgUrl={"/web development.avif"} />
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
     <Tabs tabs={tabs} activetab={"Frontend"}/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;