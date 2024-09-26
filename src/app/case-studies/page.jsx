import React from 'react';
import Link from 'next/link';
import caseStudiesData from '../data/caseStudiesData'; // Assuming this is your data file
import TubeLight from '@/components/TubeLight';

export default function CaseStudies() {
  // Schema properties for the entire case studies page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI/ML and IoT Case Studies | StellarMind - Proven Results",
    "description": "Explore detailed case studies of AI-driven automation services, IoT-enabled cloud computing, and business process automation with AI/ML, all powered by StellarMind's expertise.",
    "url": "https://stellarmind.ai/case-studies",
    "mainEntity": {
      "@type": "WebPage",
      "name": "AI/ML and IoT Case Studies | StellarMind - Proven Results",
      "description": "Explore detailed case studies of AI-driven automation services, IoT-enabled cloud computing, and business process automation with AI/ML, all powered by StellarMind's expertise.",
      "url": "https://stellarmind.ai/case-studies",
    },
    "hasPart": caseStudiesData.map((study) => ({
      "@type": "CreativeWork",
      "name": study.title,
      "description": study.description,
      "url": `https://stellarmind.ai/case-studies/${study.slug}`,
    })),
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Case Study Section Heading */}
        <section className="pb-[40px] font-semibold text-white">
          <TubeLight />
          <div className="relative flex justify-center z-[5] pt-[60px]">
            <h1 className="heading inline-block text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center text-white">
              Case{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
                Studies
              </span>
            </h1>
          </div>
        </section>

        {/* Case Studies Grid List */}
        <section className="wp-casestudies-list py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudiesData.map((study) => (
                <div key={study.slug} className="col-span-1">
                  <div className="wp-casestudies-thumb bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative">
                      <div className="case-study-bg absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-30"></div>
                      <div className="case-study-wrap relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="img-block">
                          <Link href={`/case-studies/${study.slug}`}>
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-60 object-cover"
                            />
                          </Link>
                        </div>
                        <div className="content-block p-6">
                          <Link href={`/case-studies/${study.slug}`}>
                            <h4 className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-bold mt-2 mb-2 md:mt-2 md:mb-2 text-xl md:text-2xl lg:text-xl">
                              {study.title}
                            </h4>
                          </Link>
                          <p className="text-white dark:text-gray-300 mt-2">
                            {study.description}
                          </p>
                          <Link href={`/case-studies/${study.slug}`}>
                            <button className="text-blue-500 md:text-xl lg:text-sm cursor-pointer">
                              <u>Read more</u>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD schema for the case studies */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
