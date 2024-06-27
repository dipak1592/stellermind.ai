import Image from 'next/image';
import React from 'react';
import DOMPurify from 'dompurify';

// Function to truncate the HTML content to a certain word limit
const truncateContent = (htmlContent, wordLimit) => {
  if (typeof window !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = DOMPurify.sanitize(htmlContent);
    const text = div.textContent || div.innerText || '';
    const words = text.split(' ').slice(0, wordLimit).join(' ');
    return words + '...';
  }
  return htmlContent;
};
// Function to format the date to only show the date part
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

const BlogWidget = ({ featureImage, updatedAt, category, title, content, id, wordLimit = 50 }) => {
  const truncatedContent = truncateContent(content, wordLimit);
  const formattedDate = formatDate(updatedAt);
  const formattedCategory = category.toUpperCase(); 
  return (
    <div className="py-2 text-center md:text-left flex flex-col md:flex md:flex-row overflow-hidden md:w-[100%] lg:w-[100%]">
      <div className="md:w-[40%] md:p-1 place-items-center">
        <Image width={600} height={600} src={featureImage} alt={title} className="rounded-lg p-1 md:p-2 lg:p-3" />
      </div>

      <div className="md:w-[60%] m-2 gap-2 text-white">
        <div className="flex flex-col md:flex md:flex-row text-white mt-4 md:mt-1 items-center md:text-xl lg:text-sm">
          <p className="pe-2">{formattedDate}</p>
          <p className="bg-blue-500 text-white py-1 px-2 rounded-xl">{formattedCategory}</p>
        </div>

        <h3 className=" bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-bold mt-2 mb-2 md:mt-2 md:mb-2 text-xl md:text-2xl lg:text-xl">
          {title}
        </h3>
        <div className="mb-2 md:text-xl lg:text-[18px]" dangerouslySetInnerHTML={{ __html: truncatedContent }}></div>
        <a href={`/blog/${id}`} className="text-blue-500 md:text-xl lg:text-sm cursor-pointer">
          <u>Read More</u>
        </a>
      </div>
    </div>
  );
};

export default BlogWidget;
