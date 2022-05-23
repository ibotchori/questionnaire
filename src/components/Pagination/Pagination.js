import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const prevButtonClick = () => {
    switch (location.pathname) {
      case "/covid":
        navigate("/identification");
        break;
      case "/injection":
        navigate("/covid");
        break;

      default:
        navigate("/injection");
        break;
    }
  };
  const nextButtonClick = () => {
    switch (location.pathname) {
      case "/identification":
        navigate("/covid");
        break;
      case "/covid":
        navigate("/injection");
        break;

      default:
        navigate("/advice");
        break;
    }
  };

  return (
    <div className=" flex justify-center  text-center bottom-0 pt-20  w-full pb-20 ">
      <div className="flex  w-32  justify-between">
        <div
          onClick={prevButtonClick}
          className={
            location.pathname === "/identification"
              ? "invisible"
              : "cursor-pointer "
          }
        >
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L3 11.3158L17 21.6316"
              stroke="#232323"
              strokeWidth="2.4"
            />
          </svg>
        </div>

        <button
          type="submit"
          form="identification-form"
          className={
            location.pathname === "/advice" ? "invisible" : "cursor-pointer"
          }
        >
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L15 11.3158L1 21.6316"
              stroke="#232323"
              strokeWidth="2.4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
