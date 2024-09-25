import BrandSlider from "@/components/BrandSlider";
import CallToMeet from "@/components/CallToMeet";
import DynamicHeading from "@/components/DynamicHeading";
import TubeLight from "@/components/TubeLight";
import Image from "next/image";
import React from "react";
import { LiaHandPointRight } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
async function getData(slug) {
  const res = await fetch(
    `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/portfolio/getposts?slug=${slug}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug;

  // fetch data
  const data = await fetch(
    `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/portfolio/getposts?slug=${slug}`
  ).then((res) => res.json());

  return {
    title: data[0]?.name,
    description: data[0]?.taglineDesc,
    openGraph: {
      images: [
        data[0]?.featureImage,
        data[0]?.projectImg1,
        data[0]?.projectImg2,
        data[0]?.projectImg3,
      ],
    },
  };
}
export default async function page({ params }) {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <>
      {data && (
        <div>
          <section className="pb-[60px] font-semibold text-white">
            <TubeLight />
            <div className="relative flex justify-center z-[5] pt-[40px]">
              <h1
                className={`heading inline-block  text-[35px] xl:text-[40px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}
              >
                <span>
                  <span
                    className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
                  >
                    {data[0]?.name}
                  </span>
                </span>
              </h1>
            </div>
          </section>
          <div className="container">
            <div className="grid gap-5 relative md:grid-cols-2 grid-cols-1">
              <div>
                <h2
                  className={`mb-[30px] text-[30px] pb-[15px] border-b-[1px] border-gray-400 flex gap-2  text-white font-semibold`}
                >
                  <span className="mt-2">
                    <LiaHandPointRight />
                  </span>

                  <span
                    className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
                  >
                    {data[0].taglineDesc}
                  </span>
                </h2>
                <div className="mb-[20px] flex gap-6 items-center">
                  <div className="border border-gray-400 rounded-full flex justify-center items-center p-[15px]">
                    <Image
                      width={"40"}
                      height={"40"}
                      src={"/img2.svg"}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-blue-500 text-[20px] font-semibold">
                      Technologies
                    </h3>
                    <p className="text-white">
                      {data[0].technologies.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="mb-[20px] flex gap-6 items-center">
                  <div className="border border-gray-400 rounded-full flex justify-center items-center p-[15px]">
                    <Image
                      width={"40"}
                      height={"40"}
                      src={"/img3.svg"}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-blue-500 text-[20px] font-semibold">
                      Built for
                    </h3>
                    <p className="text-white">{data[0].platform}</p>
                  </div>
                </div>
                <div className="mb-[20px] flex gap-6 items-center">
                  <div className="border border-gray-400 rounded-full flex justify-center items-center p-[15px]">
                    <Image
                      width={"40"}
                      height={"40"}
                      src={"/img5.svg"}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-blue-500 text-[20px] font-semibold">
                      Industry
                    </h3>
                    <p className="text-white">{data[0].industry}</p>
                  </div>
                </div>
                <div className="mb-[20px] flex gap-6 items-center">
                  <div className="border border-gray-400 rounded-full flex justify-center items-center p-[15px]">
                    <Image
                      width={"40"}
                      height={"40"}
                      src={"/img4.svg"}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-blue-500 text-[20px] font-semibold">
                      Country
                    </h3>
                    <p className="text-white">{data[0].country}</p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className="rounded-[20px]"
                  height={1000}
                  width={1000}
                  src={data[0].featureImage}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-[60px]">
              <section className="pb-[40px] font-semibold text-white">
                <TubeLight />
                <div className="relative flex justify-center z-[5] pt-[40px]">
                  <h1
                    className={`heading inline-block  text-[35px] xl:text-[40px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center  text-white`}
                  >
                    <span>
                      {"Project "}
                      <span
                        className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
                      >
                        Highlights
                      </span>
                    </span>
                  </h1>
                </div>
              </section>
              <p className="text-white py-3 text-[20px] relative text-center">
                {data[0].firstdescription}
              </p>
            </div>
            {data[0].category == "mobile" ? (
              <div className="mt-[40px] lg:px-[200px] grid grid-cols-1 md:grid-cols-3 gap-[50px]">
                {data[0].projectImg1 && (
                  <div className="flex justify-center">
                    <Image
                      src={data[0].projectImg1}
                      alt=""
                      height={400}
                      width={200}
                      className="rounded-lg"
                    />
                  </div>
                )}
                {data[0].projectImg2 && (
                  <div className="flex justify-center">
                    <Image
                      src={data[0].projectImg2}
                      alt=""
                      height={400}
                      width={200}
                      className="rounded-lg"
                    />
                  </div>
                )}
                {data[0].projectImg3 && (
                  <div className="flex justify-center">
                    <Image
                      src={data[0].projectImg3}
                      alt=""
                      height={400}
                      width={200}
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>
            ) : (
              data[0].projectImg1 && (
                <div className="pt-[40px] grid justify-center grid-cols-1 md:grid-cols-3 gap-[50px]">
                  {(data[0].projectImg1 !== "" ||
                    data[0].projectImg2 !== "" ||
                    data[0].projectImg3 !== "") && (
                    <div>
                      <Image
                        src={data[0].projectImg1}
                        alt=""
                        height={500}
                        width={500}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  {data[0].projectImg2 && (
                    <div>
                      <Image
                        src={data[0].projectImg2}
                        alt=""
                        height={500}
                        width={500}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  {data[0].projectImg3 && (
                    <div>
                      <Image
                        src={data[0].projectImg3}
                        alt=""
                        height={500}
                        width={500}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                </div>
              )
            )}

            {(data[0].category == "ai-ml" ||
              data[0].category == "ar" ||
              data[0].category == "unity") &&
            (data[0].youtube1 !== "" ||
              data[0].youtube2 !== "" ||
              data[0].youtube3 !== "") ? (
              <div>
                {data[0].youtube1 && (
                  <div className="mt-[20px] bg-opacity-50 flex justify-center items-center ">
                    <div className=" text-white relative border bg-black border-gray-600 p-[30px] w-[600px] h-[400px]">
                      {data[0].youtube1 && (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${data[0].youtube1}`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      )}
                    </div>
                  </div>
                )}
                {data[0].youtube2 && (
                  <div className="mt-[20px] bg-opacity-50 flex justify-center items-center ">
                    <div className=" text-white relative border bg-black border-gray-600 p-[30px] w-[600px] h-[400px]">
                      {data[0].youtube1 && (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${data[0].youtube2}`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      )}
                    </div>
                  </div>
                )}
                {data[0].youtube3 && (
                  <div className="mt-[20px] bg-opacity-50 flex justify-center items-center ">
                    <div className=" text-white relative border bg-black border-gray-600 p-[30px] w-[600px] h-[400px]">
                      {data[0].youtube1 && (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${data[0].youtube3}`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <DynamicHeading
            FirstContent={"Our"}
            FirstsubContent={"Trusted Partners"}
          />
          <BrandSlider />
          <div className="container">
            <CallToMeet />
          </div>
        </div>
      )}
    </>
  );
}
