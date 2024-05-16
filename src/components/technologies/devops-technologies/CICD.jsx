import Image from 'next/image'
import React from 'react'

function CICD() {
  return (
    <main className="flex justify-center px-[20px]">
    <div className="inline-block text-center">
 
       <button className='m-3'>
       <Image src={"/techlogos/jenkins.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/gitlab.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/travisCI.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/circleCI.png"} height={150} width={150} alt=''/>
       </button>
       <button className='m-3'>
       <Image src={"/techlogos/github.png"} height={150} width={150} alt=''/>
       </button>
   </div>
 </main>
  )
}

export default CICD
