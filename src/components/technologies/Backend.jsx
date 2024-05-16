import React from 'react'
import Image from 'next/image';
function Backend() {
  return (
    <main className="flex justify-center px-[20px]">
    <div className="inline-block text-center">
    {/* Django, Go Lang, ASP.NET, JAVA, PHP, Node.js, Laravel.*/}
       <button className='m-3'>
       <Image src={"/techlogos/django.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/GoLang.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/ASP.NET.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/JAVA.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/PHP.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/nodeJS.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/Laravel.png"} height={150} width={150} alt=''/>
       </button>
   </div>
 </main>
  )
}

export default Backend
