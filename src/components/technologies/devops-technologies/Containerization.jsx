import Image from 'next/image'
import React from 'react'

function Containerization() {
  return (
    <main className="flex justify-center px-[20px]">
    <div className="inline-block text-center">
 
 
    <button className='m-3'>
    <Image src={"/techlogos/kubernetes.png"} height={150} width={150} alt=''/>
    </button>
    <button className='m-3'>
    <Image src={"/techlogos/docker.png"} height={150} width={150} alt=''/>
    </button>
    <button className='m-3'>
    <Image src={"/techlogos/dockerSwarm.png"} height={150} width={150} alt=''/>
    </button>

    
</div>
 </main>
  )
}

export default Containerization
