import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmojiObjects } from "react-icons/md";
import Link from "next/link";
function CallToMeet() {
  return (
    
      <div className="mt-[60px] flex flex-col gap-3 items-center sm:text-[25px] md:text-[30px]  text-[18px] font-bold rounded-xl bg-[#1a1919ec] p-[30px]">
          <div className="text-yellow-300 mt-[5px] text-[50px] border border-gray-500 rounded-full p-2">
            <MdEmojiObjects />
          </div>
          <div className=" flex gap-4 items-start">
            <span className="bg-gradient-to-r text-center from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              {
                "Any Project In your Mind ? Schedule Meeting with us Right Now !" 
              }
            </span>
          </div>
          <div className=" flex justify-center">
            <Link href={"/contact"}>
              <button className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
                Schedule Meeting <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
    
  )
}

export default CallToMeet
