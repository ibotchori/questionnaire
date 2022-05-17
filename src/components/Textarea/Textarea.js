import React from "react";

const Textarea = () => {
  return (
    <textarea
      id="w3review"
      name="w3review"
      rows="4"
      cols="50"
      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
    >
      At w3schools.com you will learn how to make a website. They offer free
      tutorials in all web development technologies.
    </textarea>
  );
};

export default Textarea;
