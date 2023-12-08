import React, { useState } from "react";
import bgImage from "../../assets/Images/homePageImages/photo-1503664974666-c4b8f669f3ae.jpg";
import rightArrow from "../../assets/icons/navbar/right-arrow2.svg";
import rightArrow2 from "../../assets/icons/navbar/right-arrow3.svg";

const ImageWithButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const iconChange = () => {
    setIsHovered(!isHovered);
  };
  return (
    // <div
    //   className="relative flex items-center pl-7 rounded-lg bg-cover bg-center bg-no-repeat h-[500px]"
    //   style={{ backgroundImage: `url(${bgImage})` }}
    // >
    //   <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
    //   <div className="text-center text-white">
    //     <h1 className="text-4xl font-bold mb-4">
    //       Welcome to our Clothing Store
    //     </h1>
    //     <p className="text-lg mb-6">Discover the latest trends in fashion.</p>
    //     <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700">
    //       Shop Now
    //     </button>
    //   </div>
    // </div>
    <div className="relative flex justify-center items-center md:justify-start overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      <img
        src={bgImage}
        alt="Background"
        className="rounded-lg object-cover w-full h-full"
      />
      <div className="absolute pl-5 pt-8 md:pt-0  ">
        <p className="text-white text-3xl sm:text-4xl  md:text-5xl  lg:text-8xl font-bold tracking-wider leading-tight">
          Hello there
        </p>
        <p className="text-[#e2dad4] text-[12px] sm:text-[18px] md:text-[20px] lg:text-[25px]  tracking-wider mt-1">
          Big floof would like you to buy a shirt
        </p>
        <button
          onTouchMove={iconChange}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex justify-between invisible md:visible items-center font-bold  bg-white hover:bg-black text-black hover:text-white  md:text-[15px] lg:text-[23px] tracking-wider py-2 px-4 md:w-[150px] lg:w-[230px] rounded mt-4"
        >
          SHOP SHIRTS
          <img
            src={isHovered ? rightArrow2 : rightArrow} // Use the appropriate hover icon
            className="pt-1 md:p-0 md:w-[20px] lg:w-[27px]"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageWithButton;
