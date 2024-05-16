import React from "react";
import Image from "next/image";
import DynamicHeading from "../DynamicHeading";
function Industries() {
  return (
    <>
      <DynamicHeading
        FirstContent={"Industries"}
        FirstsubContent={"We Serve"}
      />
      <p className="text-blue-400 font-semibold pb-3 text-[20px] relative text-center">
        <span className="absolute left-[-15px] top-[-10px]">
          <Image src={"/Quets.svg"} width={50} height={50} alt="" />
        </span>
        StellarMind is serving a diverse range of industries! Our innovative
        solutions are designed to meet the unique needs of each and every one of
        our clients.
      </p>

      <div className="flex justify-center items-center">
        <Image src={"/industries 2.svg"} width={700} height={500} alt="" />
      </div>
    </>
  );
}

export default Industries;
