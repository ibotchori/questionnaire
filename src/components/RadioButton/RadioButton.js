import React from "react";

const ThreeRadioButton = ({
  title,
  name,
  label1,
  label2,
  label3,
  label4,
  label5,
  label6,
  errorMessage,
}) => {
  return (
    <div className="flex justify-center flex-col pb-4 pt-1">
      <p className="pb-2 font-bold max-w-lg">{title}</p>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name={name}
          id="flexRadioDefault1"
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="flexRadioDefault1"
        >
          {label1}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name={name}
          id="flexRadioDefault2"
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="flexRadioDefault2"
        >
          {label2}
        </label>
      </div>
      {label3 && (
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={name}
            id="flexRadioDefault3"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault3"
          >
            {label3}
          </label>
        </div>
      )}
      {label4 && (
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={name}
            id="flexRadioDefault3"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault3"
          >
            {label4}
          </label>
        </div>
      )}
      {label5 && (
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={name}
            id="flexRadioDefault3"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault3"
          >
            {label5}
          </label>
        </div>
      )}
      {label6 && (
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={name}
            id="flexRadioDefault3"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault3"
          >
            {label6}
          </label>
        </div>
      )}
      <span className="text-red-500 required-dot text-xs pl-4">
        {errorMessage}
      </span>
    </div>
  );
};

export default ThreeRadioButton;
