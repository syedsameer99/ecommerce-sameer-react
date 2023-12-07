import React from "react";
import SideNavButton from "./common/SideNavButton";
import { sideNavData } from "./common/data";

const SideNav = () => {
  return (
    <div className="p-6  w-[20%] border border-black">
      <h4 className="text-[#7d899d] text-[22px] font-medium tracking-widest">
        CATEGORIES
      </h4>
      {sideNavData.map((item, index) => (
        <SideNavButton key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default SideNav;
