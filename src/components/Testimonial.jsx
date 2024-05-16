import React from 'react'
import TestimonialSlider from './slider/TestimonialSlider'
import Image from 'next/image'


function Testimonial() {
  return (
    <>
    <div>
    <div className='testimonial-map hidden sm:block'>
    </div>
    <div className='container lg:px-[100px]'>
      <TestimonialSlider/>
    </div>
    </div>
    </>
    
  )
}

export default Testimonial

