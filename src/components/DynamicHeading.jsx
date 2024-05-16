import React from 'react';
import TubeLight from './TubeLight';
import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({
  weight:  ['400', "500","600",'700'],
  subsets: ['latin'],
  display: 'swap',
})
function DynamicHeading({FirstContent, FirstsubContent, SecondContent, SecondSubContent}) {
  return (
   <section className='py-[60px] font-semibold text-white'>
     <TubeLight/>
     <div className='relative z-[5] pt-[60px]'>
      <div className='flex justify-center'>
      <h1 className={`text-[35px] heading inline-block xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}>
        <span className=''> 
        {FirstContent} <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text ${playfair.className}`}>{FirstsubContent}</span>
        </span>
     </h1> 
      </div>
    
     { SecondContent &&
      <h1 className={`text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] mt-[10px] text-center  text-white`}>
        <span> 
        {SecondContent && SecondContent} <span className={`bg-gradient-to-r from-blue-600 to-green-500  inline-block text-transparent bg-clip-text ${playfair.className}`}>{SecondSubContent && SecondSubContent}</span>
        </span>
     </h1>
     }
     
    </div> 
    
   </section>
    )
}

export default DynamicHeading;
