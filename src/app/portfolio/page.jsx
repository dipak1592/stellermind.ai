"use client"
import AIML from '@/components/Portfolios/AIML';
import AR from '@/components/Portfolios/AR';
import All from '@/components/Portfolios/All';
import MobileApp from '@/components/Portfolios/MobileApp';
import UNITY from '@/components/Portfolios/UNITY';
import Web from '@/components/Portfolios/Web';
import TubeLight from '@/components/TubeLight';
import { useState } from 'react';
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'AI/ML','UNITY','AR','WEB','MOBILE'];

  const PortfolioContent = () => {
    switch (activeTab) {
      case 'WEB':
        return <Web/>;
      case 'AI/ML':
        return <AIML/>;
      case 'MOBILE':
        return <MobileApp/>;
      case 'MOBILE':
        return <MobileApp/>;
      case 'UNITY':
        return <UNITY/>;
      case 'AR':
        return <AR/>;
      default:
        return <All/>;
    }
  };

  return (
    <>
    <section className="pb-[40px] font-semibold text-white">
        <TubeLight />
        <div className="relative flex justify-center z-[5] pt-[60px]">
          <h1
            className={`heading inline-block  text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}
          >
            <span>
              Discover Our <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}>Digital Solutions</span>
            </span>
          </h1>
        </div>
      </section>
      <div className="text-white container relative">
      <main className="flex justify-center">
        <div className="inline-block text-center gap-4 mb-8 rounded-md border border-gray-600">
          {tabs.map((tab , index) => (
            <button
              key={index}
              className={`px-4 py-2 font-medium text-[20px] rounded-[2px] ${activeTab === tab ? 'bg-[#3b83f631] border-b-[2px] border-blue-500 text-white' : ' text-white'} `}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </main>
      <PortfolioContent />
    </div>
    </>
  );
}
