import React from "react";

const ContentImage = ({ src }) => {
  return (
    <div className=" hidden lg:block">
      <img className=" max-h-[670px]  mr-[150px]  " alt="" src={src} />
    </div>
  );
};

export default ContentImage;
