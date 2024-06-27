import Image from "next/image";
import React from "react";

async function getData(slug) {
  const res = await fetch(
    `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/blog/getposts?postId=${slug}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

async function page({ params }) {
  const { slug } = params;

  const data = await getData(slug);
  const formattedDate = formatDate(data[0]?.updatedAt);
  const formattedCategory = data[0]?.category.toUpperCase();
  return (
    <>
      <div className="container">
        {data && (
          <div className="text-white">
            <div className="py-2 text-center md:text-left flex flex-col md:flex md:flex-row overflow-hidden md:w-[100%] lg:w-[100%]">
              <div className="md:w-[60%] m-2 gap-2 text-white">
                <h3 className=" bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-bold mt-2 mb-2 md:mt-2 md:mb-2 text-[40px]">
                  {data[0].title}
                </h3>
                <div className="flex flex-col md:flex md:flex-row text-white mt-4 md:mt-1 items-center md:text-xl lg:text-sm">
                  <p className="pe-2">{formattedDate}</p>
                  <p className="bg-blue-500 text-white py-1 px-2 rounded-xl">
                    {formattedCategory}
                  </p>
                </div>
              </div>
              <div className="md:w-[40%] md:p-1 place-items-center">
                <Image
                  width={600}
                  height={600}
                  src={data[0].featureImage}
                  alt={data[0].title}
                  className="rounded-[20px] p-1 md:p-2 lg:p-3"
                />
              </div>
            </div>
            <div className="blogcontent">
              <div
                className="mb-2 md:text-xl lg:text-[18px]"
                dangerouslySetInnerHTML={{ __html: data[0].content }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
