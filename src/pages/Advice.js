import React from "react";
import image from "../assets/images/advice-image.png";
import Button from "../components/Buttom/Button";
import ContentImage from "../components/ContentImage/ContentImage";
import RadioButton from "../components/RadioButton/RadioButton";
import Textarea from "../components/Textarea/Textarea";

const Advice = () => {
  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20 lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-10 md:pl-20">
          <p className="max-w-lg pb-8">
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის. <br /> <br /> პანდემიის პერიოდში ერთმანეთსაც
            იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <RadioButton
            title="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
            name="online"
            label1="კვირაში ორჯერ"
            label2="კვირაში ერთხელ"
            label3="ორ კვირაში ერთხელ"
            label4="თვეში ერთხელ"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <RadioButton
            title="კვირაში რამდენი დღე ისურვედი ოფოსიდან მუშაობას?*"
            name="office"
            label1={0}
            label2={1}
            label3={2}
            label4={3}
            label5={4}
            label6={5}
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <Textarea name="assembly" title="რას ფიქრობ ფიზიკურ შეკრებაზე?" />
          <Textarea
            name="environment"
            title="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
          />
          <div className="flex justify-end py-10">
            <Button text="დასრულება" />
          </div>
        </div>
        {/* Content Image */}
        <ContentImage src={image} />
      </div>
    </>
  );
};

export default Advice;
