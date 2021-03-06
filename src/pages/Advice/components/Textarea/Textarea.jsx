import React from "react";

const Textarea = ({ title, name, register, value, id }) => {
  return (
    <div id={id} className="max-w-lg">
      <p className="pt-6 pb-4 font-bold ">{title}</p>
      <textarea
        id="w3review"
        name={name}
        rows="4"
        cols="40"
        className="  rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
        {...register(name)}
        defaultValue={value}
      ></textarea>
    </div>
  );
};

export default Textarea;
