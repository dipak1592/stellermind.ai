import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/Crad3dD";
import Image from "next/image";
import Link from "next/link";
import PortfolioPageErr from "./PortfolioPageErr";

async function getData() {
  const res = await fetch(
    `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/portfolio/getposts?category=ar`
  );

  if (!res.ok) {
    console.log("failed to fetch data");
  }
  return res.json();
}

async function AR() {
  const portfolioData = await getData();

  if (!portfolioData || portfolioData.length === 0) {
    return <PortfolioPageErr />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
      {portfolioData?.map((item, index) => {
        const backgroundColor =
          index % 2 === 0
            ? "bg-gradient-to-r from-[#3b83f631] to-[#00800038]"
            : "bg-[#36353565]";
        return (
          <>
            <Link href={`/portfolio/${item.slug}`} className={`${backgroundColor} rounded-xl`} key={item._id}>
              <CardContainer className="inter-var" >
                <CardBody
                  className={`relative group/card border-black/[0.1] w-[100%] h-auto p-6 border `}
                >
                  <CardItem
                    translateZ="50"
                    className="text-[22px] mb-[10px] font-bold text-blue-500 dark:text-white"
                  >
                    {item.name}
                  </CardItem>
                  <hr />
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-[#ffffffa4] text-[16px] max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.taglineDesc}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={item.featureImage}
                      height="1000"
                      width="1000"
                      className="rounded-lg"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default AR;
