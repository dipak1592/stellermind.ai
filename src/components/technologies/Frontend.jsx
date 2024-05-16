import Image from 'next/image'
import React from 'react'
function Frontend() {
  return (
    <main className="flex justify-center px-[20px]">
    <div className="inline-block text-center">
    {/* Front End:  Angular, React js, Three JS, View Js, Next, Unity 3D - 6 */}
       <button className='m-3'>
       <Image src={"/techlogos/Angular.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/ReactJS.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/ThreeJS.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/ViewJS.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/Next.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/Unity 3D.png"} height={150} width={150} alt=''/>
       </button>
   </div>
 </main>
  )
}

export default Frontend
