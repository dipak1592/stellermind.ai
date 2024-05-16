"use client"
import React from 'react'
import DynamicHeading from '../DynamicHeading'
import { useState } from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import ARVR from './ARVR';
import AI from './AI';
import CMS from './CMS';
import Mobile from './Mobile';
function Tabs({tabs,activetab}) {
   
    const [activeTab, setActiveTab] = useState(activetab);
    const TechContent = () => {
      switch (activeTab) {
        case 'AR':
          return <ARVR/>;
        case 'Backend':
          return <Backend/>;
        case 'Frontend':
          return <Frontend/>;
        case 'CMS':
          return <CMS/>;
        case 'Mobile':
          return <Mobile/>;
        default:
          return <AI/>;
      }
    };
  return (
    <>
      <DynamicHeading FirstContent={"Technologies"} FirstsubContent={"We Work With"}/>
      <div className="text-white container">
      <main className="flex justify-center">
        <div className="inline-block text-center gap-4 mb-8 rounded-md border border-gray-600">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium text-[20px] rounded-[2px] ${activeTab === tab ? 'bg-[#3b83f631] border-b-[2px] border-blue-500 text-white' : ' text-white'} `}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
         
        </div>
      </main>
      <TechContent />
    </div>
    </>
  )
}

export default Tabs
