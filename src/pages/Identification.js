import React from "react";
import image from "../assets/images/identification-image.png";

const Identification = () => {
  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20 pb-32 lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-6 md:pl-20 ">
          <div className=" pt-6 max-w-md ">
            <label htmlFor="required-email" className="text-gray-700 flex ">
              <p className="pb-2 font-bold">სახელი</p>

              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="email"
              placeholder="Your name"
            />
            <span className="text-red-500 required-dot text-xs pl-4">
              სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან
            </span>
          </div>
          <div className=" pt-6 max-w-md ">
            <label htmlFor="required-email" className="text-gray-700 flex ">
              <p className="pb-2 font-bold">გვარი</p>

              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="email"
              placeholder="Your surname"
            />
            <span className="text-red-500 required-dot text-xs pl-4">
              სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან
            </span>
          </div>
          <div className=" pt-6 max-w-md ">
            <label htmlFor="required-email" className="text-gray-700 flex ">
              <p className="pb-2 font-bold">მაილი</p>

              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
            <span className="text-red-500 required-dot text-xs pl-4">
              სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან
            </span>
          </div>
          {/* Content Hint */}
          <div className=" pt-20">
            <div className=" pt-6 max-w-sm border-t-2  border-gray-200 ">
              <p className="pb-2 text-xs font-thin">
                *-ით მონიშნული ველების შევსება სავალდებულოა
              </p>
            </div>
          </div>
        </div>
        {/* Content Image */}
        <div className="max-w-3xl max-h-96   hidden lg:block ">
          <img className="" alt="main-image" src={image} />
        </div>
      </div>
    </>
  );
};

export default Identification;
