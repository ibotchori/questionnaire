import React, { useEffect } from "react";
import image from "assets/images/injection-image.png";
import ContentImage from "components/ContentImage/ContentImage";
import Info from "./components/Info/Info";
import RadioButton from "components/RadioButton/RadioButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InjectionSchema } from "Helpers/Schema/InjectionSchema";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const { injection, stage, waitingFor } = useSelector(
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
    if (watch("injection") === "კი") {
      dispatch(setInjection(watch("injection")));
      dispatch(setStage(watch("stage")));
      dispatch(setWaitingFor(null));
    } else if (watch("injection") === "არა") {
      dispatch(setInjection(watch("injection")));
      dispatch(setWaitingFor(watch("waitingFor")));
      dispatch(setStage(null));
    }
  }, [watch()]);

  const submitForm = (data) => {
    reset();
    navigate("/advice");

    console.log(data);
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
              value1="კი"
              value2="არა"
              errorMessage={errors.injection?.message}
              register={register}
              checked1={injection === "კი"}
              checked2={injection === "არა"}
            />
            {injection === "კი" && (
              <RadioButton
                title="აირჩიე რა ეტაპზე ხარ*"
                name="stage"
                value1="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                value2="სრულად აცრილი ვარ"
                value3="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                errorMessage={errors.stage?.message}
                register={register}
                checked1={
                  stage === "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                }
                checked2={stage === "სრულად აცრილი ვარ"}
                checked3={
                  stage === "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                }
              />
            )}

            {stage === "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" && (
              <Info text="რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი" />
            )}

            {injection === "არა" && (
              <RadioButton
                title="რას ელოდები?*"
                name="waitingFor"
                value1="დარეგისტრირებული ვარ და ველოდები რიცხვს"
                value2="არ ვგეგმავ"
                value3="გადატანილი მაქვს და ვგეგმავ აცრას"
                errorMessage={errors.waitingFor?.message}
                register={register}
                checked1={
                  waitingFor === "დარეგისტრირებული ვარ და ველოდები რიცხვს"
                }
                checked2={waitingFor === "არ ვგეგმავ"}
                checked3={waitingFor === "გადატანილი მაქვს და ვგეგმავ აცრას"}
              />
            )}

            {waitingFor === "არ ვგეგმავ" && <Info icon={true} />}
            {waitingFor === "გადატანილი მაქვს და ვგეგმავ აცრას" && (
              <Info
                text={"👉 რეგისტრაციის ბმული"}
                header="ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.  "
              />
            )}
          </form>
        </div>
        {/* Content Image */}
        <ContentImage src={image} />
      </div>
    </>
  );
};

export default Injection;
