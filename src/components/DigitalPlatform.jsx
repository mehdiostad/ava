import Image from "next/image";
import React from "react";
import random from "../../public/rndm.jpg";
import { GrFormNextLink } from "react-icons/gr";

const DigitalPlatform = () => {
  return (
    <div className="flex justify-center items-center bg-cover object-cover border-t-2">
      <div className="bg-black h-[20rem] w-full flex flex-col ">
        <span className="text-white flex justify-center pt-8 font-normal text-5xl">
          Digital Platforms
        </span>
        <span className="text-center text-white pt-8">
          We create customised digital and hybrid experience platforms and
          measure the success of your physical events in real time.
        </span>
      <button className="mt-8 flex justify-center items-center text-5xl text-white">
        <h1>Reach out</h1>
        <div className=" p-3 ml-3 bg-[#98fcce] hover:bg-gray-300 ease-in-out duration-200 rounded-full flex justify-center items-center">
          <GrFormNextLink size={40} />
        </div>
      </button>
      </div>
    </div>
  );
};

export default DigitalPlatform;
