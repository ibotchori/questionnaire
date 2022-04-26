import React from "react";

const Input = ({ name, placeholder, errorMessage }) => {
  return (
    <div className=" pt-6 max-w-md ">
      <label htmlFor="required-email" className="text-gray-700 flex ">
        <p className="pb-2 font-bold">{name}</p>

        <span className="text-red-500 required-dot">*</span>
      </label>
      <input
        type="text"
        id="required-email"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        name="email"
        placeholder={placeholder}
      />
      <span className="text-red-500 required-dot text-xs pl-4">
        {errorMessage}
      </span>
    </div>
  );
};

export default Input;
