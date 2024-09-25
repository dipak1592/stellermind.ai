import React from 'react';
import Image from 'next/image';
import truncate from 'truncate-html';
import Link from 'next/link';


const caseStudyWidget = ({ slug,title,description,image,wordLimit = 30 }) => {
    // Apply the truncation function
    const truncatedDescription = truncate(description, { length: wordLimit * 5 }); // Adjust length as needed

    return (
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="relative md:h-full h-full lg:h-60 w-full">
            <Link href={`/case-studies/${slug}`} passHref>
              <Image
                width={600}
                height={300}
                src={image}
                alt={title}
                className="rounded-lg p-1 md:p-2 lg:p-3"
              />
            </Link>
          </div>
    
          <div className="p-4 flex flex-col justify-between">
            <h3 className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-bold mt-2 mb-2 md:mt-2 md:mb-2 text-xl md:text-2xl lg:text-xl">
              {title}
            </h3>
            <div className="mb-2 md:text-xl lg:text-[18px]" dangerouslySetInnerHTML={{ __html: truncatedDescription }}></div>
            <Link href={`/case-studies/${slug}`} className="text-blue-500 md:text-xl lg:text-sm cursor-pointer">
              <u>Read More</u>
            </Link>
          </div>
        </div>
      );
    };
    
export default caseStudyWidget;