import Image from "next/image";
import React from "react";
import Head from "next/head";

async function getData(slug) {
  try {
    const res = await fetch(
      `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/blog/getposts?slug=${slug}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // Return empty array on error
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

async function Page({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  if (!data || data.length === 0) {
    return <p>No blog post found.</p>;
  }

  const post = data[0];
  const formattedDate = formatDate(post.updatedAt);
  const formattedCategory = post.category.toUpperCase();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.featureImage,
    datePublished: new Date(post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: post.author || "Unknown Author", // Replace with actual author data if available
    },
    publisher: {
      "@type": "Organization",
      name: "StellarMind",
      logo: {
        "@type": "ImageObject",
        url: "https://stellarmind.ai/betalogo.png",
      },
    },
    description: post.excerpt || `A detailed blog post on ${post.title}`, // Replace with a summary or description of the post
    articleBody: post.content.replace(/<[^>]+>/g, ""), // Strips HTML tags for cleaner text
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://stellarmind.com/blog/${post.slug}`, // Replace with your actual blog post URL
    },
  };

  return (
    <div className="container">
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={post.excerpt || `A blog post on ${post.title}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="text-white">
        <div className="py-2 text-center md:text-left overflow-hidden md:w-[60%] lg:w-[60%] mx-auto">
          <div className="w-[100%] m-2 gap-2 text-white">
            <h3 className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-bold mt-2 mb-2 md:mt-2 md:mb-2 md:text-[40px] text-[20px md:text-left text-center">
              {post.title}
            </h3>
            <div className="flex flex-row  text-white mt-4 md:mt-1 items-center md:justify-start justify-center md:text-xl lg:text-sm">
              <p className="pe-2">{formattedDate}</p>
              <p className="bg-blue-500 text-white py-1 px-2 rounded-xl">
                {formattedCategory}
              </p>
            </div>
          </div>
          <div className="w-full place-items-center">
            <Image
              width={1000}
              height={600}
              src={post.featureImage}
              alt={post.title}
              className="rounded-[20px] p-1 md:p-2 lg:p-3"
            />
          </div>
        </div>
        <div className="blogcontent md:w-[60%] lg:w-[60%] mx-auto md:text-left text-center">
          <div
            className="mb-2 md:text-xl md:text-[18px] text-[15px]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
