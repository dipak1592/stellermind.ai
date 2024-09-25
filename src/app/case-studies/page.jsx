import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import caseStudiesData from '../data/caseStudiesData'; // Assuming this is your data file
import TubeLight from '@/components/TubeLight';
export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - StellarMind AI Solutions</title>
        <meta
          name="description"
          content="Explore case studies of StellarMind AI solutions in IoT, AR apps, video editing tools, and IoT capabilities for enterprises."
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Case Study Section Heading */}
        <section className="pb-[40px] font-semibold text-white">
        <TubeLight />
        <div className="relative flex justify-center z-[5] pt-[60px]">
          <h1
            className="heading inline-block text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center text-white"
          >
            Case{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
            Studies
            </span>
          </h1>
        </div>
      </section>

        {/* New Case Studies List */}
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
    </>
  );
}
