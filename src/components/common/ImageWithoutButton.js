import React, { useState } from "react";
import propTypes from "prop-types";

const ImageWithoutButton = ({ name, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative mt-5 justify-center rounded-lg overflow-hidden transform transition-transform duration-900 ${
        isHovered ? "scale-15" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={img}
        alt="Background"
        className={`rounded-lg object-cover w-[240px] h-[150px] transform transition-transform duration-400 ${
          isHovered ? "scale-105" : ""
        }`}
      />
      <div className="absolute inset-0 flex justify-center items-center text-white">
        <button className="bg-black px-5 py-2 text-[22px] tracking-[5px] hover:bg-white hover:text-black font-semibold rounded-md">
          {name}
        </button>
      </div>
    </div>
  );
};

export default ImageWithoutButton;

ImageWithoutButton.propTypes = {
  name: propTypes.string,
  img: propTypes.object,
};
