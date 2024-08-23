import React from 'react';
import Image from 'next/image';
import truncate from 'truncate-html'; // Import truncate function from truncate-html

// Function to format the date to only show the date part
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

const BlogWidget = ({ featureImage, updatedAt, category, title, content, slug, wordLimit = 30 }) => {
  // Apply the truncation function
  const truncatedContent = truncate(content, { length: wordLimit * 5 }); // Adjust length as needed
  const formattedDate = formatDate(updatedAt);
  const formattedCategory = category.toUpperCase(); 

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-60 w-full">
        <Image width={600} height={600} src={featureImage} alt={title} className="rounded-lg p-1 md:p-2 lg:p-3" />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div className="flex flex-row items-start mb-4">
          <p className="text-sm text-gray-400 pr-5">{formattedDate}</p>
          <p className="bg-blue-500 text-white py-1 px-2 rounded-xl">{formattedCategory}</p>
        </div>

        <h3 className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-bold mt-2 mb-2 md:mt-2 md:mb-2 text-xl md:text-2xl lg:text-xl">
          {title}
        </h3>
        <div className="mb-2 md:text-xl lg:text-[18px]" dangerouslySetInnerHTML={{ __html: truncatedContent }}></div>
        <a href={`/blog/${slug}`} className="text-blue-500 md:text-xl lg:text-sm cursor-pointer">
          <u>Read More</u>
        </a>
      </div>
    </div>
  );
};

export default BlogWidget;
