import BrandSlider from '@/components/BrandSlider';
import CallToMeet from '@/components/CallToMeet';
import { CardBody, CardContainer, CardItem } from '@/components/Crad3dD';
import DynamicHeading from '@/components/DynamicHeading';
import Testimonial from '@/components/Testimonial';
import Heading from '@/components/servicepage/Heading';
import Industries from '@/components/servicepage/Industries';
import ServiceBox from '@/components/servicepage/ServiceBox';
import TestimonialSlider from '@/components/slider/TestimonialSlider';
import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";
export const metadata = {
  title: "Custom IoT Solutions | StellarMind - Innovating IoT & Cloud Integration",
  description: "Unlock the full potential of IoT with StellarMind’s cloud-based IoT development, connected devices, and smart automation solutions tailored for your enterprise.",
};
function page() {
  const services = [
    {
      "image": "/serviceicon/IoT Strategy Development.png",
      "title" :"IoT Strategy Development",
      "desc":"Develop a forward-thinking IoT strategy that evolves with your business, ensuring scalability, security, and long-term success."
    },
    {
      "image": "/serviceicon/Device and Sensor Integration.png",
      "title" :"Device and Sensor Integration",
      "desc":"Unlock the full potential of your ecosystem with our seamless device and sensor integration services."
    },
    {
      "image": "/serviceicon/Cloud Platform Integration.png",
      "title" :"Cloud Platform Integration",
      "desc":"Harness the power of cloud computing with seamless integration, allowing your IoT ecosystem to effortlessly scale."
    },
    {
      "image": "/serviceicon/Maintenance and Support service.png",
      "title" :"Maintenance and Support service",
      "desc":"Our dedicated team ensures your IoT infrastructure operates at peak performance by conducting regular proactive maintenance."
    }
  ]
  const subHeading = [
    {
      point:
        "StellarMind offers IoT development services to help businesses harness the power of the Internet of Things (IoT) to improve their operations and enhance their products and services.",
    },
    {
      point:
        "From smart device integration to real-time data analytics, our solutions drive efficiency, enhance decision-making and create seamless experiences for your customers.",
    },
    {
      point:
        "Partner with us to embark on a transformative journey toward a smarter, more connected tomorrow.",
    }
  ];  return (
   <div className='container'>
     <Heading mainHeading={"Internet of Things"} subHeading={subHeading} imgUrl={"/hire-team/iot.webp"} />
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
        FirstContent={"IOT"}
        FirstsubContent={"Technologies"}
      />
      <main className="flex justify-center px-[0px]">
      <div className="inline-block text-center">
        <button className="m-3">
          <Image
            src={"/techlogos/Raspberry pi.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/MQTT.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image src={"/techlogos/AMQP.png"} height={150} width={150} alt="" />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/DART.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/Android Thing.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/Azure IOT.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image src={"/techlogos/IBM Watson IoT,.png"} height={150} width={150} alt="" />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/Home Assistant.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
      </div>
    </main>
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;