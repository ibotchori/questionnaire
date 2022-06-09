import React from "react";
import { Link } from "react-router-dom";
import { logo } from "assets/images";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 ">
      <Link to="/identification">
        <img id="logo" alt="Logo" className="w-24 h-24 mb-20 " src={logo} />
      </Link>
      <Link to="/identification">
        <h1 id="welcome-text" className="text-3xl w-48 text-center font-bold">
          კითხვარის დაწყება
        </h1>
      </Link>
    </div>
  );
};

export default Landing;
