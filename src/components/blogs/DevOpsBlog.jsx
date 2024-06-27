import React from 'react'
import BlogError from './BlogError';
import BlogWidget from './BlogWidget';


async function getData() {
  const res = await fetch(
    `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/blog/getposts?category=devops`
  );

  if (!res.ok) {
    console.log("failed to fetch data");
  }
  return res.json();
}

async function DevOpsBlog() {
  const blogData = await getData();

  if (!blogData || blogData.length === 0) {
    return <BlogError />;
  }
  return (
    
      <div className="col-span-3 md:col-span-2">
        {blogData?.map((blog, index) => (
        <BlogWidget
          key={index}
          featureImage={blog.featureImage}
          updatedAt={blog.updatedAt}
          category={blog.category}
          title={blog.title}
          content={blog.content}
          id={blog._id}
        />
        
      ))}
    </div>
  )
}

export default DevOpsBlog

