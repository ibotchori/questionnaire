import React, { useEffect } from "react";
import image from "assets/images/advice-image.png";
import Button from "./components/Button/Button.jsx";
import ContentImage from "components/ContentImage/ContentImage";
import RadioButton from "components/RadioButton/RadioButton";
import Textarea from "./components/Textarea/Textarea";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AdviceSchema } from "Helpers/Schema/AdviceSchema";
import { yupResolver } from "@hookform/resolvers/yup";

/* Redux */
import { useSelector } from "react-redux";
// actions
import {
  setOnline,
  setOffice,
  setAssembly,
  setEnvironment,
  resetAdvice,
} from "features/advice/adviceSlice";
import { resetCovid } from "features/covid/covidSlice";
import { resetInjection } from "features/injection/injectionSlice";
import { resetIdentification } from "features/identification/identificationSlice";

const Advice = () => {
  //  Global state (Redux)
  const { online, office, assembly, environment } = useSelector(
    (state) => state.advice
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
    dispatch(setOnline(watch("online")));
    dispatch(setOffice(+watch("office")));
    dispatch(setAssembly(watch("assembly")));
    dispatch(setEnvironment(watch("environment")));
  }, [watch()]);

  const submitForm = () => {
    reset();
    dispatch(resetIdentification());
    dispatch(resetCovid());
    dispatch(resetInjection());
    dispatch(resetAdvice());
    navigate("/thanks");
  };
  return (
    <>
      {/* Content */}
      <div className="flex justify-start lg:justify-between px-5 sm:px-20 md:px-30 md:pr-20  lg:px-20  ">
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
              checked1={online === "კვირაში ორჯერ"}
              checked2={online === "კვირაში ერთხელ"}
              checked3={online === "ორ კვირაში ერთხელ"}
              checked4={online === "თვეში ერთხელ"}
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
              checked1={office === 0}
              checked2={office === 1}
              checked3={office === 2}
              checked4={office === 3}
              checked5={office === 4}
              checked6={office === 5}
              errorMessage={errors.office?.message}
              register={register}
            />
            <Textarea
              name="assembly"
              title="რას ფიქრობ ფიზიკურ შეკრებაზე?"
              value={assembly}
              register={register}
            />
            <Textarea
              name="environment"
              title="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
              value={environment}
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
