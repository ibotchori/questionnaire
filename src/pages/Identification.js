import React from "react";
import image from "../assets/images/identification-image.png";

const Identification = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Header */}
      <div className="px-5 sm:px-20 md:px-40 pt-10  ">
        <div className="flex justify-between w-full border-b-2 pb-2 border-gray-500 ">
          <p className="text-red-500 font-bold text-lg">REDBERRY</p>
          <div className="font-bold">1/4</div>
        </div>
      </div>

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
          <img className="" src={image} />
        </div>
      </div>
      {/* Pagination */}
      <div className=" flex justify-center text-center bottom-0 pt-20  w-full pb-20 ">
        <svg
          width="148"
          height="23"
          viewBox="0 0 148 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1L3 11.3158L17 21.6316"
            stroke="#232323"
            strokeWidth="2.4"
          />
        </svg>

        <svg
          width="18"
          height="23"
          viewBox="0 0 18 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L15 11.3158L1 21.6316"
            stroke="#232323"
            strokeWidth="2.4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Identification;
