import Image from "next/image";
import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import Thoughtspic from "../../../public/toughts.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";

function Thoughts() {
  return (
    <>
      <div className="flex py-14">
        <div className="-rotate-90 ">
          <h1 className="text-9xl left-0">thoughts</h1>
        </div>

        <div className="flex flex-col w-[520px]">   
          <h1 className="text-6xl">
            Discover more about the way we think and work.
          </h1>
          <button className="mt-8 flex justify-center items-center text-5xl">
            <h1>our thoughts</h1>
            <div className=" p-3 ml-3 bg-[#98fcce] hover:bg-gray-300 ease-in-out duration-200 rounded-full flex justify-center items-center">
              <GrFormNextLink size={40} />
            </div>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[1024px]">
            <Swiper spaceBetween={50} slidesPerView={2} modules={[Scrollbar]}>
              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <Image src={Thoughtspic} className="hover:" height={600} />
                  <h1 className="text-5xl font-bold">some text</h1>
                  <h1 className="text-3xl">some other text</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <Image src={Thoughtspic} className="hover:" height={600} />
                  <h1 className="text-5xl font-bold">some text</h1>
                  <h1 className="text-3xl">some other text</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <Image src={Thoughtspic} className="hover:" height={600} />
                  <h1 className="text-5xl font-bold">some text</h1>
                  <h1 className="text-3xl">some other text</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thoughts;
