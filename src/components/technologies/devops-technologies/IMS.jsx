import Image from 'next/image'
import React from 'react'

function IMS() {
  return (
    <main className="flex justify-center px-[20px]">
   <div className="inline-block text-center">
 

    <button className='m-3'>
    <Image src={"/techlogos/ansible.png"} height={150} width={150} alt=''/>
    </button>
    
    <button className='m-3'>
    <Image src={"/techlogos/terraform.png"} height={150} width={150} alt=''/>
    </button>
    <button className='m-3'>
    <Image src={"/techlogos/puppet.png"} height={150} width={150} alt=''/>
    </button>
    <button className='m-3'>
    <Image src={"/techlogos/chef.png"} height={150} width={150} alt=''/>
    </button>
    <button className='m-3'>
    <Image src={"/techlogos/aws.png"} height={150} width={150} alt=''/>
    </button>
    <button className='m-3'>
    <Image src={"/techlogos/azure.png"} height={150} width={150} alt=''/>
    </button>
    <button className='m-3'>
    <Image src={"/techlogos/googlecloud.png"} height={150} width={150} alt=''/>
    </button>
</div>
 </main>
  )
}

export default IMS
