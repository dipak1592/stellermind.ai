"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbSourceCode } from "react-icons/tb";
const Content = [
  {
    image: "/devops-consult-banner.webp",
    title: "Web Developer",
    skills: ["React js", "Node js", "Mongo DB", "Prisma", "Redux "],
  },
  {
    image: "/devops-consult-banner.webp",
    title: "Web Developer",
    skills: ["React js", "Node js", "Mongo DB", "Prisma", "Redux "],
  },
  {
    image: "/devops-consult-banner.webp",
    title: "Web Developer",
    skills: ["React js", "Node js", "Mongo DB", "Prisma", "Redux"],
  },
  {
    image: "/devops-consult-banner.webp",
    title: "Web Developer",
    skills: ["React js", "Node js", "Mongo DB", "Prisma", "Redux "],
  },
  {
    image: "/devops-consult-banner.webp",
    title: "Web Developer",
    skills: ["React js", "Node js", "Mongo DB", "Prisma", "Redux "],
  },
  {
    image: "/devops-consult-banner.webp",
    title: "Web Developer",
    skills: ["React js", "Node js", "Mongo DB", "Prisma", "Redux "],
  },
];

const HireDeveloperContent = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
    setFormSubmitted(false); // Reset form submission state whenever popup opens
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent actual form submission
    setFormSubmitted(true);
  };
  return (
    <div className={`relative container`}>
      <div className="grid text-white  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[70px]">
        {Content.map((item, index) => (
          <div key={index} className="border border-white bg-[#09090992] rounded-lg p-4 shadow-lg">
           
                <div className="flex-col flex items-center">
                <Image src={item.image} className="rounded-lg mb-2" alt={item.title} height={150} width={150} />  
            
            <h2 className="text-lg font-semibold mb-2 text-[#5C6BFF]">{item.title}</h2>
                </div>
            <hr />
            <ul className="pt-2 grid grid-cols-2 gap-2">
              {item.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className={`text-sm p-[5px] gap-1 flex justify-center rounded-md text-center ${skillIndex % 4 < 2 ? "bg-[#5c6cff4a]" : "bg-[#36353565]"}`}><MdOutlineWorkspacePremium className="mt-[3px]" /> {skill}</li>
              ))}
            </ul>
            <div className="flex justify-center">
            <button
            onClick={handleOpenPopup}
              className="py-2 mt-[20px] bg-[#363535be] hover:bg-black hover:border-white border-white border-solid border hover:border-solid hover:border px-4 bg- text-white font-medium rounded-xl"
            >
              Get Details
            </button>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="fixed z-[10] inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="bg-black model text-white border border-white rounded-lg p-[30px] max-w-sm w-full">
            <button onClick={() => setShowPopup(false)} className="float-right text-[25px] text-white font-extrabold"><RxCross2 /></button>
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-[#5C6BFF] flex items-center gap-2 underline underline-offset-8"><TbSourceCode className="text-white" /> Hire Developer</h2>
                <input className="w-full p-2 bg-black border-b text-[20px]" type="text" placeholder="Your Name" required />
                <input className="w-full p-2 bg-black border-b text-[20px]" type="email" placeholder="Your Email" required />
                <div className="w-full grid grid-cols-5 gap-2">
                  <select className="bg-black col-span-1 text-[20px] text-white border-b p-2" required>
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                  </select>
                  <input className="p-2 col-span-4 bg-black border-b" type="tel" placeholder="Phone Number" required />
                </div>
                <div className="flex justify-center"><button
            type="submit"
              className="py-2 bg-[#5c6cff4a] hover:bg-black hover:border-white border-white border-solid border hover:border-solid hover:border px-4 bg- text-white font-medium rounded-xl"
            >
              Submit
            </button></div>
                
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-lg font-semibold text-[#5C6BFF] mb-3">Thank You! We Have Received Your Inquiry !</h2>
                <hr />
                <p className="mt-3"> We Appreciate you for Trusting <Link className="text-blue-700 underline underline-offset-4" href="https://betasource.tech/">Betasource.</Link>  we will reach you out in 24 hrs.</p>
                <button onClick={() => setShowPopup(false)} className="bg-[#363535be] rounded-xl hover:bg-black hover:border-white border-white border-solid border hover:border-solid font-bold py-2 px-4 mt-4">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HireDeveloperContent;
