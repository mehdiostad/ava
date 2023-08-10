import React from "react";
import { GrFormNextLink } from "react-icons/gr";
function Footer() {
  return (
    <div className="bg-[#141313] text-white">
      <div className="flex ">
        
        <div className="flex flex-col border-r-2 border-white w-2/12 justify-start items-end">
          <div className="flex flex-col text-5xl border-b-2 py-14 px-6 w-full">
            <h1 className=" hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
            <h1 className="mt-3 hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
            <h1 className="mt-3 hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
          </div>

          <div className="flex flex-col text-5xl border-b-2 py-14 px-6 w-full">
            <h1 className=" hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
            <h1 className="mt-3 hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
            <h1 className="mt-3 hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
          </div>

          <div className="flex flex-col text-5xl border-b-2 py-14 px-6 w-full">
            <h1 className=" hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
            <h1 className="mt-3 hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
            <h1 className="mt-3 hover:bg-[#98fcce] ease-in-out duration-700 rounded-lg flex justify-center items-center py-1 ">services</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-10/12 px-10">
          <h1 className="text-9xl">Let´s get in touch</h1>
          <h1 className="text-5xl mt-6">
            Want to get in touch with us? Reach out through the contact form and
            we will find the right person for your request
          </h1>
          <button className="mt-8 flex justify-center items-center text-5xl">
            <h1>Reach out</h1>
            <div className=" p-3 ml-3 bg-[#98fcce] hover:bg-gray-300 ease-in-out duration-200 rounded-full flex justify-center items-center">
              <GrFormNextLink size={40} />
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center text-3xl py-4 border-t-2 border-white"> 
        <h1>
            2022 avantgard
        </h1>
      </div>
    </div>
  );
}

export default Footer;
