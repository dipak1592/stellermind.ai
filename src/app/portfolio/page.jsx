"use client";
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
  const tabs = ['All', 'AI/ML', 'UNITY', 'AR', 'WEB', 'MOBILE'];

  const PortfolioContent = () => {
    switch (activeTab) {
      case 'WEB':
        return <Web />;
      case 'AI/ML':
        return <AIML />;
      case 'MOBILE':
        return <MobileApp />;
      case 'UNITY':
        return <UNITY />;
      case 'AR':
        return <AR />;
      default:
        return <All />;
    }
  };

  return (
    <>
      <section className="pb-[40px] font-semibold text-white">
        <TubeLight />
        <div className="relative flex justify-center z-[5] pt-[60px]">
          <h1
            className="heading inline-block text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center text-white"
          >
            Discover Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              Digital Solutions
            </span>
          </h1>
        </div>
      </section>
      <div className="text-white container relative">
        <main className="flex justify-center">
          <div className="inline-block text-center gap-4 mb-8 rounded-md border border-gray-600">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 font-medium text-[20px] rounded-[2px] ${
                  activeTab === tab
                    ? 'bg-[#3b83f631] border-b-[2px] border-blue-500 text-white'
                    : 'text-white'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </main>
        <PortfolioContent />
      </div>
      {/* JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Stellarmind AI Portfolio - Showcase of Cutting-Edge AI and IoT Solutions",
            "description": "Explore Stellarmind AI’s portfolio of innovative projects in AI, ML, IoT, and cloud computing. Discover our success stories.",
            "url": "https://stellarmind.ai/portfolio",
            "mainEntity": {
              "@type": "WebPage",
              "name": "Digital Solutions Portfolio",
              "description": "Our portfolio includes a range of digital solutions such as AI/ML projects, Unity applications, Augmented Reality experiences, Web development projects, and Mobile apps.",
              "url": "https://stellarmind.ai/portfolio",
            },
            "hasPart": tabs.map((tab) => ({
              "@type": "CreativeWork",
              "name": tab,
              "description": `A section dedicated to ${tab} projects and solutions.`,
            })),
          }),
        }}
      />
    </>
  );
}
