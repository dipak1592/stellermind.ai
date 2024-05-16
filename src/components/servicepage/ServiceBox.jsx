import React from 'react'
import { CardBody, CardContainer, CardItem } from '../Crad3dD'
import Image from 'next/image'

function ServiceBox({image, title, desc, index}) {
    const backgroundColor = index % 2 === 0 ? "bg-gradient-to-r from-[#3b83f631] to-[#00800038]" : "bg-[#36353565]";
  return (
    <div>
       <CardContainer className={`${backgroundColor} h-[440px] rounded-xl`}>
            
            <CardBody className={` relative group/card border-black/[0.1] w-[100%] h-auto  p-8 border `}>
            <CardItem translateZ="100" className="my-5">
              <Image
              src={image}
              alt=''
              width={80}
              height={80}
              />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-[20px] mb-[10px] font-bold text-blue-500 dark:text-white"
              >
                {title}
              </CardItem>
              <hr />
              <CardItem
                as="p"
                translateZ="60"
                className="text-[#ffffffa4] font-semibold text-[18px] max-w-sm mt-2 dark:text-neutral-300"
              >
                {desc}
              </CardItem>
              
            </CardBody>
       
       </CardContainer>
    </div>
  )
}

export default ServiceBox
