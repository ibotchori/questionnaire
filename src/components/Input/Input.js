import React from "react";
import { useDispatch } from "react-redux";

const Input = ({ name, placeholder, errorMessage, reducer, value }) => {
  const dispatch = useDispatch();
  return (
    <div className=" pt-6 max-w-md ">
      <label htmlFor="required-email" className="text-gray-700 flex ">
        <p className="pb-2 font-bold">{name}</p>
      </label>
      <input
        onChange={(e) => {
          dispatch(reducer(e.target.value));
        }}
        value={value}
        type="text"
        id="required-email"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
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
