import Image from "next/image";
import React from "react";
import Head from "next/head";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

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

async function getRelatedPosts(category, excludeSlug) {
  try {
    const res = await fetch(
      `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/blog/getposts?category=${category}&exclude=${excludeSlug}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch related posts");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // Return empty array on error
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function Page({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  if (!data || data.length === 0) {
    return <p>No blog post found.</p>;
  }

  const post = data[0];
  const formattedDate = formatDate(post.updatedAt);
  const formattedCategory = post.category.toUpperCase();

  let relatedPosts = await getRelatedPosts(post.category, slug);

  // Filter out the current post from the related posts and randomize the order
  relatedPosts = shuffleArray(relatedPosts.filter(relatedPost => relatedPost.slug !== slug));

  // Limit the number of related posts to display
  const displayedRelatedPosts = relatedPosts.slice(0, 3);

  const shareUrl = `https://stellarmind.com/blog/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);
  const shareDescription = encodeURIComponent(post.excerpt || `Check out this blog: ${post.title}`);

  return (
    <div className="container">
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={post.excerpt || `A blog post on ${post.title}`}
        />
      </Head>

      <div className="text-white">
        <div className="py-2 text-center md:text-left overflow-hidden md:w-[60%] lg:w-[60%] mx-auto">
          <div className="w-[100%] m-2 gap-2 text-white">
            <h3 className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-bold mt-2 mb-2 md:mt-2 md:mb-2 md:text-[40px] text-[20px md:text-left text-center">
              {post.title}
            </h3>
            <div className="flex flex-row text-white mt-4 md:mt-1 items-center md:justify-start justify-center md:text-xl lg:text-sm font-bold">
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

        <div className="share-section md:w-[60%] lg:w-[60%] mx-auto mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Share this post</h2>
          <div className="flex justify-center gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaTwitter size={30} />
            </a>

            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareTitle}&summary=${shareDescription}&source=StellarMind`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${shareTitle} - ${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>

        {/* Display Related Blogs */}
        {displayedRelatedPosts.length > 0 && (
          <div className="related-posts md:w-[60%] lg:w-[60%] mx-auto mt-8">
            <h2 className="text-2xl font-bold text-center mb-4">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedRelatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.slug}
                  className="related-post bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                  <Image
                    src={relatedPost.featureImage}
                    alt={relatedPost.title}
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{relatedPost.title}</h3>
                  <p className="text-sm mt-1">{formatDate(relatedPost.updatedAt)}</p>
                  <a
                    href={`/blog/${relatedPost.slug}`}
                    className="text-blue-400 mt-2 block hover:underline"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
