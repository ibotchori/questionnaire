import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1
        id="404"
        className="text-9xl font-extrabold text-white tracking-widest"
      >
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        დაფიქსირდა შეცდომა
      </div>
      <button className="mt-5">
        <div
          id="homeButton"
          onClick={handleClick}
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <div>მთავარი გვერდი</div>
          </span>
        </div>
      </button>
    </main>
  );
};

export default ErrorPage;
