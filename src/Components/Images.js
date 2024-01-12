import React from "react";
import "./images.css";

function Gallery({ title, path, handleImage, index }) {
  const handleClick = () => {
    handleImage(index);
  };

  return (
    <div>
      <img src={path} alt="" onClick={handleClick} />
    </div>
  );
}

export { Gallery };
