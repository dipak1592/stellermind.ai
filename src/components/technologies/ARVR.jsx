import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";
function ARVR() {
  return (
    <main className="flex justify-center px-[20px]">
    <div className="inline-block text-center">
 
       <button className='m-3'>
       <Image src={"/techlogos/ARKIT.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/ARUNITY.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/ARCORE.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/Wikitude.png"} height={150} width={150} alt=''/>
       </button>
   </div>
 </main>
  )
}

export default ARVR;

