import React from "react";
import SideNavButton from "./common/SideNavButton";
import { sideNavData } from "./common/data";

const SideNav = () => {
  return (
    <div className="p-6 flex flex-col  flex-wrap w-[23%]">
      <h4 className="text-[#7d899d] invisible sm:visible sm:text-[18px] md:text-[20px] font-normal tracking-widest">
        CATEGORIES
      </h4>
      {sideNavData.map((item, index) => (
        <SideNavButton key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default SideNav;
