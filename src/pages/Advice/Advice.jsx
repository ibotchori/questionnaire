import React, { useEffect } from "react";
import Button from "./components/Button/Button.jsx";
import { RadioButton, ContentImage } from "components";
import Textarea from "./components/Textarea/Textarea";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AdviceSchema } from "Helpers/Schema/AdviceSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { adviceIMG } from "assets/images";

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
  const {
    non_formal_meetings,
    number_of_days_from_office,
    what_about_meetings_in_live,
    tell_us_your_opinion_about_us,
  } = useSelector((state) => state.advice);
  const { had_covid, had_antibody_test, covid_sickness_date, antibodies } =
    useSelector((state) => state.covid);
  const { first_name, last_name, email } = useSelector(
    (state) => state.identification
  );
  const { had_vaccine, vaccination_stage, i_am_waiting } = useSelector(
    (state) => state.injection
  );

  const dataForSubmit = {
    first_name,
    last_name,
    email,
    had_covid,
    had_antibody_test,
    covid_sickness_date,
    antibodies: {},
    had_vaccine: had_vaccine === "yes" ? true : false,
    vaccination_stage,
    i_am_waiting,
    non_formal_meetings,
    number_of_days_from_office,
    what_about_meetings_in_live,
    tell_us_your_opinion_about_us,
  };

  // Add property in antibodies object, only if it is not empty
  if (antibodies.test_date !== "") {
    dataForSubmit.antibodies.test_date = antibodies.test_date;
  }

  if (antibodies.number !== "") {
    dataForSubmit.antibodies.number = antibodies.number;
  }

  // Remove properties from object, if value is not defined
  if (what_about_meetings_in_live === "") {
    delete dataForSubmit.what_about_meetings_in_live;
  }

  if (tell_us_your_opinion_about_us === "") {
    delete dataForSubmit.tell_us_your_opinion_about_us;
  }

  if (had_vaccine === "yes") {
    delete dataForSubmit.i_am_waiting;
  } else {
    delete dataForSubmit.vaccination_stage;
  }

  if (had_antibody_test === "yes") {
    delete dataForSubmit.covid_sickness_date;
  } else {
    delete dataForSubmit.antibodies;
  }

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
    dispatch(setOffice(watch("office")));
    dispatch(setAssembly(watch("assembly")));
    dispatch(setEnvironment(watch("environment")));
  }, [watch()]);

  const submitForm = () => {
    console.log(dataForSubmit);
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
              label1="კვირაში ორჯერ"
              label2="კვირაში ერთხელ"
              label3="ორ კვირაში ერთხელ"
              label4="თვეში ერთხელ"
              value1="twice_a_week"
              value2="once_a_week"
              value3="once_in_a_two_weeks"
              value4="once_in_a_month"
              checked1={non_formal_meetings === "twice_a_week"}
              checked2={non_formal_meetings === "once_a_week"}
              checked3={non_formal_meetings === "once_in_a_two_weeks"}
              checked4={non_formal_meetings === "once_in_a_month"}
              errorMessage={errors.online?.message}
              register={register}
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
              value1={0}
              value2={1}
              value3={2}
              value4={3}
              value5={4}
              value6={5}
              checked1={number_of_days_from_office === "0"}
              checked2={number_of_days_from_office === "1"}
              checked3={number_of_days_from_office === "2"}
              checked4={number_of_days_from_office === "3"}
              checked5={number_of_days_from_office === "4"}
              checked6={number_of_days_from_office === "5"}
              errorMessage={errors.office?.message}
              register={register}
            />
            <Textarea
              name="assembly"
              title="რას ფიქრობ ფიზიკურ შეკრებაზე?"
              value={what_about_meetings_in_live}
              register={register}
            />
            <Textarea
              name="environment"
              title="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
              value={tell_us_your_opinion_about_us}
              register={register}
            />
            <div className="flex justify-end py-10">
              <Button text="დასრულება" />
            </div>
          </form>
        </div>
        {/* Content Image */}
        <ContentImage src={adviceIMG} />
      </div>
    </>
  );
};

export default Advice;
