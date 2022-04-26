import React from "react";

const ContentImage = ({ src }) => {
  return (
    <div className="max-w-3xl max-h-96   hidden lg:block ">
      <img className="" alt="" src={src} />
    </div>
  );
};

export default ContentImage;
