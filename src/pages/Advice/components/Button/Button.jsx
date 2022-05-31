import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/thanks");
  };
  return (
    <button
      type="submit"
      // onClick={handleClick}
      className="bg-button-100 hover:bg-button-200 text-white font-bold py-3 px-6 rounded-full w-40 "
    >
      {text}
    </button>
  );
};

export default Button;
