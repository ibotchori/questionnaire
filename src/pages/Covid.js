import React from "react";
import image from "../assets/images/covid-image.png";
import ContentImage from "../components/ContentImage/ContentImage";
import Input from "../components/Input/Input";
import ThreeLabelRadioButton from "../components/RadioButton/ThreeLabelRadioButton";
import TwoLabelRadioButton from "../components/RadioButton/TwoLabelRadioButton";

const Covid = () => {
  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20 lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-10 md:pl-20">
          <ThreeLabelRadioButton
            title="გაქვს გადატანილი კოვიდ 19?*"
            firstLabel="კი"
            secondLabel="არა"
            thirdLabel="ახლა მაქვს"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <TwoLabelRadioButton
            title="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
            firstLabel="კი"
            secondLabel="არა"
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
