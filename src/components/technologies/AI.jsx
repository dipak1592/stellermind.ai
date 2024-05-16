import React from "react";
import Image from "next/image";
function AI() {
  return (
    <main className="flex justify-center px-[0px]">
      {/* AI/ML:  PyTorch, TensorFlow, Keras, OpenAI, Google ML Kit, Amazon SageMaker, 
NumPy, Apache Spark, UnityAI - 9 */}

      <div className="inline-block text-center">
        <button className="m-3">
          <Image
            src={"/techlogos/PyTorch.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/TensorFlow.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image src={"/techlogos/Keras.png"} height={150} width={150} alt="" />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/OpenAI.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/Google ML Kit.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/Amazon SageMaker.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image src={"/techlogos/NumPy.png"} height={150} width={150} alt="" />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/Apache Spark.png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
        <button className="m-3">
          <Image
            src={"/techlogos/UnityAI .png"}
            height={150}
            width={150}
            alt=""
          />
        </button>
      </div>
    </main>
  );
}

export default AI;
