import Image from "next/image";
import React from "react";
import random from "../../public/rndm.jpg";
import hobab from "../../public/hobab.jpg";
import jadid from "../../public/jadid.jpg";
import air from "../../public/air.jpg";
import { GrFormNextLink } from "react-icons/gr";

const Services = () => {
  return (
    <div className="bg-black  flex h-[45rem] w-full">
      <div className="-rotate-90">
        <h1 className=" text-9xl px-[8.85rem] py-4 text-white border-b-2">services</h1>
      </div>
     
    <div className='flex flex-col'>
    <div className="absolute top-64 right-48 flex pl-8 gap-3 justify-center items-center">
        <div className="shadow-sm h-[500px] rounded-md relative">
          <Image
            src={random}
            width={300}
            className="object-cover h-[500px] hover:scale-105 rounded-md hover:border transition"
          />
          <span className="absolute left-4 bottom-3 text-white font-extrabold text-4xl">
          Strategic Services
          </span>
        </div>
        <div className=" shadow-sm  h-[500px] rounded-md relative">
          <Image
            src={jadid}
            width={300}
            className="object-cover h-[500px] hover:scale-105 rounded-md hover:border transition"
          />
          <span className="absolute left-4 bottom-3 text-white font-extrabold text-4xl">
          Creative Services
          </span>
        </div>
        <div className=" h-[500px] rounded-md relative">
          <Image
            src={hobab}
            width={300}
            className="object-cover h-[500px] hover:scale-105 rounded-md hover:border transition"
          />
          <span className="absolute left-4 bottom-3 text-white font-extrabold text-4xl">
          BrandRetail Services
          </span>
        </div>
        <div className=" h-[500px] rounded-md relative">
          <Image
            src={air}
            width={300}
            className="object-cover h-[500px] hover:scale-105 rounded-md hover:border transition"
          />
          <span className="absolute left-4 bottom-3 text-white font-extrabold text-4xl">
          Operational Services
          </span>
        </div>
      </div>
      <button className="absolute bottom-16 right-4 flex justify-center items-center text-5xl text-white">
        <h1>Our Services</h1>
        <div className=" p-3 ml-3 bg-[#98fcce] hover:bg-gray-300 ease-in-out duration-200 rounded-full flex justify-center items-center">
          <GrFormNextLink size={40} />
        </div>
      </button>
    </div>
    </div>
  );
};

export default Services;
