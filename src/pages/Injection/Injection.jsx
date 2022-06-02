import React, { useEffect } from "react";
import Info from "./components/Info/Info";
import { RadioButton, ContentImage } from "components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InjectionSchema } from "Helpers/Schema/InjectionSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { injectionIMG } from "assets/images";

/* Redux */
import { useSelector } from "react-redux";
// actions
import {
  setInjection,
  setStage,
  setWaitingFor,
} from "features/injection/injectionSlice";

const Injection = () => {
  //  Global state (Redux)
  const { had_vaccine, vaccination_stage, i_am_waiting } = useSelector(
    (state) => state.injection
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
    resolver: yupResolver(InjectionSchema),
  });

  useEffect(() => {
    if (watch("injection") === "yes") {
      dispatch(setInjection(watch("injection")));
      dispatch(setStage(watch("stage")));
      dispatch(setWaitingFor(null));
    } else if (watch("injection") === "no") {
      dispatch(setInjection(watch("injection")));
      dispatch(setWaitingFor(watch("waitingFor")));
      dispatch(setStage(null));
    }
  }, [watch()]);

  const submitForm = (data) => {
    reset();
    navigate("/advice");
  };

  return (
    <>
      {/* Content */}
      <div className="flex justify-start lg:justify-between px-5 sm:px-20 md:px-30  md:pr-20 lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-10 md:pl-20">
          <form id="injection-form" onSubmit={handleSubmit(submitForm)}>
            <RadioButton
              title="უკვე აცრილი ხარ?*"
              name="injection"
              label1="კი"
              label2="არა"
              value1="yes"
              value2="no"
              errorMessage={errors.injection?.message}
              register={register}
              checked1={had_vaccine === "yes"}
              checked2={had_vaccine === "no"}
            />
            {had_vaccine === "yes" && (
              <RadioButton
                title="აირჩიე რა ეტაპზე ხარ*"
                name="stage"
                label1="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                label2="სრულად აცრილი ვარ"
                label3="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                value1="first_dosage_and_registered_on_the_second"
                value2="fully_vaccinated"
                value3="first_dosage_and_not_registered_yet"
                errorMessage={errors.stage?.message}
                register={register}
                checked1={
                  vaccination_stage ===
                  "first_dosage_and_registered_on_the_second"
                }
                checked2={vaccination_stage === "fully_vaccinated"}
                checked3={
                  vaccination_stage === "first_dosage_and_not_registered_yet"
                }
              />
            )}

            {vaccination_stage === "first_dosage_and_not_registered_yet" && (
              <Info text="რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი" />
            )}

            {had_vaccine === "no" && (
              <RadioButton
                title="რას ელოდები?*"
                name="waitingFor"
                label1="დარეგისტრირებული ვარ და ველოდები რიცხვს"
                label2="არ ვგეგმავ"
                label3="გადატანილი მაქვს და ვგეგმავ აცრას"
                value1="registered_and_waiting"
                value2="not_planning"
                value3="had_covid_and_planning_to_be_vaccinated"
                errorMessage={errors.waitingFor?.message}
                register={register}
                checked1={i_am_waiting === "registered_and_waiting"}
                checked2={i_am_waiting === "not_planning"}
                checked3={
                  i_am_waiting === "had_covid_and_planning_to_be_vaccinated"
                }
              />
            )}

            {i_am_waiting === "not_planning" && <Info icon={true} />}
            {i_am_waiting === "had_covid_and_planning_to_be_vaccinated" && (
              <Info
                text={"👉 რეგისტრაციის ბმული"}
                header="ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.  "
              />
            )}
          </form>
        </div>
        {/* Content Image */}
        <ContentImage src={injectionIMG} />
      </div>
    </>
  );
};

export default Injection;
