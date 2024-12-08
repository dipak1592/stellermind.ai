"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import caseStudiesData from "../../data/caseStudiesData";
import IotwithERP from "@/components/caseStudy/IotwithERP";
import InteractiveARChildren from "@/components/caseStudy/InteractiveARChildren";
import AdvancedPhotoandVideo from "@/components/caseStudy/AdvancedPhotoandVideo";
import EnhancingIoTCapabilities from "@/components/caseStudy/EnhancingIoTCapabilities";

export default function CaseStudyDetail() {
  const { slug } = useParams();

  // Find the case study data based on the slug
  const caseStudy = caseStudiesData.find((study) => study.slug === slug);

  if (!caseStudy) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">Case Study Not Found</h2>
        <p className="text-gray-500">The case study you are looking for does not exist.</p>
      </div>
    );
  }

  // Find related case studies
  const relatedCaseStudies = caseStudiesData.filter(study => study.slug !== slug).sort(() => Math.random() - 0.5).slice(0, 3); // Get a maximum of 3 related studies

  // Render the case study specific component
  const renderCaseStudyComponent = () => {
    switch (slug) {
      case "iot-integration-with-erp":
        return <IotwithERP />;
      case "interactive-ar-educational-app":
        return <InteractiveARChildren />;
      case "advanced-photo-and-video-editing":
        return <AdvancedPhotoandVideo />;
      case "enhancing-iot-capabilities":
        return <EnhancingIoTCapabilities />;
      default:
        return null;
    }
  };

  return (
    <div className="text-white">
      <div className="py-2 text-center md:text-left overflow-hidden md:w-[60%] lg:w-[60%] mx-auto">
        <div className="w-[100%] m-2 gap-2 text-white">
          <h3 className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-bold mt-2 mb-2 md:mt-2 md:mb-2 md:text-[40px] text-[20px md:text-left text-center">
            {caseStudy.title}
          </h3>
        </div>

        <div className="w-full place-items-center">
          <Image
            width={1000}
            height={300}
            src={caseStudy.image}
            alt={caseStudy.title}
            className="rounded-[20px] p-1 md:p-2 lg:p-3"
          />
        </div>
      </div>

      <div className="blogcontent md:w-[60%] lg:w-[60%] mx-auto md:text-left text-center">
        <div className="mb-2 md:text-xl md:text-[18px] text-[15px]">
          <div dangerouslySetInnerHTML={{ __html: caseStudy.content }}></div>
        </div>
      </div>

      <div className="mt-12 place-items-center">
        <h2 className="text-3xl font-bold text from-green-800 to-blue-800 mb-8 text-center">Project Highlights</h2>
      </div>

      <div className="py-2 text-center md:text-left overflow-hidden md:w-[60%] lg:w-[60%] mx-auto">
        <div className="w-[100%] m-2 gap-2 text-white">
          <h2 className="text-3xl font-bold text  green-800 ">Client Overview</h2>
          <p className="text-white text-[12px] sm:text-xl md:text-2xl mb-4">
            {caseStudy.ClientOverview}
          </p>
        </div>
      </div>

      {/* Render Case Study Component */}
      {/* <div className="mt-12">{renderCaseStudyComponent()}</div> */}

      <div className="py-2 text-center md:text-left overflow-hidden w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
        <div className="w-[100%] m-2 gap-2 text-white">
          <h3 className="font-bold mt-2 mb-2 md:mt-2 md:mb-2 text-[24px] sm:text-[30px] md:text-[40px] text-center md:text-left">
            <span className="text-3xl font-bold text-blue-500">
              Challenges
            </span>
          </h3>
          <p className="text-white text-[18px] sm:text-xl md:text-2xl mb-4">{caseStudy.challenge}</p>
          <ul className="pt-9 list-none text-white gap-4">
            {caseStudy.challengePoints.map((point, index) => (
              <li key={index} className="flex items-center mb-2 gap-2 text-[14px] sm:text-[16px] md:text-xl">
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white mr-2">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[100%] m-2 gap-2 text-white mt-8">
          <p className="font-bold mt-2 mb-2 md:mt-2 md:mb-2 text-[24px] sm:text-[30px] md:text-[40px] text-center md:text-left ">
            <span className="text-3xl font-bold text-blue-500">
              Solution
            </span>
          </p>
          <p className="text-white text-[18px] sm:text-xl md:text-2xl mb-4">{caseStudy.solution}</p>
          <ul className="pt-9 list-none text-white gap-4">
            {caseStudy.solutionPoints.map((point, index) => (
              <li key={index} className="flex items-center mb-2 gap-2 text-[14px] sm:text-[16px] md:text-xl">
                <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white mr-2">
                  ✓
                </span>
                <span className="flex-1">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="py-2 text-center md:text-left overflow-hidden md:w-[60%] lg:w-[60%] mx-auto">
        <div className="w-[100%] m-2 gap-2 text-white">
          <h2 className="text-3xl font-bold text from-green-800 to-blue-800 ">Conclusion</h2>
          <p className=" text-white text-[16px] sm:text-xl md:text-2xl mb-4">
            {caseStudy.Conclusion}
          </p>
        </div>
      </div>
      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <div className="related-case-studies md:w-[60%] lg:w-[60%] mx-auto mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedCaseStudies.map((relatedStudy) => (
              <div key={relatedStudy.slug} className="related-post bg-gray-800 p-4 rounded-lg shadow-lg">
                <Link href={`/case-studies/${relatedStudy.slug}`} passHref>
                  <Image
                    src={relatedStudy.image}
                    alt={relatedStudy.title}
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                </Link>
                <h3 className="text-lg font-semibold mt-2">{relatedStudy.title}</h3>
                <Link
                  href={`/case-studies/${relatedStudy.slug}`}
                  className="text-blue-400 mt-2 block hover:underline"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
