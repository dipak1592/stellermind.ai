"use client"
import TubeLight from '@/components/TubeLight'
import AIMLBlog from '@/components/blogs/AIMLBlog';
import ALLBlog from '@/components/blogs/ALLBlog';
import ARBlog from '@/components/blogs/ARBlog';
import DevOpsBlog from '@/components/blogs/DevOpsBlog';
import IOTBlog from '@/components/blogs/IOTBlog';
import SoftwareDevBlog from '@/components/blogs/SoftwareDevBlog';
import React, { useState } from 'react'
import Head from "next/head";


export default function Blog() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = [{
    name:"All",
    background: "",
    border :""
  }, {
    name:"AI/ML",
    background: "",
    border :""
  },{
    name:"IOT",
    background: "",
    border :""
  },{
    name:"AR",
    background: "",
    border :""
  },{
    name:"Software",
    background: "",
    border :""
  },{
    name:"DevOps",
    background: "",
    border :""
  },];
  
  const BlogContent = () => {
    switch (activeTab) {
      case 'AI/ML':
        return <AIMLBlog/>;
      case 'IOT':
        return <IOTBlog/>;
      case 'AR':
        return <ARBlog/>;
      case 'Software':
        return <SoftwareDevBlog/>;
      case 'DevOps':
        return <DevOpsBlog/>;
      default:
        return <ALLBlog/>;
    }
  };
  return (
    <>
     <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://stellarmind.ai/blog"
            },
            "headline": "Stellarmind AI Blog - Insights on AI, ML, IoT and Cloud Development",
            "description": "Stay updated with Stellarmind AI’s latest insights on AI, ML, IoT, and automation. Discover innovations driving enterprise transformation.",
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
              "@type": "BlogPosting",
              "headline": `${tab.name} Blog Posts`,
              "url": `https://stellarmind.ai/blog/${tab.name.toLowerCase()}`,
              "description": `Find the latest ${tab.name} blog posts at StellarMind.`,
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
      </Head>

       <section className=" font-semibold text-white">
        <TubeLight />
        <div className="relative flex justify-center z-[5] pt-[60px]">
          <h1
            className={`heading inline-block  text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}
          >
            <span>
              {"StellarMind's"} <span className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}>Blog Universe</span>
            </span>
          </h1>
        </div>
        
      </section>
      <div className="container">
      <p className="text-center relative mt-5 text-white text-[18px]">
            Discover the latest insights, expert tips, and industry trends in
            AI/ML, software development, DevOps integration, cloud solutions,
            and more with {"StellarMind's"} comprehensive blog. Stay ahead in the
            fast-paced world of technology and empower your business to thrive
            with our innovative services.
      </p>

      <main className="flex flex-row justify-center mt-[30px]">
        <div className="inline-block text-center sm:flex gap-2 md:gap-6 mb-8">
          {tabs.map((tab , index) => (
            <button
              key={index}
              className={`md:px-6 px-3 py-2 m-1 font-medium bg-[#3b83f631] text-[20px] rounded-[12px] ${activeTab === tab.name ? ' border-[2px] border-blue-500 text-white' : ' text-white'} `}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </main>
      <BlogContent/>
      </div>
    </>
  )
}

