import { Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import Thoughts from "../../../public/toughts.jpg";


function Menu({menu, toggleMenu}) {
  return (
    <body>
      <Transition
        show={menu}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div dir="rtl" className="bg-black h-screen">
          <div className="flex justify-between border-b-2 border-white text-white py-9 px-40">
            <h1 className="text-6xl">avantgard</h1>
            <button
              onClick={toggleMenu}
              className="hover:bg-gray-600 rounded-full p-5"
            >
              <CiMenuFries size={50} />
            </button>
          </div>
          <div className="flex justify-center px-44 h-5/6 border-b-2 border-white text-white">
            <div className="">
              <div className="flex flex-col justify-evenly px-60 py-10 h-5/6 border-l-2 border-r-2 border-b-2 text-5xl [&>*]:">
                <h1 className="hover:bg-lime-700 p-2 rounded-md ease-in-out duration-700">
                  services
                </h1>
                <h1 className="hover:bg-lime-700 p-2 rounded-md ease-in-out duration-700">
                  services
                </h1>
                <h1 className="hover:bg-lime-700 p-2 rounded-md ease-in-out duration-700">
                  services
                </h1>
                <h1 className="hover:bg-lime-700 p-2 rounded-md ease-in-out duration-700">
                  services
                </h1>
                <h1 className="hover:bg-lime-700 p-2 rounded-md ease-in-out duration-700">
                  services
                </h1>
                <h1 className="hover:bg-lime-700 p-2 rounded-md ease-in-out duration-700">
                  services
                </h1>
              </div>
              <div className="flex justify-between items-center h-1/6 border-l-2 border-r-2 border-b-2 border-t-2 px-20">
                <div className="flex justify-around w-2/6">
                  <BsFacebook size={30} />
                  <BsInstagram size={30} />
                  <BsLinkedin size={30} />
                </div>
                <div className="flex text-3xl">
                  <h1>EN</h1>
                  <h1 className="mx-2">|</h1>
                  <h1>FA</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start border-l-2 border-r-2 px-60 py-10">
              <h1 className="text-5xl">Thoughts</h1>
              <Image
                src={Thoughts}
                width={300}
                height={300}
                className="mt-10"
              />
              <h1 className="text-3xl font-bold mt-10">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است تکنولوژی مورد نیاز و کاربردهای
                متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </h1>
              <h1 className="text-xl mt-10">
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز استفاده
                قرار گیرد.
              </h1>
            </div>
          </div>
        </div>
      </Transition>
    </body>
  );
}

export default Menu;
