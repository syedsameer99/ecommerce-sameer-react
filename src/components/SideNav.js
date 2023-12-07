import React from "react";
import SideNavButton from "./common/SideNavButton";

const SideNav = () => {
  return (
    <div className="p-6 border border-black w-[20%]">
      <h4 className="text-[#7d899d] text-[22px] font-medium tracking-widest">
        CATEGORIES
      </h4>
      <SideNavButton />
    </div>
  );
};

export default SideNav;
