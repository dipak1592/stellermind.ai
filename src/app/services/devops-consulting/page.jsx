import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import DevopsConsulting from '@/components/technologies/devops-technologies/DevopsConsulting';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";
export const metadata = {
  title: "Streamline, Automate, Excel: DevOps Consulting Solutions by StellarMind.AI",
  description: "Unlock the full potential of your IT infrastructure with StellarMind.AI's DevOps consulting expertise. From continuous integration to automated deployments, we optimize your processes for maximum efficiency and reliability.",
};
function page() {
  const services = [
    {
      "image": "/serviceicon/DevOps automation.png",
      "title" :"DevOps automation",
      "desc":"Experience accelerated productivity and reduced overheads with StellarMind's DevOps automation solutions."
    },
    {
      "image": "/serviceicon/DevOps implementation Services.png",
      "title" :"DevOps implementation",
      "desc":"Transform your business with our DevOps implementation services, tailored to your unique requirements and objectives."
    },
    {
      "image": "/serviceicon/aws.png",
      "title" :"StellarMind's AWS DevOps Services",
      "desc":"Leverage the power of AWS with StellarMind's DevOps Services, ensuring smooth integration and optimization for your cloud infrastructure."
    },
    {
      "image": "/serviceicon/azure.png",
      "title" :"StellarMind's Azure DevOps Services", 
      "desc":"Unlock the full potential of Azure with StellarMind's DevOps Services, streamlining your development processes and maximizing efficiency on the cloud platform."
    }
  ]
  const subHeading = [
    {
      point:
        "Transform your development and operations with our strategic DevOps consulting services.",
    },
    {
      point:
        "At StellarMind, we specialize in guiding organizations through their DevOps journey, optimizing processes, and fostering collaboration between teams.",
    },
    {
      point:
        "Partner with us to accelerate innovation, reduce time-to-market, and achieve continuous improvement in your software delivery lifecycle.",
    }
  ];  return (
   <div className='container'>
     <Heading mainHeading={"Devops Consulting"} subHeading={subHeading} imgUrl={"/Devops Consulting.jpg"} />
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
        FirstContent={""}
        FirstsubContent={"Technologies"}
      />
     <DevopsConsulting/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;