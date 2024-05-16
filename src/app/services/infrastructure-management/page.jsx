import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import IMS from '@/components/technologies/devops-technologies/IMS';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";

export const metadata = {
  title: "Empowering Your Digital Backbone: Infrastructure Management Services by StellarMind.AI",
  description: "Optimize, secure, and scale your digital infrastructure with StellarMind.AI's expert management services.Let's elevate your infrastructure to new heights together.",
};
function page() {
  const services = [
    {
      "image": "/serviceicon/Multi-Cloud Infrastructure Management Services.png",
      "title" :"Multi-Cloud Infrastructure Management",
      "desc":"Navigate the complexities of multi-cloud environments effortlessly with our specialized Infrastructure Management Services. "
    },
    {
      "image": "/serviceicon/Infrastructure Design and Consulting Services.png",
      "title" :"Infrastructure Design and Consulting",
      "desc":"Our Infrastructure Design and Consulting services are tailored to align with your business goals and technological requirements."
    },
    {
      "image": "/serviceicon/Modernization of Businesses Services.png",
      "title" :"Modernization of Businesses",
      "desc":"Stay ahead of the curve with our innovative solutions for the modernization of businesses. Our Infrastructure Management Services drive efficiency, agility, and scalability."
    }
  ]
  const subHeading = [
    {
      point:
        "At StellarMind, we specialize in overseeing and maintaining the backbone of your IT environment, ensuring reliability, scalability, and cost-effectiveness.",
    },
    {
      point:
        "We understand the importance of a robust infrastructure and provide customized solutions to meet the unique needs of our clients.",
    },
    {
      point:
        "Let StellarMind be your trusted partner in Infrastructure Management, providing proactive solutions that drive efficiency and innovation across your entire DevOps landscape.",
    }
  ];    return (
   <div className='container'>
     <Heading mainHeading={" Infrastructure Management"} subHeading={subHeading} imgUrl={"/Devops Consulting.jpg"} />
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
        FirstContent={""}
        FirstsubContent={"Technologies"}
      />
     <IMS/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;