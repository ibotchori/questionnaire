import React from "react";

const RadioButton = ({
  title,
  name,
  errorMessage,
  register,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  checked1,
  checked2,
  checked3,
  checked4,
  checked5,
  checked6,
}) => {
  return (
    <div className="flex justify-center flex-col pb-4 pt-1">
      <p className="pb-2 font-bold max-w-lg">{title}</p>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name={name}
          value={value1}
          id="flexRadioDefault1"
          {...register(name)}
          defaultChecked={checked1}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="flexRadioDefault1"
        >
          {value1}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name={name}
          value={value2}
          id="flexRadioDefault2"
          {...register(name)}
          defaultChecked={checked2}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="flexRadioDefault2"
        >
          {value2}
        </label>
      </div>
      {value3 && (
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={name}
            value={value3}
            id="flexRadioDefault3"
            {...register(name)}
            defaultChecked={checked3}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault3"
          >
            {value3}
          </label>
        </div>
      )}
      {value4 && (
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={name}
            id="flexRadioDefault4"
            value={value4}
            {...register(name)}
            defaultChecked={checked4}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault4"
          >
            {value4}
          </label>
        </div>
      )}
      {value5 && (
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={name}
            id="flexRadioDefault5"
            value={value5}
            {...register(name)}
            defaultChecked={checked5}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault5"
          >
            {value5}
          </label>
        </div>
      )}
      {value6 && (
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={name}
            id="flexRadioDefault6"
            value={value6}
            {...register(name)}
            defaultChecked={checked6}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault6"
          >
            {value6}
          </label>
        </div>
      )}

      <span className="text-red-500 required-dot text-xs pl-4">
        {errorMessage}
      </span>
    </div>
  );
};

export default RadioButton;
