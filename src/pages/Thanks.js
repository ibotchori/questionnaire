import React from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);

  return (
    <div className="flex flex-col items-center justify-center  h-screen bg-black ">
      <h1 className="lg:text-6xl tracking-[.5em] md:text-5xl sm:text-4xl text-3xl   max-w-48 text-white font-bold">
        მადლობა
      </h1>
    </div>
  );
};

export default Thanks;
