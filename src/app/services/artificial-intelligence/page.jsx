import BrandSlider from "@/components/BrandSlider";
import CallToMeet from "@/components/CallToMeet";
import DynamicHeading from "@/components/DynamicHeading";
import Testimonial from "@/components/Testimonial";
import Heading from "@/components/servicepage/Heading";
import Industries from "@/components/servicepage/Industries";
import ServiceBox from "@/components/servicepage/ServiceBox";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import AI from "@/components/technologies/AI";
import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Unleash the Power of AI: Elevate Your Business with StellarMind.AI",
  description: "Dive into the realm of limitless possibilities with StellarMind.AI's cutting-edge AI services.Let us empower your business to thrive in the age of artificial intelligence.",
};
function page() {
  const services = [
    {
      image: "/serviceicon/Computer vision.png",
      title: "Computer Vision",
      desc: "Experience the future of sight with our cutting-edge Computer Vision solutions.",
    },
    {
      image: "/serviceicon/Nural Language Processing.png",
      title: "Neural Language Processing",
      desc: "Unlock the power of language with our innovative Natural Language Processing solutions.",
    },
    {
      image: "/serviceicon/Machine Learning Development.png",
      title: "Machine Learning Development",
      desc: " Our expert team harnesses the power of advanced algorithms and predictive analytics.",
    },
    {
      image: "/serviceicon/Ai Consulting.png",
      title: "AI Consulting",
      desc: "Empower your organization with expert AI consulting services tailored to your unique needs.",
    },
    {
      image: "/serviceicon/generativeai.png",
      title: "Generative AI",
      desc: "Designed and implemented an advanced generative AI web application that efficiently creates highly informative chatbot in a matter of minutes.",
    },
    {
      image: "/serviceicon/stablediffusion.png",
      title: "Stable Diffusion",
      desc: "Experience seamless diffusion with our reliable services, ensuring stability and consistent performance for your business needs.",
    },
    {
      image: "/serviceicon/aiAutomation.png",
      title: "AI-Powered Automation",
      desc: "Experience the future of automation with our cutting-edge AI-powered development services, driving efficiency in your business processes.",
    },
    {
      image: "/serviceicon/deep-learning.png",
      title: "Deep Learning Services",
      desc: " Unleash the full potential of deep learning services, revolutionizing how you leverage data and drive intelligent insights.",
    },
  ];
  const subHeading = [
    {
      point:
        "StellarMind specializes in cutting-edge AI and ML services tailored to revolutionize your business. We aim to create modern business opportunities for our clients in this data-enabled accelerating world via stellar AI development services.",
    },
    {
      point:
        "With our proven track record of delivering innovative AI solutions, we are your trusted partner in navigating the complexities of the digital age. Let's transform your vision into reality together.",
    },
    {
      point:
        "Partner with us to embark on a transformative journey towards unparalleled efficiency and strategic advantage in today's digital landscape. Experience the future of technology with StellarMind.",
    }
  ];

  return (
    <div className="container">
      <Heading
        mainHeading={"Artificial Intelligence & Machine Learning"}
        subHeading={subHeading}
        imgUrl={"/AI.avif"}
      />
      <DynamicHeading
        FirstContent={"Our"}
        FirstsubContent={"Trusted Partners"}
      />
      <BrandSlider />
      <DynamicHeading FirstContent={"Our"} FirstsubContent={"AI Services"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-[25px]">
        {services.map((item, index) => {
          return (
            <div key={index}>
              <ServiceBox
                image={item.image}
                title={item.title}
                desc={item.desc}
                index={index}
              />
            </div>
          );
        })}
      </div>
      <Industries />
      <DynamicHeading
        FirstContent={"AI-ML"}
        FirstsubContent={"Technologies"}
      />
      <AI/>
      <DynamicHeading
        FirstContent={"Don't just"}
        FirstsubContent={"take our words"}
        SecondContent={"People ❤️ "}
        SecondSubContent={"Us"}
      />
      <Testimonial />
      <CallToMeet />
    </div>
  );
}

export default page;
