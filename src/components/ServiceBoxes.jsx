"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/Crad3dD";
import Link from "next/link";

function ServiceBoxes() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link href={"/services/artificial-intelligence"}>
          <CardContainer className="inter-var col-span-1">
            <CardBody className="bg-gradient-to-r from-[#3b83f631] to-[#00800038] relative group/card   border-black/[0.1] w-[100%] h-auto rounded-xl p-8 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                <h2 className="text-[25px] font-bold mb-[15px] text-blue-500">
                  AI/ML Services
                </h2>
              </CardItem>
              <hr />
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
              >
                Crafting the Intelligence That revolutionize the next
                generation.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <Image
                    src="/hire-team/AImlBox.webp"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                    <main className="flex justify-center">
                      <div className="inline-block text-center">
                        <button
                          className={`px-[20px] border border-white m-1 py-[8px] font-medium text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white">
                            Computer Vision
                          </span>
                        </button>
                        <button
                          className={`px-[20px] border border-white m-1 py-[8px] font-medium text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white">
                           NLP
                          </span>
                        </button>
                        <button
                          className={`px-[20px] border border-white m-1 py-[8px] font-medium text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white">
                            Machine Learning
                          </span>
                        </button>
                        
                      </div>
                    </main>
                  </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
        <Link href={"/services/internet-of-things"}>
          <CardContainer className="inter-var col-span-1">
            <CardBody className="bg-gradient-to-r from-[#3b83f631] to-[#00800038] relative group/card   border-black/[0.1] w-[100%] h-auto rounded-xl p-8 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                <h2 className="text-[25px] font-bold mb-[15px] text-blue-500">
                  Internet of Things
                </h2>
              </CardItem>
              <hr />
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
              >
                Envisioning a Smarter World where everything is connected.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <Image
                    src="/hire-team/iot.webp"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                    <main className="flex justify-center">
                      <div className="inline-block text-center">
                        <button
                          className={`px-[20px] m-1 py-[8px] font-medium border border-white text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white ">
                          Sensor Integration
                          </span>
                        </button>
                        <button
                          className={`px-[20px] m-1 py-[8px] font-medium border border-white text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white ">
                          Cloud Platform Integration
                          </span>
                        </button>
                        <button
                          className={`px-[20px] m-1 py-[8px] font-medium border border-white text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white">
                          Maintenance and Support service
                          </span>
                        </button>
                        
                      </div>
                    </main>
                  </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
        <Link href={"/services/augmented-reality"}>
          <CardContainer className="inter-var col-span-1">
            <CardBody className="bg-gradient-to-r from-[#3b83f631] to-[#00800038] relative group/card   border-black/[0.1] w-[100%] h-auto rounded-xl p-8 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                <h2 className="text-[25px] font-bold mb-[15px] text-blue-500">
                  Augmented Reality
                </h2>
              </CardItem>
              <hr />
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
              >
                Augmented Reality solutions that captivate and inspire.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <Image
                    src="/hire-team/ARVRBox.webp"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                    <main className="flex justify-center">
                      <div className="inline-block text-center">
                        <button
                          className={`px-[20px] m-1 py-[8px] border border-white font-medium text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white ">
                          AR Game Development
                          </span>
                        </button>
                        <button
                          className={`px-[20px] m-1 py-[8px] border border-white font-medium text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white ">
                          AR Testing
                          </span>
                        </button>
                        <button
                          className={`px-[20px] m-1 py-[8px] border border-white font-medium text-[16px] rounded-full bg-[#0b2248d8] text-white `}
                        >
                          <span className=" font-bold text-white ">
                          Custom AR Development
                          </span>
                        </button>
                        
                      </div>
                    </main>
                  </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
      </div>
    </div>
  );
}

export default ServiceBoxes;
