import React from 'react'
import Image from 'next/image';
function Mobile() {
  return (
    <main className="flex justify-center px-[20px]">
    <div className="inline-block text-center">
    
       <button className='m-3'>
       <Image src={"/techlogos/ios.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/android.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/flutter.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/React Native.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/ionic.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/PhoneGap.png"} height={150} width={150} alt=''/>
       </button>
   </div>
 </main>
  )
}

export default Mobile
