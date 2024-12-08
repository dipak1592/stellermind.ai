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
    {/* <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://stellarmind.ai/portfolio"
            },
            "headline": "Our AI/ML and IoT Success Stories | StellarMind Portfolio",
            "description": "View StellarMind's portfolio showcasing custom IoT and AI applications, mobile apps with AI/ML integration, and scalable cloud solutions that drive business transformation.",
            "author": {
              "@type": "Organization",
              "name": "StellarMind"
            },
            "publisher": {
              "@type": "Organization",
              "name": "StellarMind",
              "logo": {
                "@type": "ImageObject",
                "url": "https://stellarmind.ai/betalogo.png"
              }
            },
            "blogPost": tabs.map(tab => ({
              "@type": "portfolioPosting",
              "headline": `${tab.name} portfolio Posts`,
              "url": `https://stellarmind.ai/portfolio/${tab.name.toLowerCase()}`,
              "description": `Find the latest ${tab.name} portfolio posts at StellarMind.`,
              "author": {
                "@type": "Organization",
                "name": "StellarMind"
              },
              "publisher": {
                "@type": "Organization",
                "name": "StellarMind",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://stellarmind.ai"
                }
              }
            }))
          })}
        </script>
      </Head> */}

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
            "name": "Our AI/ML and IoT Success Stories | StellarMind Portfolio",
            "description": "View StellarMind's portfolio showcasing custom IoT and AI applications, mobile apps with AI/ML integration, and scalable cloud solutions that drive business transformation.",
            "url": "https://stellarmind.ai/portfolio",
            "mainEntity": {
              "@type": "WebPage",
              "name": "Our AI/ML and IoT Success Stories | StellarMind Portfolio",
              "description": "View StellarMind's portfolio showcasing custom IoT and AI applications, mobile apps with AI/ML integration, and scalable cloud solutions that drive business transformation.",
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
