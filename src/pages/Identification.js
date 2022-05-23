import React from "react";
import image from "../assets/images/identification-image.png";
import ContentImage from "../components/ContentImage/ContentImage";
import Input from "../components/Input/Input";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IdentificationSchema } from "../Helpers/Schema/IdentificationSchema";

/* Redux */
import { useSelector } from "react-redux";
// actions
import {
  setFirstName,
  setLastName,
  setEmail,
} from "../features/identification/identificationSlice";

const Identification = () => {
  //  Global state (Redux)
  const { first_name, last_name, email } = useSelector(
    (state) => state.identification
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(IdentificationSchema),
  });

  const submitForm = (data) => {
    dispatch(setFirstName(data.firstName));
    dispatch(setLastName(data.lastName));
    dispatch(setEmail(data.email));
    reset();
    navigate("/covid");
  };

  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20  lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-6 md:pl-20 ">
          <form id="identification-form" onSubmit={handleSubmit(submitForm)}>
            <Input
              title={"სახელი*"}
              name="firstName"
              placeholder={"Your name"}
              errorMessage={errors.firstName?.message}
              reducer={setFirstName}
              value={first_name}
              register={register}
            />
            <Input
              title={"გვარი*"}
              name="lastName"
              placeholder={"Your surname"}
              errorMessage={errors.lastName?.message}
              reducer={setLastName}
              value={last_name}
              register={register}
            />
            <Input
              title={"მეილი*"}
              name="email"
              placeholder={"Your email"}
              errorMessage={errors.email?.message}
              reducer={setEmail}
              value={email}
              register={register}
            />
          </form>

          {/* Content Hint */}
          <div className=" pt-20">
            <div className=" pt-6 max-w-sm border-t-2  border-gray-200 ">
              <p className="pb-2 text-xs font-thin">
                *-ით მონიშნული ველების შევსება სავალდებულოა
              </p>
            </div>
          </div>
        </div>
        {/* Content Image */}
        <ContentImage src={image} />
      </div>
    </>
  );
};

export default Identification;
