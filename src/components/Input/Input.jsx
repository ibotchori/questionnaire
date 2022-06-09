import React from "react";

const Input = ({
  title,
  name,
  placeholder,
  errorMessage,
  value,
  register,
  type = "text",
}) => {
  return (
    <div className=" pt-6 max-w-md ">
      <label htmlFor="required-email" className="text-gray-700 flex ">
        <p className="pb-2 font-bold">{title}</p>
      </label>
      <input
        defaultValue={value}
        type={type}
        id={name}
        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      <span className="text-red-500 required-dot text-xs pl-4 block h-1">
        {errorMessage}
      </span>
      <span className="text-red-500 required-dot text-xs pl-4 block h-1 invisible">
        hidden text hidden text hidden text hidden text hidden text hidden text
        hidden text
      </span>
    </div>
  );
};

export default Input;
