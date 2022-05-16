import React from "react";
import image from "../assets/images/identification-image.png";
import ContentImage from "../components/ContentImage/ContentImage";
import Input from "../components/Input/Input";

const Identification = () => {
  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20  lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-6 md:pl-20 ">
          <Input
            name={"სახელი*"}
            placeholder={"Your name"}
            errorMessage={
              "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
            }
          />
          <Input
            name={"გვარი*"}
            placeholder={"Your surname"}
            errorMessage={
              "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
            }
          />
          <Input
            name={"მეილი*"}
            placeholder={"Your email"}
            errorMessage={
              "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
            }
          />
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
        <ContentImage src={image} />
      </div>
    </>
  );
};

export default Identification;
