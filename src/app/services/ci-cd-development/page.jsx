import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import CICD from '@/components/technologies/devops-technologies/CICD';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";

export const metadata = {
  title: "CI/CD Development Services | StellarMind - Streamlined AI/ML & IoT Integration",
  description: "Accelerate your software delivery with StellarMind’s CI/CD development, integrating AI/ML and IoT solutions for faster, automated, and cloud-enabled releases.",
};
function page() {
  const services = [
    {
      "image": "/serviceicon/CI_CD Implementation Services.png",
      "title" :"CI/CD Implementation",
      "desc":"We leverage industry-leading tools and technologies to ensure that your pipeline is efficient, reliable, and scalable."
    },
    {
      "image": "/serviceicon/CI_CD Consulting Services.png",
      "title" :"CI/CD Consulting",
      "desc":"Partner with StellarMind for reliable and cost-effective CI/CD consulting services that will take your development process to the next level."
    },
    {
      "image": "/serviceicon/CI_CD Pipeline Auditing Services.png",
      "title" :"CI/CD Pipeline Audit",
      "desc":"We will provide a detailed report of our findings and recommendations for improving your pipeline's performance and security."
    },
    {
      "image": "/serviceicon/Managed CI_CD Services.png",
      "title" :"Manage CI/CD Services",
      "desc":"We use industry-leading tools and technologies to ensure that your pipeline is secure, scalable, and optimized for performance."
    }
  ]
  const subHeading = [
    {
      point:
        "StellarMind offers industry-leading CI/CD services that enable software development teams to deliver high-quality applications quickly and efficiently.",
    },
    {
      point:
        "We specialize in implementing automated pipelines that accelerate software delivery and ensure high-quality releases.",
    },
    {
      point:
        "Partner with us to optimize your development process, reduce time-to-market, and achieve operational excellence in today's agile-driven landscape.",
    }
  ];  return (
   <div className='container'>
     <Heading mainHeading={"CI/CD Services"} subHeading={subHeading} imgUrl={"/devopsci.jpg"} />
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
        FirstContent={"CI-CD"}
        FirstsubContent={"Technologies"}
      />
     <CICD/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;