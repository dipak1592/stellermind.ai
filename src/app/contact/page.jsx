"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "@/components/scheduler/DatePicker";
import TimeSlotSelector from "@/components/scheduler/TimeSlotSelector";
import TimeZoneSelector from "@/components/scheduler/TimeZoneSelector";
import { LuShieldQuestion } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import Image from "next/image";
import TubeLight from "@/components/TubeLight";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [showErrPopup, setShowErrPopup] = useState(false);
  const [loading , setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    projectDescription: "",
  });
  const handleDaySelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeZoneSelection = (timeZone) => {
    setSelectedTimeZone(timeZone);
  };

  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handlePhoneChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      phoneNumber: value,
    }));
  };
  const [formerror, setFormError] = useState({});
  const validation = () => {
    let err = {};
    // we will validate each input field over here step by step
    //validation code
    if (formData.name === "") {
      err.name = "Please Enter Your Name!";
    } else {
      if (formData.name.length <= 1) {
        err.name = "Name should be atleast 2 character!";
      }
    }
    if (formData.email === "") {
      err.email = "Please Enter Your Email!";
    } else {
      let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!regex.test(formData.email)) {
        err.email = "Email not valid!";
      }
    }
    if (formData.phoneNumber) {
      let regex = /^\+?[1-9]\d{1,14}$/;
      if (!regex.test(formData.phoneNumber)) {
        err.phoneNumber = "Phone Number not Valid !";
      }
    }
    if (formData.projectDescription === "") {
      err.projectDescription = "Project Description Required!";
    } else {
      if (formData.projectDescription.length <= 1) {
        err.projectDescription = "Please enter Relevent Description!";
      }
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    let isvalid = validation();
    if (isvalid) {
      setLoading(true);
      fetch(
        "https://sourcing-techs-backend-sjyq.vercel.app/betasource/contact-form-1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "name" : formData.name,
            "email" : formData.email,
            "subject" :"",
            // "phoneNumber" : String(formData.phoneNumber),
            "message" : formData.projectDescription,
            // "meetingDate" : selectedDate,
            // "meetingTimeZone" : selectedTimeZone,
            // "meetingTime": selectedTimeSlot
          }),
        }
      ).then((res)=>{
        setLoading(false);
        console.log(res.json());
        setShowPopup(true);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          projectDescription: "",
        });
        setSelectedTimeSlot("");
        setSelectedTimeZone("");
      }).catch((error)=>{
        setShowErrPopup(true);
      })
      
    }
  };
  return (
    <>
    <section className="pb-[60px] font-semibold text-white">
        <TubeLight />
        <div className="relative flex justify-center z-[5] pt-[60px]">
          <h1
            className={`heading inline-block  text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}
          >
            <span>
              Get In Touch ; <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}>  Go Digital</span>
            </span>
          </h1>
        </div>
      </section>
    <div className="container">
      
      <div className="relative grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="mt-[50px] px-[20px] py-[25px] rounded-[25px] bg-[#1a1919ec]">
          <div className="flex items-center justify-center gap-2">
            <div className="text-white text-xl mb-7">
              <FaHandshake />
            </div>
            <h2 className="text-[20px] mb-7 heading text-center  font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              Brands We Proudly Served
            </h2>
            <div className="text-white text-xl mb-7">
              <FaHandshake />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/shyftlabs.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/exaze.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/kiwi.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/bluelogic.png"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/gspann.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/lsg.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/staqo.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/view.svg"}
                alt="brand"
                width={100}
                height={150}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/boomitra.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/kiwiqa-logo.png"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/uex.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/techtory.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/nurture.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>  
            <div className="flex items-center p-[15px] justify-center border border-gray-700">
              <Image
                src={"/brands/quickcam.svg"}
                alt="brand"
                width={120}
                height={200}
              />
            </div>  
          </div>
          {/* <div className="flex items-center pt-8 justify-center gap-2">
              <div className="text-white text-xl mb-7">
                <LuShieldQuestion />
              </div>
              <h2 className="text-[20px] underline underline-offset-8 mb-7 text-center  font-semibold text-[#5c6bff]">
                what will happen next
              </h2>
              <div className="text-white text-xl mb-7">
                <LuShieldQuestion />
              </div>
            </div> */}
          {/* <div>
              <p className="text-center text-white">
                We will get back to you within 24 hours.You are a step closer to
                building great software.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-[30px] gap-1 text-white">
                <div className="flex flex-col gap-1 items-center">
                  <span className="text-[30px] text-[#5c6bff]">
                    <PiNumberSquareOneFill />
                  </span>

                  <h5 className="text-center font-semibold  text-[18px]">
                    Free technical consultation
                  </h5>
                  <ul className="text-[#5c6bff]">
                    <li className="flex gap-1  font-medium">
                      <span className="text-white mt-[5px]">
                        <FaRegHandPointRight />
                      </span>
                      Detailed tech plan
                    </li>
                    <li className="flex gap-1  font-medium">
                      <span className="text-white mt-[5px]">
                        <FaRegHandPointRight />
                      </span>
                      Timeline
                    </li>
                    <li className="flex gap-1  font-medium">
                      <span className="text-white mt-[5px]">
                        <FaRegHandPointRight />
                      </span>
                      Budget of Project
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <span className="text-[30px] text-[#5c6bff]">
                    <PiNumberSquareTwoFill />
                  </span>

                  <h5 className="text-center font-semibold text-[18px]">
                    Connect with the tech team
                  </h5>
                  <ul className="text-[#5c6bff]">
                    <li className="flex gap-1  font-medium">
                      <span className="text-white mt-[5px]">
                        <FaRegHandPointRight />
                      </span>
                      Series of Calls
                    </li>
                    <li className="flex gap-1  font-medium">
                      <span className="text-white mt-[5px]">
                        <FaRegHandPointRight />
                      </span>
                      Frameworks Guide
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <span className="text-[30px] text-[#5c6bff]">
                    <PiNumberSquareThreeFill />
                  </span>

                  <h5 className="text-center font-semibold text-[18px]">
                    Onboarding the team
                  </h5>
                  <ul className="text-[#5c6bff]">
                    <li className="flex gap-1  font-medium">
                      <span className="text-white mt-[5px]">
                        <FaRegHandPointRight />
                      </span>
                      Completion of Project
                    </li>
                    <li className="flex gap-1  font-medium">
                      <span className="text-white mt-[5px]">
                        <FaRegHandPointRight />
                      </span>
                      Maintainance
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          <div className="flex items-center pt-8 justify-center gap-2">
            <div className="text-white text-xl mb-7">
              <LuShieldQuestion />
            </div>
            <h2 className="text-[20px] mb-7 text-center heading font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              Why StellarMind is first choice
            </h2>
            <div className="text-white text-xl mb-7">
              <LuShieldQuestion />
            </div>
          </div>
          <div className="grid items-start grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center mb-[10px] flex-col justify-center">
              <Image
                src={"/hire-team/pricing.png"}
                alt="brand"
                width={70}
                height={200}
              />
              <p className="text-blue-500 mt-[5px] font-semibold">Best Pricing</p>
            </div>
            <div className="flex items-center mb-[10px] flex-col justify-center">
              <Image
                src={"/hire-team/support.png"}
                alt="brand"
                width={70}
                height={200}
              />
              <p className="text-blue-500 mt-[5px]  font-semibold text-center">
                24/7 Live Support
              </p>
            </div>
            <div className="flex items-center mb-[10px] flex-col justify-center">
              <Image
                src={"/hire-team/Quality.png"}
                alt="brand"
                width={70}
                height={200}
              />
              <p className="text-blue-500 mt-[5px]  font-semibold text-center">
                Quality Service
              </p>
            </div>
            <div className="flex items-center mb-[10px] flex-col  justify-center">
              <Image
                src={"/hire-team/reputation.png"}
                alt="brand"
                width={70}
                height={200}
              />
              <p className="text-blue-500 mt-[5px]  text-center font-semibold">
                Reputation
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[25px] py-[25px] mt-[50px] bg-[#1a1919ec] px-[20px]">
          <div className="flex mb-8 items-center justify-center gap-2">
            <div className="text-white text-[40px] mb-4">
              <MdContacts />
            </div>
            <h2 className="text-[25px] heading mb-4 text-center font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              Reach Out and Revolutionize
            </h2>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name *
            </label>
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-3 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-[#5c6bff]"
              id="name"
              type="text"
              onChange={handleChange}
              value={formData.name}
              name="name"
              placeholder="Your Name"
            />
            <span className="text-red-700 text-[15px] font-semibold">
              {formerror.name}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 sm:gap-3">
            <div className="mb-4">
              <label
                className="block  text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your Email *
              </label>
              <input
                className="shadow bg-transparent appearance-none border rounded w-full py-3 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-[#5c6bff]"
                id="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                placeholder="Your Email"
              />
              <span className="text-red-700 text-[15px] font-semibold">
                {formerror.email}
              </span>
            </div>
            <div className="mb-4 phone-input">
              <label
                className="block  text-white text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Your Phone Number
              </label>
              <PhoneInput
              placeholder="Your Phone Number"
                id="phone"
                country={"us"}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                name="phoneNumber"
              />
              <span className="text-red-700 text-[15px] font-semibold">
                {formerror.phoneNumber}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="project"
            >
              About Project
            </label>
            <textarea
              className="shadow bg-transparent border rounded w-full py-3 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-[#5c6bff]"
              id="project"
              value={formData.projectDescription}
              onChange={handleChange}
              name="projectDescription"
              rows={5}
              placeholder="Describe about the Project"
            />
            <span className="text-red-700 text-[15px] font-semibold">
              {formerror.projectDescription}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-white text-xl mb-7">
              <SiGooglemeet />
            </div>
            <h2 className="text-[20px] heading mb-7 text-center  font-semibold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              Schedule Free Meeting With Us
            </h2>
            <div className="text-white text-xl mb-7">
              <SiGooglemeet />
            </div>
          </div>

          <DatePicker
            onSelectDate={handleDaySelection}
            selectedDate={selectedDate}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <TimeZoneSelector
              onSelectTimeZone={handleTimeZoneSelection}
              selectedTimeZone={selectedTimeZone}
            />
            <TimeSlotSelector
              onSelectTimeSlot={handleTimeSlotSelection}
              selectedTimeSlot={selectedTimeSlot}
            />
          </div>
          <div className="flex mt-[50px] justify-center">
            <button
              onClick={handlesubmit}
              className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded"
            >
              {loading ? "Sending..." : "Submit" }
              
            </button>
          </div>
        </div>
      </div>
      {showPopup && 
        <div className="fixed z-[10] inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="bg-black model text-white border border-white rounded-lg p-[30px] max-w-sm w-full">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-green-700 mb-3">Thank You! We Have Received Your Inquiry !</h2>
                <hr />
                <p className="mt-3"> We Appreciate you for Trusting <Link className="text-blue-700 underline underline-offset-4" href="https://betasource.tech/">StellarMind.</Link>  we will reach you out in 24 hrs.</p>
                <div className="mt-3 flex justify-center">
                <button onClick={() => setShowPopup(false)} className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
                  Close
                </button>
                </div>
               
              </div>
           
          </div>
        </div>
      
    }
      {
        showErrPopup &&
        <div className="fixed z-[10] inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="bg-black model text-white border border-white rounded-lg p-[30px] max-w-sm w-full">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-red-700 mb-3">Failed to Send Message!</h2>
                <hr />
                <p className="mt-3">You can try later or Contact us on <Link className="text-blue-700 underline underline-offset-4" href="mailto:info@betasource.tech">info@betasource.tech</Link> or  <Link className="text-blue-700 underline underline-offset-4" href="tel:+917863889382">+91 786 3889 382</Link>. we will reach you out in 24 hrs.</p>
                <button onClick={() => setShowErrPopup(false)} className="bg-[#363535be] rounded-xl hover:bg-black hover:border-white border-white border-solid border hover:border-solid font-bold py-2 px-4 mt-4">
                  Close
                </button>
              </div>
           
          </div>
        </div>
      }
        
      
    </div>
    </>

    
    
  );
}

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StellarMind",
    "url": "https://stellarmind.ai/",
    "logo": "https://stellarmind.ai/betalogo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+917863889382,+16506670749",
      "email": "info@stellarmind.ai",
      "areaServed": "IN,USA",
      "availableLanguage": "English",
    },
    "address": {
      "@type": "A-1602 Privillon, Ambli ,Iskon cross road, Ahmedabad, Gujarat 380054",
      "addressLocality": "Ahemdabad",
      "addressRegion": "Gujarat",
      "postalCode": "380054",
      "addressCountry": "IN",
    },
    "description": "StellarMind provides innovative digital solutions and consultation services. We are committed to delivering quality service and support. Reach out to us to revolutionize your digital experience.",
    "sameAs": [
      "https://www.facebook.com/stellarmind.ai",
      "https://twitter.com/stellarmind.ai",
      "https://www.linkedin.com/stellarmind.ai",
    ],
    "contactPage": "https://stellarmind.ai/contact",
  }),
}}
/>


export default Contact;
