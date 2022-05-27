import React, { useEffect } from "react";
import image from "../assets/images/covid-image.png";
import ContentImage from "../components/ContentImage/ContentImage";
import Input from "../components/Input/Input";
import RadioButton from "../components/RadioButton/RadioButton";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CovidSchema } from "../Helpers/Schema/CovidSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IdentificationSchema } from "../Helpers/Schema/IdentificationSchema";

/* Redux */
import { useSelector } from "react-redux";
// actions
import {
  setCovid,
  setTest,
  setCovidPeriod,
  setTestDate,
  setTestQuantity,
} from "../features/covid/covidSlice";

const Covid = () => {
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
    resolver: yupResolver(CovidSchema),
  });

  useEffect(() => {
    if (watch("covid") === "არა" || watch("covid") === "ახლა მაქვს") {
      dispatch(setCovid(watch("covid")));
      dispatch(setTest(null));
      dispatch(setCovidPeriod(""));
      dispatch(setTestDate(""));
      dispatch(setTestQuantity(""));
    } else if (watch("test") === "კი" && watch("covid") === "კი") {
      dispatch(setCovid(watch("covid")));
      dispatch(setTest(watch("test")));
      dispatch(setTestDate(watch("testDate")));
      dispatch(setTestQuantity(watch("testQuantity")));
      dispatch(setCovidPeriod(""));
    } else if (watch("test") === "არა" && watch("covid") === "კი") {
      dispatch(setCovid(watch("covid")));
      dispatch(setTest(watch("test")));
      dispatch(setCovidPeriod(watch("covidPeriod")));
      dispatch(setTestDate(""));
      dispatch(setTestQuantity(""));
    } else {
      dispatch(setCovid(watch("covid")));
    }
  }, [watch()]);

  const submitForm = (data) => {
    reset();
    navigate("/injection");

    console.log(data);
  };

  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20 lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-10 md:pl-20">
          <form id="covid-form" onSubmit={handleSubmit(submitForm)}>
            <RadioButton
              title="გაქვს გადატანილი კოვიდ 19?*"
              name="covid"
              errorMessage={errors.covid?.message}
              register={register}
              value1="კი"
              value2="არა"
              value3="ახლა მაქვს"
              checked1={covid === "კი"}
              checked2={covid === "არა"}
              checked3={covid === "ახლა მაქვს"}
            />
            {covid === "კი" ? (
              <>
                <RadioButton
                  title="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
                  name="test"
                  errorMessage={errors.test?.message}
                  register={register}
                  value1="კი"
                  value2="არა"
                  checked1={test === "კი"}
                  checked2={test === "არა"}
                />
              </>
            ) : (
              ""
            )}

            {test === "არა" && covid === "კი" ? (
              <Input
                title={
                  "მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
                }
                name="covidPeriod"
                placeholder={"დდ/თთ/წწ"}
                errorMessage={errors.covidPeriod?.message}
                //errorMessage={"გთხოვთ მიუთითეთ პერიოდი"}
                register={register}
                value={covidPeriod}
              />
            ) : (
              ""
            )}

            {test === "კი" && covid === "კი" ? (
              <>
                <Input
                  title={
                    "თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*"
                  }
                  name="testDate"
                  placeholder={"რიცხვი"}
                  errorMessage={errors.testDate?.message}
                  register={register}
                  value={testDate}
                />
                <Input
                  name="testQuantity"
                  placeholder={"ანტისხეულების რაოდენობა"}
                  errorMessage={errors.testQuantity?.message}
                  register={register}
                  value={testQuantity}
                />
              </>
            ) : (
              ""
            )}
          </form>
        </div>
        {/* Content Image */}
        <ContentImage src={image} />
      </div>
    </>
  );
};

export default Covid;
