"use client";
import React from "react";
import "./slider.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { RxCross2 } from "react-icons/rx";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
function TestimonialSlider() {
  const [showPopup, setShowPopup] = useState(false);

  const testimonialData = [
    {
      ytvideo: "",
      text: "We are very happy with the progress of the mobile app and Web applications for our software. We would like to continue our relationship with more projects with StellarMind.",
      photo: "/testimonial/Jordan.png",
      name: "Jorden Kelin",
      designation: "CEO Ghost PXL"
    },
    {
      ytvideo: "",
      text: "We have been a customer of StellarMind for seven years. They are cost-effective, their work has been of high quality, efficient, consistent and reliable.",
      photo: "/testimonial/Henry-11.jpg",
      name: "Henry Pena",
      designation: "Director, Pomanager, LLC",
    },
    {
      ytvideo: "",
      text: "I have reviewed the code provided and I'm very pleased with the work your team delivered. It was exactly what I requested,Great Team.",
      photo: "/testimonial/Solomon.png",
      name: "Soloman Viveros",
    },
    {
      ytvideo: "",
      text: "Ronak and team are very professional and worked flexibly on our project. He has managed communicating with the project developers to get the work done.",
      photo: "/testimonial/maha.png",
      name: "Maha Vangla",
      designation: "Director AOF Eng.",
    },
    {
      ytvideo: "",
      text: "I couldn't thank StellarMind more in terms of giving valuable suggestions. They were always available for discussion. The core strengths of StellarMind are their expertise, patience, and Dedicated team. ",
      photo: "/testimonial/Tom.png",
      name: "Tom Bryant",
      designation: "CEO, Quickcam LLC",
    },{
      ytvideo: "",
      text: "They understood our idea, had proper timelines, and offered innovative suggestions for our software. You can depend on their creativity, expertise, and reliable service to complete your project.",
      photo: "/testimonial/Bola.png",
      name: "Bola Adejobi",
      designation: "CEO Gatekrasher",
    },
  ];
  return (
    <>
      {showPopup && (
        <div className="fixed z-[10] inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className=" text-white relative border bg-black border-gray-600 p-[30px] w-[600px] h-[400px]">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-3 top-3"
            >
              <RxCross2 />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Jw7s42Op2ao?si=Ioti2FI7rCWp4iC9"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      )}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2000,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: -30,
          stretch: 5,
          depth: 400,
          modifier: 1,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="swiper_container"
      >
        {testimonialData.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="h-[100%] flex items-center slide-testimonial rounded-xl p-[20px] bg-black text-white">
              <div className="sm:grid sm:grid-cols-5 gap-4">
                <div className="relative pb-3 sm:pb-0 sm:col-span-2">
                <span onClick={()=>{setShowPopup(true)}} className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[50px] text-[#ffffff64] z-40">
                {
                  item.ytvideo && <MdOutlineSlowMotionVideo />
                }
                  
                  
                </span> 
                  <Image
                    className="rounded-lg"
                    src={item.photo}
                    width={300}
                    height={300}
                    
                    alt=""
                  />
                </div>
                <div className="sm:col-span-3 relative">
                  <p className="font-medium">
                    <span className="absolute left-[-15px]">
                      <Image
                        className="text-[#5c6cff4a]"
                        src={"/Quets.svg"}
                        width={50}
                        height={50}
                        alt=""
                      />
                    </span>
                    {item.text}
                  </p>
                  <div className="grid items-center mt-[10px]">
                    <h6 className="text-blue-500 text-[20px] font-semibold">
                      {item.name}
                    </h6>
                    <p className="text-gray-400 text-[15px]">
                     {item.designation?item.designation :""}
                    </p>
                  </div>
                </div>
              </div>
              </div>
              
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}

export default TestimonialSlider;
