import React from "react";
import logo2 from "../../icons/navbar/logo2.png";
import rightArrow from "../../icons/navbar/right-arrow.svg";
import shirt from "../../icons/navbar/shirt.svg";
import propTypes from "prop-types";

const SideNavButton = ({ name, icon }) => {
  return (
    <div className="mt-4 flex justify-between items-center">
      <div className="flex items-center justify-between">
        <img src={icon} width="35px" alt="shirt" />
        <p className="text-[#505568] text-[20px] pl-3">{name}</p>
      </div>
      <div>
        <img src={rightArrow} width="20px" alt="arrow" />
      </div>
    </div>
  );
};

export default SideNavButton;

SideNavButton.propTypes = {
  name: propTypes.string,
  icon: propTypes.string,
};
