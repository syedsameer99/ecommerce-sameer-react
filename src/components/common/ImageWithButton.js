import React from "react";
import bgImage from "../../assets/Images/homePageImages/photo-1503664974666-c4b8f669f3ae.jpg";

const ImageWithButton = () => {
  return (
    <div className="relative">
      <img src={bgImage} alt="Background" className="rounded-lg" />
      <div className="absolute flex bottom-8 left-0">
        <button className=" bg-black text-white py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ImageWithButton;
