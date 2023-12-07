import React from "react";
import logo2 from "../../icons/navbar/logo2.png";

const SideNavButton = () => {
  return (
    <div className="mt-4 flex justify-between border border-black">
      <div className="flex items-center justify-between">
        <img src={logo2} className="w-[40px]" />
        <p className="text-[#505568] text-[20px] pl-2">Men</p>
      </div>
      <div>
        <img src={logo2} className="w-[40px]" />
      </div>
    </div>
  );
};

export default SideNavButton;
