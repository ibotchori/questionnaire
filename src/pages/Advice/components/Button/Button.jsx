import React from "react";

const Button = ({ text }) => {
  return (
    <button
      id="submit"
      type="submit"
      className="bg-button-100 hover:bg-button-200 text-white font-bold py-3 px-6 rounded-full w-40 "
    >
      {text}
    </button>
  );
};

export default Button;
