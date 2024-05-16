import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import Containerization from '@/components/technologies/devops-technologies/Containerization';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";

export const metadata = {
  title: "Efficiency Redefined: Containerization and Orchestration Solutions by StellarMind.AI",
  description: "From Docker to Kubernetes, we architect scalable and resilient infrastructures that power your applications with agility and reliability. Let's orchestrate your success in the digital era.",
};
function page() {
  const services = [
    {
      "image": "/serviceicon/docker_919853.png",
      "title" :"Containerization and Orchestration Consulting Service",
      "desc":"Maximize productivity with our expert advice on containerization and orchestration, tailored to your business needs."
    },
    {
      "image": "/serviceicon/kubernetes.svg",
      "title" :"Container Orchestration Setup",
      "desc":"Effortlessly deploy and manage Kubernetes for flexible, scalable container orchestration tailored to your business infrastructure."
    },
    {
      "image": "/serviceicon/Maintenance and Support Services.png",
      "title" :"Support and Maintenance",
      "desc":"Stay ahead with our proactive support, ensuring smooth operation and optimization of your containerized environments."
    }
  ]
  const subHeading = [
    {
      point:
        "At StellarMind, we specialize in leveraging Docker and Kubernetes to optimize your development and deployment workflows.",
    },
    {
      point:
        "Partner with us to streamline your software delivery pipeline, enhance scalability, and ensure consistent performance in today's dynamic IT landscape.",
    },
    {
      point:
        "Let StellarMind be your trusted partner in containerizing applications and orchestrating deployments for unparalleled efficiency and agility in DevOps.",
    }
  ];  return (
   <div className='container'>
     <Heading mainHeading={"Containerization and Orchestration Services"} subHeading={subHeading} imgUrl={"/containrization devops.jpg"} />
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
     <Containerization/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;
