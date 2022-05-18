import React from "react";
import image from "../assets/images/covid-image.png";
import ContentImage from "../components/ContentImage/ContentImage";
import Input from "../components/Input/Input";
import RadioButton from "../components/RadioButton/RadioButton";

const Covid = () => {
  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20 lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-10 md:pl-20">
          <RadioButton
            title="გაქვს გადატანილი კოვიდ 19?*"
            name="covid"
            label1="კი"
            label2="არა"
            label3="ახლა მაქვს"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <RadioButton
            title="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
            name="test"
            label1="კი"
            label2="არა"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />

          {/* In case yes */}
          <Input
            name={
              "თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*"
            }
            placeholder={"რიცხვი"}
            errorMessage={"გთხოვთ მიუთითეთ რიცხვი"}
          />
          <Input
            placeholder={"ანტისხეულების რაოდენობა"}
            errorMessage={"გთხოვთ მიუთითეთ რაოდენობა"}
          />
          {/* In case no */}
          <Input
            name={
              "მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
            }
            placeholder={"დდ/თთ/წწ"}
            errorMessage={"გთხოვთ მიუთითეთ პერიოდი"}
          />
        </div>
        {/* Content Image */}
        <ContentImage src={image} />
      </div>
    </>
  );
};

export default Covid;
