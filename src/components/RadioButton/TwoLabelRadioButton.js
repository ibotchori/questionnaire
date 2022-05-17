import React from "react";

const TwoLabelRadioButton = ({
  title,
  firstLabel,
  secondLabel,
  errorMessage,
}) => {
  return (
    <div className="flex justify-center flex-col pb-4">
      <p className="pb-2 font-bold">{title}</p>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="radio"
          id="flexRadioDefault1"
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="flexRadioDefault1"
        >
          {firstLabel}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="radio"
          id="flexRadioDefault2"
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="flexRadioDefault2"
        >
          {secondLabel}
        </label>
      </div>
      <span className="text-red-500 required-dot text-xs pl-4">
        {errorMessage}
      </span>
    </div>
  );
};

export default TwoLabelRadioButton;