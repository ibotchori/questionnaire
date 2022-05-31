import React from "react";

const Info = ({ text, icon, header }) => {
  return (
    <div className="pl-5 pb-4">
      {header && <p className="max-w-sm pb-4">{header}</p>}
      {text && <p>{text}</p>}
      <a href="https://booking.moh.gov.ge/" className="text-blue-500">
        <p></p>
        {icon && <>&#128073;</>} https://booking.moh.gov.ge/
      </a>
    </div>
  );
};

export default Info;
