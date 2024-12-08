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
export const metadata = {
  title: "Unity AI Solutions | StellarMind - Cutting-Edge AI for Real-Time Applications",
  description: "Develop immersive experiences with StellarMind’s Unity AI solutions, bringing AI/ML innovation to real-time 3D applications and interactive environments.",
};

function page() {
  const services = [
    {
      "image": "/serviceicon/3dDesignAni.png",
      "title" :"3D Design & Animation",
      "desc":" Immerse your audience in captivating visual experiences with our exceptional 3D design and animation services."
    },
    {
      "image": "/serviceicon/engineGame.png",
      "title" :"Unreal Engine Game Development",
      "desc":" Elevate your gaming experience with our top-tier Unreal Engine game development services."
    },
    {
      "image": "/serviceicon/unity3dGame.png",
      "title" :"Unity 3D Game Development",
      "desc":"Transform your gaming vision into reality with our cutting-edge Unity 3D game development services."
    }
  ]
  const subHeading = [
    {
      point:
        "Embark on a groundbreaking journey in Unity AI development with StellarMind. We specialize in harnessing the power of Unity's cutting-edge technologies to create intelligent, interactive experiences.",
    },
    {
      point:
        "Partner with us to integrate AI seamlessly into your Unity projects, enhancing realism, engagement, and player interactions.",
    },
    {
      point:
        "Revolutionize your games and simulations with StellarMind and lead the way in AI-driven experiences.",
    }
  ];  return (
   <div className='container'>
     <Heading mainHeading={"Unity Development"} subHeading={subHeading} imgUrl={"/unitydev.jpg"}/>
     <DynamicHeading FirstContent={"Our"} FirstsubContent={"Trusted Partners"}/>
      <BrandSlider/>
      <DynamicHeading FirstContent={"Our"} FirstsubContent={"AI Services"}/>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[50px]'>
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
     <DynamicHeading FirstContent={"Don't just"} FirstsubContent={"take our words"} SecondContent={"People ❤️ "} SecondSubContent={"Us"}/>
     <Testimonial />
     <CallToMeet/>
   </div>
  )
}

export default page;