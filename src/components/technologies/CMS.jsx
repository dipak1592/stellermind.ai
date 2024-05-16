import Image from 'next/image';
import React from 'react'
import { DiAndroid } from "react-icons/di";
function CMS() {
  return (
    <main className="flex justify-center px-[20px]">
         <div className="inline-block text-center">
         
            <button className='m-3'>
            <Image src={"/techlogos/WordPress.png"} height={150} width={150} alt=''/>
            </button>
            <button className='m-3'>
            <Image src={"/techlogos/Magento.png"} height={150} width={150} alt=''/>
            </button>
            <button className='m-3'>
            <Image src={"/techlogos/salesforce.png"} height={150} width={150} alt=''/>
            </button>
            <button className='m-3'>
            <Image src={"/techlogos/odoo.png"} height={150} width={150} alt=''/>
            </button>
            <button className='m-3'>
            <Image src={"/techlogos/Shopify.png"} height={150} width={150} alt=''/>
            </button>
        </div>
      </main>
  )
}

export default CMS
