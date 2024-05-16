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
import React from 'react'

export const metadata = {
  title: "Bespoke Solutions, Tailored for Success: Custom Software Development by StellarMind.AI",
  description: "Experience the power of personalized innovation with StellarMind.AI's custom software development services.",
};

function page() {
  const services = [
    {
      "image": "/serviceicon/Custom Software Development.png",
      "title" :"Custom Web Development",
      "desc":"Experience the future of sight with our cutting-edge Computer Vision solutions. Harness the power of advanced algorithms and image processing techniques. "
    },
    {
      "image": "/serviceicon/Custom Mobile App Development.png",
      "title" :"Custom Mobile App Development",
      "desc":" Our experienced developers and designers work closely with clients to create customized solutions that meet their needs and requirements."
    },
    {
      "image": "/serviceicon/Business Intelligence Services.png",
      "title" :"Business Intelligence Services",
      "desc":"Our team of experts uses the latest BI tools and technologies to provide customized solutions that address the unique needs of our clients."
    }
  ]
  const tabs = ['Mobile'  ,'Frontend', 'Backend','CMS'];
  const subHeading = [
    {
      point:
        "Unlock limitless possibilities with StellarMind as your partner in custom software development. We specialize in crafting tailored solutions that align perfectly with your unique business objectives and challenges.",
    },
    {
      point:
        "With a proven track record of exceeding client expectations, we thrive on challenges and excel in transforming ideas into reality.",
    },
    {
      point:
        "Collaborate with us to streamline processes, boost efficiency, and gain a competitive edge in today's digital landscape. Transform your vision into reality with StellarMind and redefine success through custom software excellence.",
    }
  ];  return (
   <div className='container'>
     <Heading mainHeading={"Custom Software Development"} subHeading={subHeading} imgUrl={"/custom sw development.jpg"} />
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
     <Tabs tabs={tabs} activetab={"Mobile"}/>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;
