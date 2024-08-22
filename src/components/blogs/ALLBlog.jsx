import React from 'react'
import BlogError from './BlogError';
import BlogWidget from './BlogWidget';


async function getData() {
  try {
    const res = await fetch(
      `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/blog/getposts`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

async function ALLBlog() {
  const blogData = await getData();

  if (!blogData || blogData.length === 0) {
    return <BlogError />;
  }
 
    return (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogData.slice(0, 9).map((blog, index) => (
            <BlogWidget
              key={index}
              featureImage={blog.featureImage}
              updatedAt={blog.updatedAt}
              category={blog.category}
              title={blog.title}
              content={blog.content}
              id={blog._id}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    );
}

export default ALLBlog
