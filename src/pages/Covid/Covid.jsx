import React, { useEffect } from "react";
import { RadioButton, ContentImage, Input } from "components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CovidSchema } from "Helpers/Schema/CovidSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { covidIMG } from "assets/images";

/* Redux */
import { useSelector } from "react-redux";
// actions
import {
  setCovid,
  setTest,
  setCovidPeriod,
  setTestDate,
  setTestQuantity,
} from "features/covid/covidSlice";

const Covid = () => {
  //  Global state (Redux)
  const { had_covid, had_antibody_test, covid_sickness_date, antibodies } =
    useSelector((state) => state.covid);

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
    if (watch("covid") === "no" || watch("covid") === "have_right_now") {
      dispatch(setCovid(watch("covid")));
      dispatch(setTest(null));
      dispatch(setCovidPeriod(""));
      dispatch(setTestDate(""));
      dispatch(setTestQuantity(""));
    } else if (watch("test") === "yes" && watch("covid") === "yes") {
      dispatch(setCovid(watch("covid")));
      dispatch(setTest(watch("test")));
      dispatch(setTestDate(watch("testDate")));
      dispatch(setTestQuantity(watch("testQuantity")));
      dispatch(setCovidPeriod(""));
    } else if (watch("test") === "no" && watch("covid") === "yes") {
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
  };

  return (
    <>
      {/* Content */}
      <div className="flex justify-start lg:justify-between px-5 sm:px-20 md:px-30 md:pr-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-10 md:pl-20">
          <form id="covid-form" onSubmit={handleSubmit(submitForm)}>
            <RadioButton
              title="გაქვს გადატანილი კოვიდ 19?*"
              name="covid"
              errorMessage={errors.covid?.message}
              register={register}
              label1="კი"
              label2="არა"
              label3="ახლა მაქვს"
              value1="yes"
              value2="no"
              value3="have_right_now"
              checked1={had_covid === "yes"}
              checked2={had_covid === "no"}
              checked3={had_covid === "have_right_now"}
            />
            {had_covid === "yes" ? (
              <>
                <RadioButton
                  title="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
                  name="test"
                  errorMessage={errors.test?.message}
                  register={register}
                  label1="კი"
                  label2="არა"
                  value1="yes"
                  value2="no"
                  checked1={had_antibody_test === "yes"}
                  checked2={had_antibody_test === "no"}
                />
              </>
            ) : (
              ""
            )}

            {had_antibody_test === "no" && had_covid === "yes" ? (
              <Input
                title={
                  "მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
                }
                name="covidPeriod"
                placeholder={"დდ/თთ/წწ"}
                errorMessage={errors.covidPeriod?.message}
                //errorMessage={"გთხოვთ მიუთითეთ პერიოდი"}
                register={register}
                value={covid_sickness_date}
              />
            ) : (
              ""
            )}

            {had_antibody_test === "yes" && had_covid === "yes" ? (
              <>
                <Input
                  title={
                    "თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*"
                  }
                  name="testDate"
                  placeholder={"რიცხვი"}
                  errorMessage={errors.testDate?.message}
                  register={register}
                  value={antibodies.test_date}
                  type="date"
                />
                <Input
                  name="testQuantity"
                  placeholder={"ანტისხეულების რაოდენობა"}
                  errorMessage={errors.testQuantity?.message}
                  register={register}
                  value={antibodies.number}
                  type="number"
                />
              </>
            ) : (
              ""
            )}
          </form>
        </div>
        {/* Content Image */}
        <ContentImage src={covidIMG} />
      </div>
    </>
  );
};

export default Covid;
