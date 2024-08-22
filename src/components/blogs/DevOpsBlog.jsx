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

export default DevOpsBlog

