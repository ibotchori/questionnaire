import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/identification":
        setPageNumber("1/4");
        break;
      case "/covid":
        setPageNumber("2/4");
        break;
      case "/injection":
        setPageNumber("3/4");
        break;
      default:
        setPageNumber("4/4");
    }
  }, [location.pathname]);

  return (
    <div className="px-5 sm:px-20 md:px-40 pt-10  ">
      <div className="flex justify-between w-full text-2xl border-b-2 pb-2 border-gray-500 ">
        <p className="text-red-500 font-black">REDBERRY</p>
        <div className="font-semibold tracking-widest">{pageNumber}</div>
      </div>
    </div>
  );
};

export default Header;
