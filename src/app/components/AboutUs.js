import React from "react";
import { GrFormNextLink } from "react-icons/gr";

function AboutUs() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">We are avantgard</h1>
      <h1 className="text-3xl font-light mt-8 w-1/2">
        We are a team where creativity, strategy, innovation and delivery come
        together to create unforgettable experiences. Become part of AVANTGARDE.
      </h1>
      <button className="mt-8 flex justify-center items-center text-5xl">
        <h1>Reach out</h1>
        <div className=" p-3 ml-3 bg-[#98fcce] hover:bg-gray-300 ease-in-out duration-200 rounded-full flex justify-center items-center">
          <GrFormNextLink size={40} />
        </div>
      </button>
    </div>
  );
}

export default AboutUs;
