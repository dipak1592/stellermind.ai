'use client'
import Image from 'next/image';
import React from 'react';

const LOGOS = [
 "/brands/jetapo.svg",
 "/brands/shyftlabs.svg",
 "/brands/exaze.svg",
 "/brands/kiwi.svg",
 "/brands/gspann.svg",
 "/brands/lsg.svg",
 "/brands/staqo.svg",
 "/brands/view.svg",
 "/brands/bluelogic.png",
 "/brands/boomitra.svg",
 "/brands/kiwiqa-logo.png",
 "/brands/uex.svg",
 "/brands/techtory.svg",
 "/brands/nurture.svg",
 "/brands/quickcam.svg"
];

function BrandSlider() {
  return (
    <div className="container">
    <div className="relative m-auto w-[100%] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*17)] gap-5">
        {LOGOS.map((logo, index) => (
          <div
            className="text-white mx-1 slide flex items-center justify-center"
            key={index}
          >
            <Image
            src={logo}
            alt="brand"
            width={200}
            height={200}

            />
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="text-white slide mx-1 flex w-[100px] items-center justify-center"
            key={index}
          >
           <Image
            src={logo}
            alt="brand"
            width={200}
            height={200}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
   
  )
}

export default BrandSlider
