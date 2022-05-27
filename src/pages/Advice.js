import React, { useEffect } from "react";
import image from "../assets/images/advice-image.png";
import Button from "../components/Button/Button";
import ContentImage from "../components/ContentImage/ContentImage";
import RadioButton from "../components/RadioButton/RadioButton";
import Textarea from "../components/Textarea/Textarea";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AdviceSchema } from "../Helpers/Schema/AdviceSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* Redux */
import { useSelector } from "react-redux";
// actions
import {
  setOnline,
  setOffice,
  setAssembly,
  setEnvironment,
} from "../features/advice/adviceSlice";

const Advice = () => {
  //  Global state (Redux)
  const { covid, test, covidPeriod, testDate, testQuantity } = useSelector(
    (state) => state.covid
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Use Form */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(AdviceSchema),
  });

  useEffect(() => {
    // if (watch("covid") === "არა" || watch("covid") === "ახლა მაქვს") {
    //   dispatch(setCovid(watch("covid")));
    //   dispatch(setTest(null));
    //   dispatch(setCovidPeriod(""));
    //   dispatch(setTestDate(""));
    //   dispatch(setTestQuantity(""));
    // } else if (watch("test") === "კი" && watch("covid") === "კი") {
    //   dispatch(setCovid(watch("covid")));
    //   dispatch(setTest(watch("test")));
    //   dispatch(setTestDate(watch("testDate")));
    //   dispatch(setTestQuantity(watch("testQuantity")));
    //   dispatch(setCovidPeriod(""));
    // } else if (watch("test") === "არა" && watch("covid") === "კი") {
    //   dispatch(setCovid(watch("covid")));
    //   dispatch(setTest(watch("test")));
    //   dispatch(setCovidPeriod(watch("covidPeriod")));
    //   dispatch(setTestDate(""));
    //   dispatch(setTestQuantity(""));
    // } else {
    //   dispatch(setCovid(watch("covid")));
    // }
  }, [watch()]);

  const submitForm = (data) => {
    reset();
    // navigate("/thanks");

    console.log(data);
  };
  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20  lg:px-20  ">
        {/* Content Text */}
        <div className="flex flex-col pt-12 md:pl-20">
          <form id="advice-form" onSubmit={handleSubmit(submitForm)}>
            <p className="max-w-lg pb-8">
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის. <br /> <br /> პანდემიის პერიოდში
              ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური
              კომუნიკაციაც გაიშვიათდა.
            </p>
            <RadioButton
              title="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
              name="online"
              value1="კვირაში ორჯერ"
              value2="კვირაში ერთხელ"
              value3="ორ კვირაში ერთხელ"
              value4="თვეში ერთხელ"
              errorMessage={errors.online?.message}
              register={register}
            />
            <RadioButton
              title="კვირაში რამდენი დღე ისურვედი ოფოსიდან მუშაობას?*"
              name="office"
              value1={0}
              value2={1}
              value3={2}
              value4={3}
              value5={4}
              value6={5}
              errorMessage={errors.office?.message}
              register={register}
            />
            <Textarea
              name="assembly"
              title="რას ფიქრობ ფიზიკურ შეკრებაზე?"
              register={register}
            />
            <Textarea
              name="environment"
              title="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
              register={register}
            />
            <div className="flex justify-end py-10">
              <Button text="დასრულება" />
            </div>
          </form>
        </div>
        {/* Content Image */}
        <ContentImage src={image} />
      </div>
    </>
  );
};

export default Advice;
