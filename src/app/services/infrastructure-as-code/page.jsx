import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import IAC from '@/components/technologies/devops-technologies/IAC';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";
export const metadata = {
  title: "Infrastructure as Code Solutions | StellarMind - Automation & Cloud Integration",
  description: "Automate your cloud infrastructure with StellarMind’s Infrastructure as Code solutions, integrating AI/ML for seamless, scalable, and secure deployment.",
};
function page() {
  const services = [
    {
      "image": "/serviceicon/Infrastructure as Code (IaC) Consulting.png",
      "title" :"IAC Consulting",
      "desc":"Empower your organization with our IAC Consulting services, guiding you through the strategic planning and implementation of Infrastructure as Code. "
    },
    {
      "image": "/serviceicon/Infrastructure as Code Implementation Services.png",
      "title" :"IAC Implementation",
      "desc":"Streamline your infrastructure deployment with our IAC Implementation services, harnessing the power of automation."
    },
    {
      "image": "/serviceicon/Infrastructure Optimization.png",
      "title" :"Infrastructure Optimization",
      "desc":"Maximize the performance with our specialized Optimization services, fine-tuning your IAC processes to achieve peak efficiency and cost-effectiveness."
    },
    {
      "image": "/serviceicon/Cloud Infrastructure Audit.png",
      "title" :"Cloud Infrastructure Audit",
      "desc":"Ensure the security and compliance of your cloud with our Cloud Infrastructure Audit, identifying vulnerabilities and optimizing resource utilization."
    }
  ]
  const subHeading = [
    {
      point:
        "At StellarMind, we specialize in transforming manual infrastructure processes into automated, scalable solutions using industry-leading IaC tools like Terraform and Ansible. ",
    },
    {
      point:
        "Partner with us to increase agility, reduce operational costs, and maintain consistency across your entire IT environment.",
    },
    {
      point:
        "Let StellarMind be your strategic partner in embracing Infrastructure as Code, empowering your organization to achieve greater efficiency and scalability in your DevOps initiatives.",
    }
  ];    return (
   <div className='container'>
     <Heading mainHeading={"Infrastructure As Code"} subHeading={subHeading} imgUrl={"/infraAscode.svg"} />
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
     <IAC/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;